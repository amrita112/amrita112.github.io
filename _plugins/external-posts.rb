require 'feedjira'
require 'httparty'
require 'jekyll'
require 'nokogiri'
require 'time'

module ExternalPosts
  class ExternalPostsGenerator < Jekyll::Generator
    safe true
    priority :high

    def generate(site)
      if site.config['external_sources'] != nil
        site.config['external_sources'].each do |src|
          puts "Fetching external posts from #{src['name']}:"
          if src['rss_url']
            fetch_from_rss(site, src)
          elsif src['posts']
            fetch_from_urls(site, src)
          end
        end
      end
    end

    def fetch_from_rss(site, src)
      # Some feeds (Substack in particular) return an HTML interstitial to
      # default HTTP clients, which Feedjira can't parse. Send a realistic
      # User-Agent and follow redirects, then parse defensively so a flaky
      # feed never breaks the whole site build.
      headers = {
        "User-Agent" => "Mozilla/5.0 (compatible; al-folio Jekyll site builder)",
        "Accept" => "application/rss+xml, application/atom+xml, application/xml, text/xml, */*"
      }
      response = HTTParty.get(src['rss_url'], headers: headers, follow_redirects: true)
      if response.nil? || response.body.nil? || response.body.strip.empty?
        warn "[external-posts] empty response from #{src['rss_url']} — skipping"
        return
      end
      unless response.code.to_i.between?(200, 299)
        warn "[external-posts] HTTP #{response.code} from #{src['rss_url']} — skipping"
        return
      end
      begin
        feed = Feedjira.parse(response.body)
      rescue Feedjira::NoParserAvailable, StandardError => e
        warn "[external-posts] could not parse #{src['rss_url']} (#{e.class}: #{e.message}) — skipping"
        warn "[external-posts] first 200 chars of body: #{response.body[0, 200].inspect}"
        return
      end
      process_entries(site, src, feed.entries) if feed.respond_to?(:entries) && feed.entries
    end

    def process_entries(site, src, entries)
      entries.each do |e|
        puts "...fetching #{e.url}"
        thumbnail = nil
        # RSS <enclosure url="..."/> — Substack puts the post preview image here.
        thumbnail = e.enclosure_url if e.respond_to?(:enclosure_url) && e.enclosure_url
        # Fallback: scrape the first <img> from the post content.
        if thumbnail.nil? && e.content
          if (m = e.content.match(/<img[^>]+src=["']([^"']+)["']/i))
            thumbnail = m[1]
          end
        end
        create_document(site, src['name'], e.url, {
          title: e.title,
          content: e.content,
          summary: e.summary,
          published: e.published,
          thumbnail: thumbnail
        })
      end
    end

    def create_document(site, source_name, url, content)
      # check if title is composed only of whitespace or foreign characters
      if content[:title].gsub(/[^\w]/, '').strip.empty?
        # use the source name and last url segment as fallback
        slug = "#{source_name.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')}-#{url.split('/').last}"
      else
        # parse title from the post or use the source name and last url segment as fallback
        slug = content[:title].downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
        slug = "#{source_name.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')}-#{url.split('/').last}" if slug.empty?
      end

      path = site.in_source_dir("_posts/#{slug}.md")
      doc = Jekyll::Document.new(
        path, { :site => site, :collection => site.collections['posts'] }
      )
      doc.data['external_source'] = source_name
      doc.data['title'] = content[:title]
      doc.data['feed_content'] = content[:content]
      doc.data['description'] = content[:summary]
      doc.data['date'] = content[:published]
      doc.data['redirect'] = url
      doc.data['thumbnail'] = content[:thumbnail] if content[:thumbnail]
      site.collections['posts'].docs << doc
    end

    def fetch_from_urls(site, src)
      src['posts'].each do |post|
        puts "...fetching #{post['url']}"
        content = fetch_content_from_url(post['url'])
        content[:published] = parse_published_date(post['published_date'])
        create_document(site, src['name'], post['url'], content)
      end
    end

    def parse_published_date(published_date)
      case published_date
      when String
        Time.parse(published_date).utc
      when Date
        published_date.to_time.utc
      else
        raise "Invalid date format for #{published_date}"
      end
    end

    def fetch_content_from_url(url)
      html = HTTParty.get(url).body
      parsed_html = Nokogiri::HTML(html)

      title = parsed_html.at('head title')&.text.strip || ''
      description = parsed_html.at('head meta[name="description"]')&.attr('content') || ''
      body_content = parsed_html.at('body')&.inner_html || ''

      {
        title: title,
        content: body_content,
        summary: description
        # Note: The published date is now added in the fetch_from_urls method.
      }
    end

  end
end

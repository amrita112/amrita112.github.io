---
layout: default
permalink: /blog/
title: blog
nav: true
nav_order: 2
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 10
  sort_field: date
  sort_reverse: true
  trail:
    before: 1
    after: 3
---

<div class="post substack-blog">

  {% assign blog_name_size = site.blog_name | size %}
  {% assign blog_description_size = site.blog_description | size %}
  {% if blog_name_size > 0 or blog_description_size > 0 %}
    <header class="substack-header">
      <h1>{{ site.blog_name }}</h1>
      <p class="substack-subtitle">{{ site.blog_description }}</p>
      <p class="substack-cta">
        <a href="https://learningtobehappy.substack.com/" target="_blank" rel="noopener">read &amp; subscribe on Substack →</a>
      </p>
    </header>
  {% endif %}

  <ul class="substack-post-list">
    {% if page.pagination.enabled %}
      {% assign postlist = paginator.posts %}
    {% else %}
      {% assign postlist = site.posts %}
    {% endif %}

    {% for post in postlist %}
      {% if post.external_source == blank %}
        {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
      {% else %}
        {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
      {% endif %}

      <li class="substack-card">
        {% if post.thumbnail %}
          <a class="substack-thumb" href="{% if post.redirect contains '://' %}{{ post.redirect }}{% else %}{{ post.url | relative_url }}{% endif %}" {% if post.redirect contains '://' %}target="_blank" rel="noopener"{% endif %}>
            <img src="{{ post.thumbnail }}" alt="" loading="lazy">
          </a>
        {% endif %}
        <div class="substack-body">
          <h3 class="substack-title">
            {% if post.redirect == blank %}
              <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            {% elsif post.redirect contains '://' %}
              <a href="{{ post.redirect }}" target="_blank" rel="noopener">{{ post.title }}</a>
            {% else %}
              <a href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
            {% endif %}
          </h3>
          {% if post.description %}
            <p class="substack-description">{{ post.description }}</p>
          {% endif %}
          <p class="substack-meta">
            {{ post.date | date: '%b %-d, %Y' }} &nbsp;·&nbsp; {{ read_time }} min read
          </p>
        </div>
      </li>
    {% endfor %}
  </ul>

  {% if page.pagination.enabled %}
    {% include pagination.liquid %}
  {% endif %}
</div>

<style>
  .substack-blog { max-width: 720px; margin: 0 auto; }

  .substack-header {
    text-align: left;
    padding: 1.25rem 0 1.5rem;
    border-bottom: 1px solid var(--global-divider-color);
    margin-bottom: 1.5rem;
  }
  .substack-header h1 {
    font-size: 1.9rem;
    margin: 0 0 0.25rem;
    color: var(--global-theme-color);
    font-weight: 700;
  }
  .substack-subtitle {
    font-size: 1rem;
    color: var(--global-text-color-light, #666);
    margin: 0 0 0.5rem;
  }
  .substack-cta { font-size: 0.9rem; margin: 0; }

  .substack-post-list { list-style: none; padding: 0; margin: 0; }

  .substack-card {
    display: flex;
    gap: 1.25rem;
    padding: 1.25rem 0;
    border-bottom: 1px solid var(--global-divider-color);
    align-items: flex-start;
  }
  .substack-body { flex: 1; min-width: 0; }
  .substack-thumb {
    flex: 0 0 140px;
    display: block;
    order: 2; /* image on the right, like Substack desktop */
  }
  .substack-thumb img {
    width: 140px;
    height: 140px;
    object-fit: cover;
    border-radius: 4px;
    display: block;
  }
  .substack-title {
    margin: 0 0 0.35rem;
    font-size: 1.15rem;
    line-height: 1.3;
    font-weight: 700;
  }
  .substack-title a { color: inherit; }
  .substack-title a:hover { text-decoration: underline; }
  .substack-description {
    color: var(--global-text-color-light, #666);
    margin: 0 0 0.5rem;
    font-size: 0.98rem;
    line-height: 1.4;
  }
  .substack-meta {
    color: var(--global-text-color-light, #888);
    font-size: 0.85rem;
    margin: 0;
  }

  @media (max-width: 540px) {
    .substack-card { flex-direction: column; }
    .substack-thumb, .substack-thumb img { width: 100%; flex: none; height: auto; max-height: 220px; }
  }
</style>

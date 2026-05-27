---
layout: about
title: home
permalink: /
subtitle: # TODO optional one-line subtitle under your name (e.g. "neuroscientist · writer · etc.") — leave blank to hide

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # set to true to crop the image as a circle
  # more_info: > # TODO optional — uncomment to add a small box under your photo
  #   <p>City, Country</p>

news: false # we hide the news block; toggle to true if you start adding _news entries
selected_papers: false # we don't use the bibliography page; flip to true if you do
social: true # shows the social icons + contact_note at the bottom of the page
# Latest Substack posts will surface here automatically — controlled by `latest_posts.enabled` in _config.yml.
---

I'm a neuroscientist, writer, and public policy enthusiast. I'm eager to learn about the world, and I want to work on problems that matter.

In my most recent role as clinical research scientist at [Bionic Sight](https://www.bionicsightllc.com/), I worked on a treatment for advanced stage blindness. I did a PhD in neuroscience at [Johns Hopkins University](https://neuroscience.jhu.edu/) and [Janelia Research Campus](https://www.janelia.org/). For my PhD, I studied the role of different types of neurons in the motor cortex. You can find a list of my publications [here](https://scholar.google.com/citations?user=h98eTlQAAAAJ&hl=en).

I have always wanted to be a writer. In our beautiful internet age, most people can be whatever they choose, if they put in the work. So I started a [blog](https://learningtobehappy.substack.com/) and various other writing projects.

I'm also interested in public policy. Since April 2023, I have volunteered for the [Center for Effective Governance of Indian States](https://cegis.org/), an organisation that partners with Indian state governments to achieve better development outcomes. We are building an open-source tool to standardise workflows used to improve the quality of administrative data collected by state governments.

You can reach me at amsi \[dot\] 1994 \[at\] gmail [dot] com.

<style>
  /* Push social icons to the bottom of the viewport on desktop, so the home
     page fills the screen instead of leaving whitespace below. We anchor
     `.social` to the bottom with absolute positioning rather than flex, so
     the floated profile image keeps its original wrap-around behaviour.
     On mobile the page is naturally taller than the viewport, so the rule
     is gated to ≥ 768px and the icons sit just below the bio there. */
  @media (min-width: 768px) {
    .post {
      position: relative;
      min-height: calc(100vh - 14rem);
      padding-bottom: 5rem;
    }
    .post .social {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }

  /* Smaller, brand-coloured social icons on the home page.
     Logo SVGs are pulled from cdn.simpleicons.org (see _data/socials.yml). */
  .social .contact-icons {
    font-size: 1rem;             /* shrink the surrounding line-height the parent rule sets */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
    flex-wrap: wrap;
  }
  .social .contact-icons a {
    display: inline-flex;
    align-items: center;
    line-height: 1;
  }
  .social .contact-icons a img,
  .social .contact-icons a svg,
  .social .contact-icons a svg image {
    width: 1.7rem;
    height: 1.7rem;
    margin: 0;
    overflow: visible;
    transition: transform 0.15s ease;
  }
  .social .contact-icons a:hover img,
  .social .contact-icons a:hover svg { transform: translateY(-2px); }
</style>


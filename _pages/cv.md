---
layout: page
permalink: /cv/
title: cv
nav: true
nav_order: 6
hide_title: true
---

<!--
  TODO: drop your CV PDF at  assets/pdf/CV.pdf  and the iframe below will pick it up.
  If you name it differently, change the two paths in src= and href= to match.
-->

<div class="cv-pdf-wrapper">
  <iframe
    class="cv-pdf"
    src="{{ '/assets/pdf/CV.pdf' | relative_url }}#view=FitH"
    title="Amrita Singh — CV"
    loading="lazy">
  </iframe>
  <p class="cv-pdf-fallback">
    Can't see the PDF?
    <a href="{{ '/assets/pdf/CV.pdf' | relative_url }}" target="_blank" rel="noopener">Open it in a new tab</a>.
  </p>
</div>

<style>
  .cv-pdf-wrapper { margin: 1rem 0; }
  .cv-pdf {
    width: 100%;
    height: 90vh;
    border: 1px solid var(--global-divider-color, #ccc);
    border-radius: 4px;
  }
  .cv-pdf-fallback {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: var(--global-text-color-light, #666);
  }
</style>

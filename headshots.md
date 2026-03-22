---
title: Professional Headshots & Portraits Bronx NYC | Marcelo Lopez Lopez
layout: default
description: Professional headshots and editorial portraits in the Bronx, NYC. Marcelo Lopez Lopez offers high-quality photography services for professionals and creatives.
type: parent
order: 2
---

<div class="section main">
        <div class="container">
                {% assign mypages = site.pages | where: "type", "headshots" %}
                {% for page in mypages %}
                <a class="button" href="{{ page.url | relative_url }}">{{ page.title }}</a>
                {% endfor %}
        </div>
</div>

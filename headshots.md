---
title: Headshots
layout: onpage
description: Editorial and Professional Portraits
type: parent
order: 3
---

<div class="section main">
	<div class="container">
		<div class="row" id="gallery">
			{% assign coll = site.collections | where: "label", "headshots" | first %}
			{% assign list = coll.files | sort: "basename" %}
			<!--{% assign l = coll.files.size | divided_by: 2 | ceil %}-->
			<div class="column">
				{% for image in list limit: 1 %}
				<article class="thumb">
					<img class="lozad u-max-full-width" data-src="{{ coll.label | append: '/' | append: image.name }}" alt="{{ image.basename }}" />
				</article>
				{% endfor %}
			</div>
		</div>
	</div>
</div>

<!--
<div class="section main">
	<div class="container">
		{% assign mypages = site.pages | where: "type", "headshots" %}
		{% for page in mypages %}
		<a class="button" href="{{ page.url | relative_url }}">{{ page.title }}</a>
		{% endfor %}
	</div>
</div>
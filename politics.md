---
title: Culture & Politics
layout: rest
description: Editorials, Events, and Fun
type: parent
order: 4
---

<div class="section main">
	<div class="container">
		{% assign collections = "editorials,events,politics,fun" | split: "," %}
		{% for coll_name in collections %}
			{% assign coll = site.collections | where: "label", coll_name | first %}
			{% if coll %}
				<h3>{{ coll.label | capitalize }}</h3>
				<div class="row" id="gallery-{{ coll.label }}">
					{% assign list = coll.files | sort: "basename" %}
					{% assign l = coll.files.size | divided_by: 2 | ceil %}
					<div class="one-half column">
						{% for image in coll.files limit: l %}
						<article class="thumb">
							<img class="lozad u-max-full-width" data-src="{{ coll.label | append: '/' | append: image.name | relative_url }}" alt="{{ image.basename }}" />
						</article>
						{% endfor %}
					</div>
					<div class="one-half column">
						{% for image in coll.files offset: l %}
						<article class="thumb">
							<img class="lozad u-max-full-width" data-src="{{ coll.label | append: '/' | append: image.name | relative_url }}" alt="{{ image.basename }}" />
						</article>
						{% endfor %}
					</div>
				</div>
			{% endif %}
		{% endfor %}
	</div>
</div>
---
title:  Creative Projects
layout: rest
description: With My Creative Leadership
type: parent
order: 4
---

<div class="section main">
	<div class="container">
		{% assign mypages = site.pages | where: "type", "project" %}
		{% for page in mypages %}
		<a class="button" href="{{ page.url | relative_url }}">{{ page.title }}</a>
		{% endfor %}
	</div>
</div>
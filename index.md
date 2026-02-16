---
title: home
layout: home
type: parent
order: 1
---

<div class="section header">
	<div class="container">
		<img src="{{ "/assets/img/translogo.webp" | relative_url }}">
		<h3 class="section-heading">Marcelo Lopez Lopez</h3>
		<p class="section-description">
			Bronx (NYC) Based Photographer & Creative Partner.
		</p>
		<div id="navbar-wrapper">
			<div id="navbar">
				<img id="brand" class="hide" src="{{ "/assets/img/translogo.webp" | relative_url }}">
				{% assign mypages = site.pages | where: "type", "parent" | sort: "order" %}
				{% for page in mypages %}
				<a class="button" href="{{ page.url | relative_url }}">{{ page.title }}</a>
				{% endfor %}
			</div>
		</div>
	</div>
</div>

<div class="section main">
	<div class="container">
		<h4> <p markdown="1" style="text-align: center;">
    		HEADSHOTS, PORTRAITS AND EDITORIAL PHOTOGRAPHY <br> 
		</p>
		<p markdown="2" style="text-align: center;" style="font-size: 18px;">
			Based in The Bronx, New York City <br>
			*Available for travel <br>
		</p>
	</div>
</div>

<div class="section entrypick">
	<div class="container">
		<div class="row" id="gallery">
			{% assign coll = site.collections | where: "label", "home" | first %}
			{% assign list = coll.files | sort: "basename" %}
			<!--{% assign l = coll.files.size | divided_by: 2 | ceil %}-->
			<div class="column">
			{% for image in list limit: 1 %}
				<article class="thumb">
					<img class="lozad u-tiny-width" data-src="{{ coll.label | append: '/' | append: image.name }}" alt="{{ image.basename }}" />
				</article>
				{% endfor %}
			</div>
		</div>
	</div>
</div>
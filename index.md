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
		<div class="linker">
            <a href="mailto:lopezlmarcelo@gmail.com"><i class="far fa-paper-plane" style="font-size:18px"></i></a>
			<a href="sms:+13479127485"><i class="fa fa-mobile-alt" style="font-size:18px"></i></a>
        </div>
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
    		HEADSHOTS, PORTRAITS AND EDITORIAL PHOTOGRAPHY
		</p> </h4>
		<p markdown="1" style="text-align: center;" style="font-size: 16px;">
		Based in The Bronx, New York City <br>
		*Available for travel*
		</p>
<!--	</div>
	<div class="container">
		<div class="row" id="gallery">
			{% assign coll = site.collections | where: "label", "home" | first %}
			{% assign list = coll.files | sort: "basename" %}
			<!!--{% assign l = coll.files.size | divided_by: 2 | ceil %} --!!>
-->
		<div class="column">
        	<img src="{{ "/assets/img/MLL0971.jpeg" | relative_url }}" alt="Photo of Marcelo Lopez Lopez, Bronx, NYC Photographer" style="max-width: 360px; width: 100%; height: auto; display: block; margin-left: auto; margin-right: auto;">
		</div>
	</div>
</div>
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
		<div class="links">
            <a href="mailto:lopezlmarcelo@gmail.com"><i class="far fa-paper-plane" style="font-size:22px"></i></a> &emsp;&emsp;&emsp;
			<a href="sms:+13479127485"><i class="fas fa-mobile-alt" style="font-size:22px"></i></a>
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

<div class="section first">
	<div class="headline">
		<h4> <p markdown="1" style="text-align: center;">
    		HEADSHOTS, PORTRAITS AND EDITORIAL PHOTOGRAPHY
		</p> </h4>
		<p style="text-align: center;" style="font-size: 16px; margin-left: auto; margin-right: auto;">
		Based in The Bronx, New York City <br>
		*Available for travel*
		</p>
		<div style="text-align: center;">
        	<img src="{{ "/assets/img/webbanner1.png" | relative_url }}" alt="Photo of Marcelo Lopez Lopez, Bronx, NYC Photographer" style="max-width: 360px; width: 100%; height: auto; display: block; margin-left: auto; margin-right: auto;">
		</div>
	</div>
</div>
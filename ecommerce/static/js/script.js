inventory.populateSite();

var filter = document.getElementById("filter");
var hamburger = document.getElementById("menu");
var body = document.getElementsByTagName("body")[0];
var filterMenu = document.getElementById("filter-menu");
var navMenu = document.getElementById("nav-menu");
var jeansHeader = document.getElementById("jeans-header");
var blazersHeader = document.getElementById("blazers-header");

var jeansContent = document.getElementById("jeans-content");
var blazersContent = document.getElementById("blazers-content");

var jeansArrow = document.getElementById("jeans-arrow");
var blazersArrow = document.getElementById("blazers-arrow");

var categoriesHeader = document.getElementById("footer-categories");
var informationHeader = document.getElementById("footer-information");
var contactUsHeader = document.getElementById("footer-contact-us");

var categoriesPlus = document.getElementById("categories");
var informationPlus = document.getElementById("information");
var contactUsPlus = document.getElementById("contact-us");

var categoriesContent = document.getElementById("footer-content-categories");
var informationContent = document.getElementById("footer-content-information");
var contactUsContent = document.getElementById("footer-content-contact-us");

filter.addEventListener('click', function(e) {
	filterMenu.classList.toggle("filter-open");
	navMenu.classList.remove("nav-menu-open");
	e.stopPropagation();
});

hamburger.addEventListener('click', function(e) {
	navMenu.classList.toggle("nav-menu-open");
	filterMenu.classList.remove("filter-open");
	e.stopPropagation();
});

body.addEventListener('click', function() {
	filterMenu.classList.remove("filter-open");
	navMenu.classList.remove("nav-menu-open");
});

filterMenu.addEventListener('click', function(e) {
	e.stopPropagation();
});

navMenu.addEventListener('click', function(e) {
	e.stopPropagation();
});

blazersHeader.addEventListener('click', function() {
	blazersArrow.classList.toggle("opened");
	blazersContent.classList.toggle("expanded");
});

jeansHeader.addEventListener('click', function() {
	jeansArrow.classList.toggle("opened");
	jeansContent.classList.toggle("expanded");
});

categoriesHeader.addEventListener('click', function() {
	categoriesPlus.classList.toggle("footer-plus-expanded");
	categoriesContent.classList.toggle("footer-menu-content-opened");
});

informationHeader.addEventListener('click', function() {
	informationPlus.classList.toggle("footer-plus-expanded");
	informationContent.classList.toggle("footer-menu-content-opened");
});

contactUsHeader.addEventListener('click', function() {
	contactUsPlus.classList.toggle("footer-plus-expanded");
	contactUsContent.classList.toggle("footer-menu-content-opened");
});


$(function() {
	$( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 2500,
		values: [ 300, 1700 ],
		slide: function( event, ui ) {
			$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		}
	});
	$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
		" - $" + $( "#slider-range" ).slider( "values", 1 ) );
});

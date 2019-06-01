'use strict';

(function($){
	$(document).ready(function() {
		// Code

		//map panel
		$('.container-contact__button').click((event)=> {
			event.currentTarget.parentElement.classList.toggle("active");
		})

		// create scroll
		let scroller = `<div id="scroller"><img src="images/atop.png"></div>`
		$('body').append(scroller)
		
		// append scroll
		$(window).scroll(function () {
			if ($(this).scrollTop() > 0) {
				$('#scroller').fadeIn();
			} else {
				$('#scroller').fadeOut();
			}
		});

		$('#scroller').click(function () {
			console.log($(this))
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});

	 $('.slider').slick({
	    dots: false,
	    infinite: true,
	    speed: 500,
	    adaptiveHeight: true,
	    slidesToShow: 3,
	    prevArrow: '<img class="slick-p" src="./images/icons/arrowprev.png">',
  	    nextArrow: '<img class="slick-n" src="./images/icons/arrownext.png">',
			responsive: [
		    {
		      breakpoint: 1025,
		      settings: {
		        slidesToShow: 2,
		      }
		    },

		    {
		      breakpoint: 721,
		      settings: {
		        slidesToShow: 1,
		      }
		    },
		]
	 });

	});

})(jQuery);

function initMap() {
	var center = {lat: 49.568678, lng: 34.585731},
	map  = new google.maps.Map(document.getElementById('map'), {
		zoom: 13, 
		center: center,
		disableDefaultUI: true,
		zoomControl: true,
		disableDefaultUI: true,
		styles: [
		{
			"featureType": "all",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#c6bbe1"
			}
			]
		},
		{
			"featureType": "all",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"gamma": 0.01
			},
			{
				"lightness": 20
			}
			]
		},
		{
			"featureType": "all",
			"elementType": "labels.text.stroke",
			"stylers": [
			{
				"saturation": -31
			},
			{
				"lightness": -33
			},
			{
				"weight": 2
			},
			{
				"gamma": 0.8
			}
			]
		},
		{
			"featureType": "all",
			"elementType": "labels.icon",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "geometry",
			"stylers": [
			{
				"lightness": 30
			},
			{
				"saturation": 30
			}
			]
		},
		{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
			{
				"saturation": 20
			}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [
			{
				"lightness": 20
			},
			{
				"saturation": -20
			}
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [
			{
				"lightness": 10
			},
			{
				"saturation": -30
			},
			{
				"color": "#a3a1ab"
			}
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry.stroke",
			"stylers": [
			{
				"saturation": 25
			},
			{
				"lightness": 25
			}
			]
		},
		{
			"featureType": "transit",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#ffffff"
			}
			]
		},
		{
			"featureType": "water",
			"elementType": "all",
			"stylers": [
			{
				"lightness": -20
			}
			]
		},
		{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#90c0e5"
			},
			{
				"visibility": "on"
			}
			]
		}
		]
	}),
	marker = new google.maps.Marker({
		title: 'Beetroot',
		position: {lat: 49.568678, lng: 34.585731},
		icon: 'images/marker.png',
		map: map
	}),

	infowindow =new google.maps.InfoWindow;

	google.maps.event.addListener(marker, 'click', (function(marker) {
		var info = '<div class="window">'+'<h1 class="window__title">' +marker.title+'</h1>'+'<p>'+'Welcome to Beetroot'+'</p>'+'</div>';
		return function() {
			infowindow.setContent(info);
			infowindow.open(map, marker);
		}})(marker));
};
google.maps.event.addDomListener(window, 'load', initMap); 
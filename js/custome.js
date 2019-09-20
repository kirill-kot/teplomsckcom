$(document).ready(function() {
	$('#photos .item *[rel="gallery"]').fancybox({
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
			title	: {
				type: 'inside'
			},
			thumbs	: {
				width	: 50,
				height	: 50
			}
		}
	});var w_hight = $(window).height() / 3;

	$('#why_choose_us .bottome-el *').addClass("hidden_an").viewportChecker({
			classToAdd: 'visible_an animated bounceInUp',
			offset: 150
	});

	$('#reviews .bottome-el *').addClass("hidden_an").viewportChecker({
			classToAdd: 'visible_an animated bounceInUp',
			offset: 150
	});

	$('.get-call').addClass("hidden_an").viewportChecker({
			classToAdd: 'visible_an animated bounceInUp',
			offset: 150
	});

	$('.carousel').addClass("hidden_an").viewportChecker({
			classToAdd: 'visible_an animated tada',
			offset: 150
	});

	$('#photos .item').addClass("hidden_an").viewportChecker({
			classToAdd: 'visible_an animated pulse',
			offset: 150
	});

	$('#footer-form>*').addClass("hidden_an").viewportChecker({
			classToAdd: 'visible_an animated lightSpeedIn',
			offset: 50
	});

	$('#why_choose_us .col-md-15:nth-of-type(1)').addClass("hidden_an").viewportChecker({
			classToAdd: 'visible_an animated bounceInLeft',
			offset: 150
	});

	$('#why_choose_us .col-md-15:nth-of-type(5)').addClass("hidden_an").viewportChecker({
			classToAdd: 'visible_an animated bounceInRight',
			offset: 150
	});
	$('#why_choose_us .col-md-15:nth-of-type(2)').addClass("hidden_an").viewportChecker({
			classToAdd: 'visible_an animated bounceInUp',
			offset: 150
	});
	$('#why_choose_us .col-md-15:nth-of-type(3)').addClass("hidden_an").viewportChecker({
			classToAdd: 'visible_an animated bounceInUp',
			offset: 150
	});
	$('#why_choose_us .col-md-15:nth-of-type(4)').addClass("hidden_an").viewportChecker({
			classToAdd: 'visible_an animated bounceInUp',
			offset: 150
	});

	 $('#services .prod:nth-of-type(1)').addClass("hidden_an").viewportChecker({
			classToAdd: 'visible_an animated flipInX',
			offset: 150
	});
	 $('#services .prod:nth-of-type(2)').addClass("hidden_an").viewportChecker({
			classToAdd: 'visible_an animated flipInY',
			offset: 150
	});
	 $('#services .prod:nth-of-type(3)').addClass("hidden_an").viewportChecker({
			classToAdd: 'visible_an animated flipInY',
			offset: 150
	});
	 $('#services .prod:nth-of-type(4)').addClass("hidden_an").viewportChecker({
			classToAdd: 'visible_an animated flipInX',
			offset: 150
	});

	 $('#milestones .item').addClass("hidden_an").viewportChecker({
			classToAdd: 'visible_an animated shake',
			offset: 150
	});

	$('#why_choose_us').viewportChecker({
			classToAdd: 'to-scroll',
			offset: w_hight,
			callbackFunction: function(el){
				el.animate({'top':parseInt(el.css('top'))-60});
			}
	});
	$('#services').viewportChecker({
			classToAdd: 'to-scroll',
			offset: w_hight,
			callbackFunction: function(el){
				el.animate({'top':parseInt(el.css('top'))-60});
			}
	});
	$('#milestones').viewportChecker({
			classToAdd: 'to-scroll',
			offset: w_hight,
			callbackFunction: function(el){
				el.animate({'top':parseInt(el.css('top'))-60});
			}
	});
	$('#price').viewportChecker({
			classToAdd: 'to-scroll',
			offset: w_hight,
			callbackFunction: function(el){
				el.animate({'top':parseInt(el.css('top'))-60});
			}
	});
	$('#photos, #reviews').viewportChecker({
			classToAdd: 'to-scroll',
			offset: 200,
			callbackFunction: function(el){
				el.animate({'top':parseInt(el.css('top'))-60});
			}
	});
	$('#reviews').viewportChecker({
			classToAdd: 'to-scroll',
			offset: 200,
			callbackFunction: function(el){
				el.animate({'top':parseInt(el.css('top'))-60});
			}
	});
	function initialize() {
		  var mapProp = {
			center:new google.maps.LatLng(55.868315,37.501219),
			zoom:17,
			mapTypeId:google.maps.MapTypeId.ROADMAP,
			panControl:false,
			zoomControl:false,
			mapTypeControl:false,
			scaleControl:false,
			streetViewControl:false,
			overviewMapControl:false,
			rotateControl:false
		  };
		  var mapProp2 = {
			center:new google.maps.LatLng(55.868315,37.498219),
			zoom:15,
			mapTypeId:google.maps.MapTypeId.ROADMAP,
			panControl:false,
			zoomControl:false,
			mapTypeControl:false,
			scaleControl:false,
			streetViewControl:false,
			overviewMapControl:false,
			rotateControl:false
		  };

		  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp),
			  map2=new google.maps.Map(document.getElementById("googleMap2"),mapProp2);

			var marker=new google.maps.Marker({
				position:new google.maps.LatLng(55.868315,37.498219)
			}), marker2=new google.maps.Marker({
				position:new google.maps.LatLng(55.868315,37.498219)
			});
				marker.setMap(map);
				marker2.setMap(map2);
		}
		google.maps.event.addDomListener(window, 'load', initialize);
});

$(document).on('scroll',function(){
	if($(window).scrollTop() > $(window).height()){
		$('.navbar').css('background-color', 'rgba(0,0,0,0.65)');
	}else{
		$('.navbar').css('background-color', 'transparent');
	}
});

$(document).on('click','#navbar a',function(){
	 $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top+160}, 1800);
	return false;
});

$(document).on('click','.get-call',function(){
	$('.modal').modal('hide');
	 $('html, body').animate({scrollTop: $('#footer').offset().top +160}, 1800);
	return false;
});

$(document).on('click','.photos',function(){
	$('.modal').modal('hide');
	 $('html, body').animate({scrollTop: $('#photos').offset().top +5}, 1800);
	return false;
});

$(document).on('click','.Наши работы',function(){
	$('.modal').modal('hide');
	 $('html, body').animate({scrollTop: $('#photos').offset().top +160}, 1800);
	return false;
});

$.fn.scrollTo = function( target, options, callback ){
  if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
  var settings = $.extend({
	scrollTarget  : target,
	offsetTop     : 50,
	duration      : 500,
	easing        : 'swing'
  }, options);
  return this.each(function(){
	var scrollPane = $(this);
	var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
	var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
	scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
	  if (typeof callback == 'function') { callback.call(this); }
	});
  });
}

//Form send ajax
function submit_form_1(){
console.log('submit');

		var formObj = $("#head-form");
		var formURL = formObj.attr("action");
		var formData = new FormData(document.getElementById("head-form"));
		$.ajax({
			url: formURL,
		type: 'POST',
			data:  formData,
		mimeType:"multipart/form-data",
		contentType: false,
			cache: false,
			processData:false,
		success: function(data, textStatus, jqXHR)
		{
		  console.log(data);
		  alert(data);
		},
		 error: function(jqXHR, textStatus, errorThrown)
		 {
		 }
		});
}
$("#head-form").submit(function(e){
	e.preventDefault(); //Prevent Default action.
	// submit_form_1();
	//e.unbind();
});

//Form send ajax
function submit_form_2(){
console.log('submit');

		var formObj = $("#footer-form");
		var formURL = formObj.attr("action");
		var formData = new FormData(document.getElementById("footer-form"));
		$.ajax({
			url: formURL,
		type: 'POST',
			data:  formData,
		mimeType:"multipart/form-data",
		contentType: false,
			cache: false,
			processData:false,
		success: function(data, textStatus, jqXHR)
		{
		  console.log(data);
		  alert(data);
		},
		 error: function(jqXHR, textStatus, errorThrown)
		 {
		 }
		});
}
$("#footer-form").submit(function(e){
	e.preventDefault(); //Prevent Default action.
	// submit_form_2();
	//e.unbind();
});

document.addEventListener("DOMContentLoaded", function() {

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");		
	});

	$(".toggle_mnu").click(function() {
		if($(".top_mnu").is(":visible")) {
			$(".top_mnu").fadeOut(600);				
		} else{
			$(".top_mnu").fadeIn(600);				
		}});
	

	$(function() {
		$( "#tabs" ).tabs();
	});		

	$(function() {
		$( "#accordion" ).accordion({
			collapsible: true,
			active: false,
			heightStyle: "content",
			icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
		});
	});			

	new WOW().init();

	$("#commentForm").validate({
		rules: {
			exampleInputEmail: {
			required: true,
			email: true
		  }
		}
	  });

	jQuery.extend(jQuery.validator.messages, {
		required: "Whoops, make sure it's an email",
		email: "Whoops, make sure it's an email"
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()){
			$('.top').addClass('active');
		} else{
			$('.top').removeClass('active');
		}
	});
	$('.top').click(function(){
		$('html,body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});


	$(window).on('load', function(){
		$(".loader_inner").fadeOut();
		$(".loader").delay(400).fadeOut("slow");
	});	

});

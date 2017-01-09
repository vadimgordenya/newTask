$(window).on('load', function() {
    var $preloader = $(".wrapp__svg");
    $preloader.delay(2000).fadeOut('slow');
});
$(document).ready(function(){
	$('a[href^="#"]').click(function (){
		elementClick = $(this).attr("href");
		destination  = $(elementClick).offset().top;
		
		$('body').animate({ scrollTop: destination }, 1000);
	});
	$("#message").click(function () {
		$(this).addClass("animated swing");
		setTimeout(function(){
			$("#message").removeClass("animated swing");
		}, 2000);
	});
});

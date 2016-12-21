$(document).ready(function(){
	$('a[href^="#"]').click(function (){
		elementClick = $(this).attr("href");
		destination  = $(elementClick).offset().top;
		
		$('body').animate({ scrollTop: destination }, 1000);
		
	});
});
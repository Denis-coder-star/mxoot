$(document).ready(function(){
	$('.header-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autopalySpeed: 2000,
		dots: true,
		speed: 1000,
	});
	$('.header-burger').click(function(event) {
		$('.header-burger,.header-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});



		$('.reviews-slider').slick ({
		slidesToScroll: 1,
		slidesToShow: 2,
		autoplay: true,
		autopalySpeed: 2000,
		speed: 1000,
		dots: true,
		responsive: [{
	 		breakpoint: 992,
	 		settings: {
	 			slidesToShow: 1,
	 			slidesToScroll: 1,
	 		},
	 	}],
	});
		$('.tarif-btn-left').click(function(){
			$(this).addClass('tarifs-active');
			$('.tarif-btn-right').removeClass('tarifs-active');
			$('#mak-3 p').text('990');
			$('#mak-10 p').text('2390');
			$('#mak-15 p').text('3990');
			$('#mak-30 p').text('6990');
		});
		$('.tarif-btn-right').click(function(){
			$(this).addClass('tarifs-active');
			$('.tarif-btn-left').removeClass('tarifs-active');
			$('#mak-3 p').text('113');
			$('#mak-10 p').text('219');
			$('#mak-15 p').text('349');
			$('#mak-30 p').text('615');
		});
});

document.body.onload = function() {

    setTimeout(function() {
    var preloader = document.getElementById('preloader');
    if(!preloader.classList.contains('done') ) {
    preloader.classList.add('done');
    }
    }, 1500);
 }
$( document ).ready(function() {

	windowSizeCheck();
	imageGallerySwitch();
	partyGallerySwitch();
	partyLoad();



});

function windowSizeCheck() {

	if ($( window ).width() < 660) {
			var a_href = $('.thumb-unit').attr('onclick');
			$('.thumb-unit').attr('onclick','return true');
			var a_href = $('.thumb-unit').attr('href');
			$('.thumb-unit').attr('href','#photos');
		}

}


function imageGallerySwitch() {

	var thumbReturn;

	$('.thumb-unit').click(function() {
		$('.img-select-container').css('left', '-100%');
		for (i=1;i<=16;i++) {
			if ($(this).attr("id") == "thumb-unit" + i) {
				thumbReturn = "#thumb-unit" + i;
				$('.img-container').css('backgroundImage', 'url("assets/img/Tracey('+ i +').jpg")')
			}
		}

	});

	$('.img-back').click(function() {
		$('.img-select-container').css('left', '0%');
		if ($( window ).width() < 660) {
			$('html,body').animate({ scrollTop: $(thumbReturn).offset().top - ( $(window).height() - $(thumbReturn).outerHeight(true) ) / 2  }, 200)
		}
	});

}

function partyGallerySwitch() {

	$('.location').click(function() {
		$('.party-select-container').css('left', '0%');
		if ($(this).attr("id") == "zoo") {
			$('.kids-container').css('backgroundImage', 'url("assets/img/locations/stillWater.png")')
		}
		else {
			$('.kids-container').css('backgroundImage', 'url("assets/img/locations/holyRosary.png")')
		}

	});

	$('.kids-party-unit').click(function() {
		$('.party-select-container').css('left', '0%');
		for (i=1;i<=4;i++) {
			if ($(this).attr("id") == "kids-party-unit" + i) {
				$('.kids-container').css('backgroundImage', 'url("assets/img/kidsparty/kidsparty('+ i +').png")')
			}
		}
	});

	$('.party-unit').click(function() {
		$('.party-select-container').css('left', '-200%');
		$('.party-container').show();
	});

	$('.party-back').click(function() {
		$('.party-select-container').css('left', '-100%');
		$('.party-container').hide(800);

	});

	$('.kids-back').click(function() {
		$('.party-select-container').css('left', '-100%');

	});

}

function partyLoad() {

	$.ajaxSetup({ cache: true });

	$('.party-unit').click(function() {

		for (i=1;i<=7;i++) {
			if ($(this).attr("id") == "bridesmaid" + i) {
				var $this = $(this),
					spinner = '<div class="loader">Loading...</div>',
					newHTML = 'party-content/bridesmaid(' + i + ').html';
			}
			if ($(this).attr("id") == "groomsmen" + i) {
				var $this = $(this),
					spinner = '<div class="loader">Loading...</div>',
					newHTML = 'party-content/groomsmen(' + i + ').html';
			}
		}

	$('.party-load').html(spinner).load(newHTML);

	});
}






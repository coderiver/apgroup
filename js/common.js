head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });

	//select
	$(document).click(function() {
		$(".js-select").removeClass("is-active");
		$(".js-select-list").slideUp(100);
	});
	
	// select list
	$("body").on("click",".js-select",function(event) {
		event.stopPropagation();
	});
	$("body").on("click",".js-select-text",function(event) {
		var select = $(this).parents(".js-select");
		if (select.hasClass("is-active")) {
			$(".js-select").removeClass("is-active");
			$(".js-select-list").slideUp(100);
		}
		else {
			$(".js-select").removeClass("is-active");
			$(".js-select-list").slideUp(100);
			select.toggleClass("is-active").find(".js-select-list").slideToggle(100);
		}
	   
	});

	$("body").on("click",".js-select-list li",function() {
		var val = $(this).attr("data-val");
		var text = $(this).text();
		var select = $(this).parents(".js-select");
		var selectList = $(this).parents(".js-select-list");
		select.find(".js-select-text").text(text);
		select.find("option").removeAttr("selected");
		select.find('option[value="'+val+'"]').attr("selected", "selected");
		selectList.find("li").removeClass("is-active");
		$(this).addClass("is-active");
		select.removeClass("is-active");
		selectList.slideUp(100);
		return false;		
	});
	//select END

	//nav
	$('.js-nav').each(function() {
		$('.js-nav-btn').on('click', function() {
			$('.js-nav').toggleClass('is-active');
		});
		$('body').on('click', function() {
			$('.js-nav').removeClass('is-active');
		});
		$('.nav').on('click', function(event) {
			event.stopPropagation();
		});
	});

	//login
	$('.js-popup-btn').on('click', function() {
		$('.js-popup').addClass('is-active');
		return false;
	});
	$('.js-popup-close').on('click', function() {
		$('.js-popup').removeClass('is-active');
		return false;
	});
	$('.js-popup').each(function() {
		$('body').on('click', function () {
			$('.js-popup').removeClass('is-active');
		});
		$('.popup').on('click', function(event) {
			event.stopPropagation();
		});
	});

	//validate
	var form_validate = $('.js-validate');

		if (form_validate.length) {

		form_validate.each(function () {

			var form_this = $(this);
			$.validate({
				form : form_this,
				validateOnBlur : false,
				borderColorOnError : false,
				scrollToTopOnError : false,

				onSuccess : function() {
					form_this.addClass('is-success');
					// ajaxSubmit(form_this);
					return false;
				},

				onError : function () {
					form_this.addClass('is-error');
				},
			});

		});

	 };
	$('.js-tooltip__close').on('click', function() {
		$('.js-form form').removeClass('is-error');
	});

	//photo
	$('.js-photo').each(function() {
		$('.js-photo-checkbox').on('click', function() {
			if ($('.js-photo-checkbox:checked').length > 0) {
				$('.js-photo-file').addClass('is-active');
			}
			else {
				$('.js-photo-file').removeClass('is-active');
			}
		});
		
	});
	//region
	$('.js-region').each(function() {
		$('.js-region').on('change', function() {
			if ($('.js-region-radio:checked').length > 0) {
				$(this).find('.js-region-box').addClass('is-active');
			}
			else {
				$(this).find('.js-region-box').removeClass('is-active');
			}
		});
		
	});

	//graph
	$('.js-graph-line').each(function() {
		$(this).width($(this).parents('.js-graph').find('.is-percent').text() + '%');
	});
	$('.js-graph-line').each(function() {
		$(this).width($(this).parents('.js-graph').find('.is-quantity').text() + '%');
	});
	//tabs
	$(".js-tabs-btn").click(function () {

		$('.js-tabs-btn').removeClass('is-active');
		$(this).addClass('is-active');

		var id = $(this).data("btn"),
		$item = $('.js-tabs-block');

		var $currItem = $('.js-tabs-block[data-block=' + id + ']');

		$('.js-tabs-block[data-block=' + id + ']').addClass('is-active');
		$item.not($currItem).removeClass('is-active');

		return false;

	});
});
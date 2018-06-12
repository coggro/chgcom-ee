$(document).ready(function() {
	var owl = $('.owl-carousel');
    owl.owlCarousel({
        autoplay:true,
        autoplayTimeout:3500,
        autoplayHoverPause:true,
        autoWidth:true,
        center:true,
        loop:true,
        margin:5
    });

    $('.bg-image').each(function() {
        console.log($(this).data('bg'));
        $(this).css('background-image', 'url(' + $(this).data('bg') + ')');
    });
});
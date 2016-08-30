jQuery(document).ready(function(){
	var touch 	= jQuery('#burger');
	var menu 	= jQuery('.menu');
	var nav = jQuery(".navbar");
	var ele = jQuery(".navbar-options");

	var divHeight;
	var obj = document.getElementById('limit');

	jQuery(touch).on('click', function(e) {
		e.preventDefault();
		ele.slideToggle();
	});

	/*jQuery(window).resize(function(){
		var w = jQuery(window).width();
		if(w > 767 && menu.is(':hidden')) {
			//menu.removeAttr('style');
		}
	});	*/


    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > obj.offsetHeight) {
            nav.addClass("navbar-show");
        } else {
            nav.removeClass("navbar-show");
        }
    });
});

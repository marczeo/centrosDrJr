jQuery(document).ready(function(){
	var touch 	= jQuery('#burger');
	var menu 	= jQuery('.menu');
	var nav = jQuery(".navbar");
	var ele = jQuery(".navbar-options");
	var navDiv = jQuery(".navbar-fixed");
	var max_mobile_mediaquery = 460;
	var mq_mobile = window.matchMedia( "(min-width: "+max_mobile_mediaquery+"px)" );
	var max_ipad_mediaquery = 800;
	var mq = window.matchMedia( "(min-width: "+max_ipad_mediaquery+"px)" );

	var divHeight;
	var obj = document.getElementById('limit');

	jQuery(touch).on('click', function(e) {
		e.preventDefault();		
		ele.slideToggle('fast',function(){
			if (mq_mobile.matches) {}
			else{
				if($('.navbar-options').is(":hidden"))
				{
					navDiv.css('width', '100px');
				}
				else{
					navDiv.css('width', '50%');
				}
			}
			if (mq.matches) {}
			else{
				if($('.navbar-options').is(":hidden"))
				{
					navDiv.css('width', '100px');
				}
				else{
					navDiv.css('width', '50%');
				}
			}
		});		
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
            if (mq_mobile.matches) {
            	nav.removeClass("navbar-show");
	        } else {
	          nav.addClass("navbar-show");
	        }
	        if (mq.matches) {
            	nav.removeClass("navbar-show");
	        } else {
	          nav.addClass("navbar-show");
	        }
        }
    });

});

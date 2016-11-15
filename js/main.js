var $window = $(window);
var $max_ipad_mediaquery = 800;
var $max_mobile_mediaquery = 360;
var mq = window.matchMedia( "(min-width: "+$max_ipad_mediaquery+"px)" );
var mq_mobile = window.matchMedia( "(min-width: "+$max_mobile_mediaquery+"px)" );
$(document).ready(function() {
    init_map();
});

function slide_section(section) {
    $("#" + section).slideToggle();
}
function slide_cirugia_pediatrica(section) {
	$(".ribbon").slideToggle();
    $(".right-cirugia").slideToggle();
    $(".icon").slideToggle();
    $(".contacto-50").slideToggle();
    $(".title-background").slideToggle();

    if ($("#" + section).is(":visible")) { 
    $(".destroyme").each(function() {
       $(this).remove();
    });
    $('.cirugias').append('<style class = "destroyme">.cirugias::before{width : 100%;}</style>');
}
else{
    $(".destroyme").each(function() {
       $(this).remove();
    });
    $('.cirugias').append('<style class = "destroyme">.cirugias::before{width : 50%;}</style>');
}
    $("#" + section).slideToggle();
}

function slide_columna_que_es(section){
    if ($("#" + section).is(":visible")){
        $('#que-es-principal').css('display', 'block');        
        $('#pattern').css('display', 'none'); 
        $('.title-cirugias').css('height', '50%');
        
    }
    else{
        $('#que-es-principal').css('display', 'none');
        $('#pattern').css('display', 'block');         
        $('.title-cirugias').css('height', '40%');  
        if (mq.matches) {
          // window width is at least 500px
        } else {
          $('.title-cirugias').css('height', '20%');
        }
        if (mq_mobile.matches) {
          // window width is at least 500px
        } else {
          $('#pattern').css('display', 'none'); 
        }

    }
    $("#" + section).slideToggle();

}
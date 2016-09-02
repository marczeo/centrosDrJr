var $window = $(window);

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
    }
    else{
        $('#que-es-principal').css('display', 'none');        
    }
    $("#" + section).slideToggle();

}
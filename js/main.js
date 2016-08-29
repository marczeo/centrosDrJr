var $window = $(window);

$(document).ready(function() {
    init_map();
});

function slide_section(section) {
    $("#" + section).slideToggle();
}
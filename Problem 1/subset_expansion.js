$(document).ready(function(){

    $('a').click(function(){
        $(this).prev().toggleClass('hide');
        if ($(this).prev().hasClass("hide")) {
            $(this).html("Show more");
        }
        else {
            $(this).html("Show less");
        }
    });

});
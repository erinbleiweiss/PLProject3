$(document).ready(function(){

    $('a').click(function(){
        $(this).prev().toggle('.hide');
    });

});
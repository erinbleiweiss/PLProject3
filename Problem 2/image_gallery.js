$(document).ready(function() {
    // preload images
    $("#image_list a").each(function() {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

    $('a').click(function(evt){
        var imageUrl = $(this).attr('href');
        var caption = $(this).attr('title');

        $('#image').attr('src', imageUrl);
        $('#caption').text(caption);

        evt.preventDefault();
    });

    // move focus to first thumbnail
    $("li:first-child a").focus();

});
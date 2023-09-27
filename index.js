$(document).ready(function() {
    $(".nav-links li a").on("click", function() {
        $(this).find($(".nav-links li a img").toggleClass("rotate"));
    });
       
});
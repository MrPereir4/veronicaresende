$(document).ready(function(){
    $(".hamburguer-bt").click(function() {
        $(this).toggleClass("on");
        $(".mobile-menu").toggleClass("active");

        if ($(this).hasClass("on")) {
            $(".hamburguer-bt__stripe").css("background-color", "var(--default_green_color)");
        } else {
            $(".hamburguer-bt__stripe").css("background-color", "var(--default_green_color)");
        }
    });
});

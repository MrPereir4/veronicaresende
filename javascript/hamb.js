$(document).ready(function(){
    $(".hamburguer-bt").click(function() {
        $(this).toggleClass("on");
        $(".mobile-menu").toggleClass("active");

        // Se o botão hambúrguer está ativo, muda a cor do stripe
        if ($(this).hasClass("on")) {
            $(".hamburguer-bt__stripe").css("background-color", "var(--default_green_color)");
        } else {
            $(".hamburguer-bt__stripe").css("background-color", "var(--default_green_color)");
        }
    });

    // Adiciona evento de clique nos links do menu móvel
    $(".btns_a").click(function() {
        // Remove a classe 'active' do menu móvel
        $(".mobile-menu").removeClass("active");
        // Remove a classe 'on' do botão hambúrguer
        $(".hamburguer-bt").removeClass("on");
        // Opcional: Restaura a cor original do hamburguer-bt__stripe, se necessário
        // $(".hamburguer-bt__stripe").css("background-color", ""); // Ajuste conforme a cor original
    });
});

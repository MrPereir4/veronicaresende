
  $(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false
      });
  
    // Adicione funcionalidades aos botões personalizados
    $('.custom-prev').on('click', function() {
      $('.carousel').slick('slickPrev');
    });
  
    $('.custom-next').on('click', function() {
      $('.carousel').slick('slickNext');
    });

    // Inicialização do AOS
    AOS.init();

    // Atualizar AOS após mudanças no Slick Carousel (opcional)
    $('.carousel').on('afterChange', function() {
        AOS.refresh();
    });
  });
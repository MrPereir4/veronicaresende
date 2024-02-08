$(document).ready(function() {
    // Adiciona um evento de clique para cada imagem no carrossel de navegação
    $('.carrousel_slider_holder_sec_7 img').on('click', function() {
      // Obtém o caminho da imagem clicada
      var imgSrc = $(this).attr('src');
  
      // Atualiza a imagem no carrossel principal
      $('.sec_7_image_showing img').attr('src', imgSrc);
    });
  });
  
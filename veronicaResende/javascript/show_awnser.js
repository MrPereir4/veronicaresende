$(document).ready(function() {
    $('.single_item_section_10_item').click(function() {
      var content = $(this).find('.content_item_section_10');
      var arrow = $(this).find('.header_item_section_10 img'); // Seletor para a imagem da seta
  
      if (content.hasClass('open')) {
        content.removeClass('open').animate({
          maxHeight: '2.5em',
          opacity: 1
        }, 500);
        arrow.css('transform', ''); // Remove a rotação
      } else {
        content.addClass('open').animate({
          maxHeight: '50em',
          opacity: 1
        }, 500);
        arrow.css('transform', 'rotate(-90deg)'); // Adiciona rotação de 90 graus
      }
    });
  });
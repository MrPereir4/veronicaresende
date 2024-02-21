$(document).ready(function() {

    function autoChangeImages() {
      var images = $('.carrousel_slider_holder_sec_7 img');
      var currentIndex = 0;
      setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length;
        var imgSrc = $(images[currentIndex]).attr('src');
        $('.sec_7_image_showing img').attr('src', imgSrc);
      }, 2000);
    }
  
    function autoChangeImages_mobile() {
      var images = $('.carrousel_slider_holder_sec_7 img');
      var currentIndex = 0;
      setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length;
        var imgSrc = $(images[currentIndex]).attr('src');
        $('.sec_7_image_showing_mobile img').attr('src', imgSrc);
      }, 2000);
    }
  
    autoChangeImages();
    autoChangeImages_mobile();
  
    function ajustarImagemEObterPorcentagem() {
      var alturaDiv = $('#bussiness_content').height();
      console.log('alturaDiv: ' + alturaDiv);
  
      var larguraTela = $(window).width();
      var imagem = $('#img_bussiness');
      imagem.css('height', alturaDiv + 'px');
  
      var carrousel_holder = $('#car_holder');
      carrousel_holder.css('height', alturaDiv + 'px');
  
      // Garantindo que a imagem esteja carregada para calcular corretamente
      imagem.on('load', function() {
        var rect = imagem[0].getBoundingClientRect();
        var text_content = $("#text_bussiness_right")[0];
        var rect_text = text_content.getBoundingClientRect();
        console.log('Posição esquerda da imagem em relação à tela: ' + rect.left);
  
        var porcentagemTelaSemImagem = (rect.left * 100) / larguraTela;
        var porcentagemTelaComTexto = (rect_text.right * 100) / larguraTela;
        var porcentagemReal = porcentagemTelaSemImagem > porcentagemTelaComTexto ? porcentagemTelaSemImagem : porcentagemTelaComTexto;
        console.log('Porcentagem de tela sem a imagem: ' + porcentagemReal.toFixed(0) + '%');
  
        $('.flex_sec_7_holder').css({
          'background-image': 'linear-gradient(to right, var(--default_extreme_dark_green_color) 0%, var(--default_extreme_dark_green_color) ' + porcentagemReal.toFixed(0) + '%, transparent 100%)'
        });
      }).each(function() {
        if(this.complete) $(this).trigger('load');
      });
    }
  
    ajustarImagemEObterPorcentagem();
    $(window).on('resize', ajustarImagemEObterPorcentagem);

    let count = 0; // Inicializa a contagem

const intervalId = setInterval(() => {
    // Sua função aqui
    ajustarImagemEObterPorcentagem();
    $(window).on('resize', ajustarImagemEObterPorcentagem);

    count += 1; // Incrementa a contagem a cada execução

    if (count === 3) {
        clearInterval(intervalId); // Para o intervalo após 3 execuções
    }
}, 50); // Intervalo de 3 segundos (3000 milissegundos)

  
  });
  
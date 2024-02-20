$(document).ready(function() {

  // Função para trocar a imagem no carrossel principal automaticamente a cada 2 segundos
  function autoChangeImages() {
      var images = $('.carrousel_slider_holder_sec_7 img'); // Coleção de imagens no carrossel de navegação
      
      var currentIndex = 0; // Inicializa o índice da imagem atual

      setInterval(function() {
          currentIndex = (currentIndex + 1) % images.length; // Atualiza o índice para o próximo
          var imgSrc = $(images[currentIndex]).attr('src'); // Obtém o caminho da próxima imagem
          $('.sec_7_image_showing img').attr('src', imgSrc); // Atualiza a imagem no carrossel principal
      }, 2000); // Define o intervalo para 2 segundos
  }

  function autoChangeImages_mobile() {
    var images = $('.carrousel_slider_holder_sec_7 img'); // Coleção de imagens no carrossel de navegação
    
    var currentIndex = 0; // Inicializa o índice da imagem atual

    setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length; // Atualiza o índice para o próximo
        var imgSrc = $(images[currentIndex]).attr('src'); // Obtém o caminho da próxima imagem
        $('.sec_7_image_showing_mobile img').attr('src', imgSrc); // Atualiza a imagem no carrossel principal
    }, 2000); // Define o intervalo para 2 segundos
}

  // Inicia a troca automática de imagens
  autoChangeImages();
  autoChangeImages_mobile();

    function ajustarImagemEObterPorcentagem() {
    // Pegar a altura da div
    var alturaDiv = document.getElementById('bussiness_content').offsetHeight;
    console.log('alturaDiv: ' + alturaDiv);

    
    // Pegar a largura da tela
    var larguraTela = window.innerWidth;
    
    // Atribuir a altura da div à imagem
    var imagem = document.getElementById('img_bussiness');
    imagem.style.height = alturaDiv + 'px';
    var carrousel_holder = document.getElementById('car_holder');
    carrousel_holder.style.height = alturaDiv + 'px';
    var rect = imagem.getBoundingClientRect();
    var text_content = document.getElementById("text_bussiness_right");
    var rect_text = text_content.getBoundingClientRect()
    console.log('Posição esquerda da imagem em relação à tela: ' + rect.left);
    
    // Forçar o navegador a aplicar os estilos e calcular as dimensões corretamente
    imagem.onload = function() {
        
        // Calcular a porcentagem da tela não ocupada pela imagem
        var porcentagemTelaSemImagem = (rect.left * 100) / larguraTela;
        var porcentagemTelaComTexto = (rect_text.right * 100) / larguraTela;
        var porcentagemReal = porcentagemTelaSemImagem;
        if (porcentagemTelaComTexto > porcentagemTelaSemImagem) {
            porcentagemReal = porcentagemTelaComTexto
        }
        
        console.log('Porcentagem de tela sem a imagem: ' + porcentagemReal.toFixed(0) + '%');

        $('.flex_sec_7_holder').css({
            'background-image': 'linear-gradient(to right, var(--default_extreme_dark_green_color) 0%, var(--default_extreme_dark_green_color) ' + porcentagemReal.toFixed(0) + '%, transparent 100%)'
          });

        }

        if (imagem.complete) {
            imagem.onload();
        }
    }


    ajustarImagemEObterPorcentagem();
    window.addEventListener('resize', ajustarImagemEObterPorcentagem);



});

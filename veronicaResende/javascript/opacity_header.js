$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    var opacity = Math.min(scrollTop / height, 1); // Calcula a opacidade baseada na rolagem
  
    $('.align_center_margin').css('background', 'linear-gradient(to bottom, rgba(8, 28, 21, ' + (opacity) + '), rgba(8, 28, 21, ' + opacity + '))');
});

$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    var opacity = Math.min(scrollTop / height, 1); // Calcula a opacidade baseada na rolagem
  
    $('.hamb_header').css('background', 'linear-gradient(to bottom, rgba(8, 28, 21, ' + (opacity) + '), rgba(8, 28, 21, ' + opacity + '))');
});
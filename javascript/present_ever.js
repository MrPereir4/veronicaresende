window.onload = function() {
    // Esconde todas as seções por padrão
    hideAllSections();

    // Obtém os parâmetros da URL
    const urlParams = new URLSearchParams(window.location.search);
    const section = urlParams.get('section'); // 'section' é o nome do parâmetro na URL

    // Se o parâmetro corresponder a uma seção existente, mostra essa seção e marca o botão correspondente como selecionado
    if (section && document.getElementById(section)) {
        document.getElementById(section).style.display = 'block';
        markSectionAsSelected(section + 'Class');
    }
};

function hideAllSections() {
    document.getElementById('sectionCivil').style.display = 'none';
    document.getElementById('sectionTributary').style.display = 'none';
    document.getElementById('sectionLabor').style.display = 'none';
    AOS.init();
    AOS.refresh();
}

function showSection(id) {
    hideAllSections();
    document.getElementById(id).style.display = 'block';
    markSectionAsSelected(id + 'Class'); // Adiciona 'Button' ao ID para marcar o botão como selecionado


    AOS.init();
    AOS.refresh();
}

const elements = document.querySelectorAll('.icon_and_text_serv_holder');


elements.forEach(element => {
    element.addEventListener('click', handleClick);
});

function handleClick(event) {
    var section = document.querySelector('.scroll_here');
    var offset = 120; // Espaçamento do topo, ajuste conforme necessário
    var sectionTop = section.offsetTop - offset;

    // Faça o scroll suavemente até a seção
    window.scrollTo({ top: sectionTop, behavior: "smooth" });
    
}


function markSectionAsSelected(selectedButtonClass) {
    // Remove a classe 'selected' de todos os itens
    document.querySelectorAll('.icon_and_text_serv_holder').forEach(function(item) {
        item.classList.remove('selected');
    });
    // Adiciona a classe 'selected' ao(s) item(ns) clicado(s)
    var buttons = document.querySelectorAll("." + selectedButtonClass); // Isso retorna uma NodeList
    buttons.forEach(function(button) {
        button.classList.add('selected'); // Adiciona a classe 'selected' a cada botão
    });
}



window.addEventListener('scroll', function() {
    var welcHolder = document.querySelector('.welc_bottom_holder');
    var headerHeight = 130; // Altura da sua barra fixa no topo
    var welcHolderOffset = welcHolder.offsetTop - headerHeight; // Calcula a posição inicial da sua div menos a altura do header fixo

    if (window.pageYOffset > welcHolderOffset) {
        welcHolder.classList.add('fixed-top');
    } else {
        welcHolder.classList.remove('fixed-top');
    }

    var welcome_holder = document.querySelector(".welc_bottom_holder");
    var mainbg = document.querySelector(".welcome_main_background");
    if (welcome_holder && mainbg) { // Certifique-se de que ambos os elementos existem
        var rect_welcome_holder = welcome_holder.getBoundingClientRect();
        var rect_mainbg = mainbg.getBoundingClientRect();

        if (rect_welcome_holder.bottom < rect_mainbg.bottom) { 
            welcHolder.classList.remove('fixed-top');
        }
}
});

window.addEventListener('scroll', function() {
    var welcHolderMobile = this.document.querySelector(".mobile_welc_holder");

    var headerHeight = 100; // Altura da sua barra fixa no topo
    var welcHolderOffset = welcHolderMobile.offsetTop - headerHeight;

    var menu = this.document.querySelector(".flex_opt_holder_menu"); 

    var rect_welc_holder = welcHolderMobile.getBoundingClientRect();

    var backgroundHolder = this.document.querySelector(".welcome_main_background");
    var rect_backgroundHolder = backgroundHolder.getBoundingClientRect();



    if(rect_welc_holder.bottom <= 0){
        menu.style.top = "100px";
    }

    if(rect_welc_holder.bottom > 0) {
        menu.style.top = "-100px";
    }


});
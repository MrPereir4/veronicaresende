function adicionarEventos(elementoId, texto, imagemSrc) {
    var elemento = document.getElementById(elementoId);
    elemento.addEventListener("mouseover", function() {
        atualizarConteudo(texto, imagemSrc);
    });
    elemento.addEventListener("click", function() {
        atualizarConteudo(texto, imagemSrc);
    });
}

adicionarEventos("missao", "Oferecer serviços jurídicos de alto padrão, com estratégias personalizadas para garantir o êxito e a satisfação dos nossos clientes.", "./images/missao.png");
adicionarEventos("visao", "Aspiramos a liderança em nossos ramos de atuação, buscando a inovação e reconhecimento pelo comprometimento e modernidade.", "./images/visao.png");
adicionarEventos("valores", "Comprometidos com a ética, seriedade e lealdade, priorizamos a boa-fé em todas as nossas ações.", "./images/valores.png");

document.addEventListener("DOMContentLoaded", function() {
    atualizarConteudo("Oferecer serviços jurídicos de alto padrão, com estratégias personalizadas para garantir o êxito e a satisfação dos nossos clientes.", "./images/missao.png");
});

function atualizarConteudo(texto, imagemSrc) {
    var elementoTexto = document.getElementById("textoDinamico");
    var elementoImagem = document.getElementById("imagemDinamica");
    var elementoImagemMovel = document.querySelector(".img_sect_6");

    elementoTexto.classList.remove("mostrar");
    elementoImagem.classList.remove("mostrar");

    setTimeout(function() {
        elementoTexto.textContent = texto;
        elementoImagem.src = imagemSrc;
        elementoImagemMovel.src = imagemSrc;

        elementoTexto.classList.add("mostrar");
        elementoImagem.classList.add("mostrar");
    }, 500);
}

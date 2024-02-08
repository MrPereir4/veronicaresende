document.addEventListener("DOMContentLoaded", function () {
    const OFFSET = 100; // Ajuste este valor conforme necessário para o deslocamento

    function scrollToSection(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const elementPosition = window.pageYOffset + targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition - OFFSET;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    document.querySelectorAll('.btns_a').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            link.addEventListener('click', scrollToSection);
        }
    });

    const hash = window.location.hash;
    if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
            setTimeout(() => {
                const elementPosition = window.pageYOffset + targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition - OFFSET;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }, 0);
        }
    }
});

// -- header --
window.addEventListener("scroll", function () {
    let menu = document.querySelector(".menu");
    if (window.scrollY > 50) { 
        menu.classList.add("menu-scroll");
    } else {
        menu.classList.remove("menu-scroll");
    }
});
// -- header --

// -- alternar imagem --
window.onload = function () {
    console.log("JavaScript carregado corretamente!");

    let img1 = document.querySelector(".um");
    let img2 = document.querySelector(".dois");
    if (!img1 || !img2) {
        console.error("Erro: As imagens não foram encontradas no DOM!");
        return;
    }

    const imagens1 = [
        "https://balaioarquitetura.com.br/wp-content/uploads/2024/08/Leila-Viegas_Balaio_Harmonia-low-2048l-600x900.jpg",
        "https://balaioarquitetura.com.br/wp-content/uploads/2024/08/Leila-Viegas_Balaio_Harmonia-low-2074-600x900.jpg"
    ];
    const imagens2 = [
        "https://balaioarquitetura.com.br/wp-content/uploads/2025/03/08A1031-copyright-manuel-sa-600x900.jpg",
        "https://balaioarquitetura.com.br/wp-content/uploads/2025/03/08A1133-copyright-manuel-sa-600x900.jpg"
    ];
    let index = 0;
    function trocarImagens() {
        index = (index + 1) % imagens1.length; 
        console.log(`Trocando imagens para índice: ${index}`);

        img1.src = imagens1[index];
        img2.src = imagens2[index];
    }

    setInterval(trocarImagens, 10000);
};
// -- alternar imagem --

// -- carrosel --
document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slides = document.querySelector('.carousel-container');
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    let currentIndex = 0;

    function updateSlide() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlide();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlide();
    });
});
// -- carrosel --
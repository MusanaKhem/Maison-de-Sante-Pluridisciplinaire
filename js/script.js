let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    let currentIndex = 0;

    function showSlide(index) {
        const slideWidth = carousel.clientWidth;
        const newTransformValue = -index * slideWidth + 'px';
        carousel.style.transform = 'translateX(' + newTransformValue + ')';
        currentIndex = index;
    }

    function nextSlide() {
        if (currentIndex < carousel.children.length - 1) {
            showSlide(currentIndex + 1);
        } else {
            showSlide(0);
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            showSlide(currentIndex - 1);
        } else {
            showSlide(carousel.children.length - 1);
        }
    }

    // Défilement automatique toutes les 3 secondes (ajustez selon vos besoins)
    setInterval(nextSlide, 3000);

    // On peut également ajouter des boutons HTML pour contrôler le carrousel
    // par exemple, <button onclick="prevSlide()">Précédent</button>
    // et <button onclick="nextSlide()">Suivant</button>
});

// Turning the menu hamburguer into a x ===

const menuHamburguer = document.querySelector(".menu-hamburguer");
menuHamburguer.addEventListener("click", () => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector(".nav-responsive");
    menuHamburguer.classList.toggle("change");

    if (menuHamburguer.classList.contains("change")) {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}

function ajustarPortfolio() {
    let textos = document.querySelectorAll(".portfolio-layer p");
    let larguraTela = window.innerWidth;

    textos.forEach(texto => {
        if (larguraTela <= 780) {
            texto.style.display = "none";
        } else {
            texto.style.display = "block"; 
        }
    });
}

ajustarPortfolio();

window.addEventListener("resize", ajustarPortfolio);


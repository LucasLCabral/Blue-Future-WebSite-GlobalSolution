document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const menuLista = document.querySelector('.menu-lista');
    const closeMenuButton = document.getElementById('close-menu');
    const overlay = document.getElementById('overlay');

    // Alternar menu e overlay
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        menuLista.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    // Fechar menu ao clicar em uma opção
    document.querySelectorAll('.menu-lista a[data-close="true"]').forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            menuLista.classList.remove('active');
            overlay.classList.remove('active');
        });
    });

    // Botão para fechar o menu
    if (closeMenuButton) {
        closeMenuButton.addEventListener('click', function() {
            hamburger.classList.remove('active');
            menuLista.classList.remove('active');
            overlay.classList.remove('active');
        });
    }

    // Fechar menu ao clicar no overlay
    overlay.addEventListener('click', function() {
        hamburger.classList.remove('active');
        menuLista.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Fechar menu ao clicar fora dele
    document.addEventListener('click', function(event) {
        if (!menuLista.contains(event.target) && !hamburger.contains(event.target) && !overlay.contains(event.target)) {
            hamburger.classList.remove('active');
            menuLista.classList.remove('active');
            overlay.classList.remove('active');
        }
    });
});

// LOGIN

const form = document.querySelector("#form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    //Verificar se o email está preenchido 
    if(emailInput.value === ""){
        alert("Email vazio. Por favor preencha o seu email.");
        return;
    }

    //Verificar se a senha está preenchida
    if(passwordInput.value === ""){
        alert("Senha vazia. Por favor coloque sua senha.");
        return;
    }

    // Selecionar a seção "donate"
    const donateSection = document.querySelector(".donate");

    // Rolagem suave até a seção "donate"
    donateSection.scrollIntoView({ behavior: 'smooth' });
});

/* Comando dos slide show */

let slideIndex = 0;
showSlides();

function showSlides() {
let slides = document.getElementsByClassName("slide");
for (let i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}
slides[slideIndex-1].style.display = "block";
setTimeout(showSlides, 2000); // Altere o valor para ajustar a velocidade do slideshow (em milissegundos)
}
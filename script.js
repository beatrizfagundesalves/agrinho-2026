const botao = document.getElementById("saibaMaisBtn");
const textoExtra = document.getElementById("textoExtra");

botao.addEventListener("click", () => {
    if (textoExtra.style.display === "block") {
        textoExtra.style.display = "none";
        botao.textContent = "Saiba Mais";
    } else {
        textoExtra.style.display = "block";
        botao.textContent = "Mostrar Menos";
    }
});
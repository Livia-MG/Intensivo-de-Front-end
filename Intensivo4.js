let botao = document.getElementById("botao");
let textoContador = document.getElementById("contador");
let aviso = document.getElementById("aviso");
let imagem = document.getElementById("imagem");

let contador = 0;


aviso.style.display = "none";


botao.addEventListener("mouseover", function() {
    botao.style.backgroundColor = "red";
});

botao.addEventListener("mouseout", function() {
    botao.style.backgroundColor = "";
});


botao.addEventListener("click", function() {
    contador++;

    textoContador.textContent = contador;

    
    aviso.style.display = "block";
});


document.addEventListener("click", function(evento) {
    if (evento.target !== botao) {
        aviso.style.display = "none";
    }
});


imagem.addEventListener("click", function() {
    if (imagem.style.transform === "scale(1.3)") {
        imagem.style.transform = "scale(1)";
    } else {
        imagem.style.transform = "scale(1.3)";
    }
});
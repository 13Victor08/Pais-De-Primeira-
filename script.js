document.addEventListener("DOMContentLoaded", function () {

    console.log("Pais de Primeira 2.0 carregado!");

    const botao = document.querySelector(".botao");

    if(botao){
        botao.addEventListener("click", function(){
            alert("Bem-vindo ao Pais de Primeira! Vamos começar sua jornada. 👶");
        });
    }

});

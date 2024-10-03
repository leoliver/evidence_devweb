const url = "https://go-wash-api.onrender.com/api/auth/address";

window.onload = function(){ 
    let modal = document.getElementById("modal");

    let botaoModal = document.getElementById("botao-modal");

    let botaoClose = document.getElementById("botao-close");

    botaoModal.onclick = function() {
        modal.style.display = "block";
    }

    botaoClose.onclick = function() {
        modal.style.display = "none"
    }
};

async function cadastraEndereco() {
    let titulo = document.getElementById("title").value;
    let cep = document.getElementById("cep").value;
    let endereco = document.getElementById("address").value;
    let numero = document.getElementById("number").value;
    let complemento = document.getElementById("complement").value;

}
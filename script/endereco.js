const url = "https://go-wash-api.onrender.com/api/auth/address";

let apiRetorno = JSON.parse(localStorage.getItem('user'));

let token = "Bearer " + apiRetorno.access_token;

async function cadastrarEndereco() {
    let titulo = document.getElementById("title").value;
    let cep = document.getElementById("cep").value;
    let endereco = document.getElementById("address").value;
    let numero = document.getElementById("number").value;
    let complemento = document.getElementById("complement").value;

    if(!titulo || !cep || !endereco || !numero){
        alert("Preencha os dados corretamente");
        return;
    }

    let form = {
        "title":titulo,
        "cep": cep,
        "address": endereco,
        "number": numero,
        "complement": complemento
    }

    let api = await fetch(url,{
        method:"POST",
        body:JSON.stringify(form),
        headers:{
            'Content-Type':'application/json',
            'Authorization': token
        }
    });

    if(api.ok) {
        alert(`O Seu endereço ${titulo} foi adicionado com sucesso`)
        window.location.assign("home.html");
    } 
}
let apiRetorno = JSON.parse(localStorage.getItem('user'))
let token = "Bearer " + apiRetorno.access_token;

let url_pagina = window.location.search
let params = new URLSearchParams(url_pagina);
let id_url = params.get('id')

let url_id = 'https://go-wash-api.onrender.com/api/auth/address/'+id_url

async function listarEnderecoId(){
    let api = await fetch(url_id,{
        method:"GET",
        headers:{
            'Authorization': token
        }
    });
    
    if(api.ok) {
        let resposta = await api.json();
        console.log(resposta.data);

        document.getElementById("id").value = resposta.data.id
        document.getElementById("title").value = resposta.data.title;
        document.getElementById("cep").value = resposta.data.cep;
        document.getElementById("address").value = resposta.data.address;
        document.getElementById("number").value = resposta.data.number;
        document.getElementById("complement").value = resposta.data.complement;

        
    }
}

async function atualizarEndereco(){

    let titulo = document.getElementById("title").value
    let cep = document.getElementById("cep").value
    let endereco = document.getElementById("address").value
    let numero = document.getElementById("number").value
    let complemento = document.getElementById("complement").value

    let novo_form = {
    "title":titulo,
    "cep": cep,
    "address": endereco,
    "number": numero,
    "complement": complemento
    }

    let api_atualizar = await fetch(url_id,{
        method:"POST",
        body:JSON.stringify(novo_form),
        headers:{
            'Content-Type':'application/json',
            'Authorization': token
        }
    });

    if(api_atualizar.ok) {
        let resposta_atualizar = await api_atualizar.json();
        console.log(resposta_atualizar);
        alert(`O Seu endereço ${titulo} foi atualizado com sucesso`)
        window.location.assign("home.html");
    }
}

listarEnderecoId()




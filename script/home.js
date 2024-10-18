let url_lista = 'https://go-wash-api.onrender.com/api/auth/address'

let apiRetorno = JSON.parse(localStorage.getItem('user'))

let token = "Bearer " + apiRetorno.access_token;


async function listarEnderecos() {
    let api = await fetch(url_lista,{
        method:"GET",
        headers:{
            'Authorization': token
        }
    });

    if(api.ok) {
        let resposta = await api.json();
        console.log(resposta);
    }

    lista_enderecos = document.getElementById("lista_enderecos")

    let teste = [
        {title: "Casa", cep: "05640001", address: "Rua xyz", numero: 123},
        {title: "Casa", cep: "05640001", address: "Rua xyz", numero: 123}
    ]
    teste.forEach(endereco => {
        let item = document.createElement("tr") 
        lista_enderecos.appendChild(item)
    });
}


listarEnderecos()
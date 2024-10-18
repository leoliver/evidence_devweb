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
        console.log(resposta.data);

        lista_enderecos = document.getElementById("enderecos_listados")

        let teste = [
            {title: "Casa", cep: "05640001", address: "Rua xyz", number: 123},
            {title: "Casa", cep: "05640001", address: "Rua xyz", number: 123}
        ]

        // teste.forEach(endereco => {
        //     let linha = document.createElement("tr") 
        //     linha.innerHTML = `
        //         <td>${endereco.title}</td>
        //         <td>${endereco.cep}</td>
        //         <td>${endereco.address}</td>
        //         <td>${endereco.number}</td>
        //     `
        //     lista_enderecos.appendChild(linha)
        // });
        

        resposta.data.forEach(endereco => {
            // console.log(endereco)
            let linha = document.createElement("tr") 
            linha.innerHTML = `
                <td>${endereco.title}</td>
                <td>${endereco.cep}</td>
                <td>${endereco.address}</td>
                <td>${endereco.number}</td>
            `
            lista_enderecos.appendChild(linha)
        });
    }

    
}


listarEnderecos()
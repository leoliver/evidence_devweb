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

        resposta.data.forEach(endereco => {
            let linha = document.createElement("tr") 
            linha.innerHTML = `
                <tr>
                    <td>${endereco.id}</td>
                    <td>${endereco.title}</td>
                    <td>${endereco.cep}</td>
                    <td>${endereco.address}</td>
                    <td>${endereco.number}</td>
                    <td>${!endereco.complement ? "N/A" : endereco.complement}</td>
                    <td><button type="button" class="enderecobutao" onclick="EditarEndereco()">Editar</button></td>
                    <td><button type="button" class="enderecobutao" onclick="DeletarEndereco()">Deletar</button></td>
                </tr>
            `
            lista_enderecos.appendChild(linha)
        });
    }

    
}


listarEnderecos()
let url_lista = 'https://go-wash-api.onrender.com/api/auth/address/'

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

        let lista_enderecos = document.getElementById("enderecos_listados")

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
                    <td><button type="button" class="enderecobutao" onclick="Atualizar(${endereco.id})">Atualizar</button></td>
                    <td><button type="button" class="enderecobutao" onclick="Deletar(${endereco.id})">Deletar</button></td>
                </tr>
            `
            lista_enderecos.appendChild(linha)
        });
    }  
}

function Atualizar(id) {
    window.location.assign("editar_endereco.html?id="+id);
}

async function Deletar(id) {
    let url_delete = url_lista+id

    let api_delete = await fetch(url_delete,{
        method:"DELETE",
        headers:{
            'Authorization': token
        }
    });

    if(api_delete.ok) {
        let resposta = await api_delete.json();
        console.log(resposta);

        alert("Endereço excluído com sucesso")
        window.location.reload()
    }
}


listarEnderecos()
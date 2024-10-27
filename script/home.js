let url_lista = 'https://go-wash-api.onrender.com/api/auth/address/'

let apiRetorno = JSON.parse(localStorage.getItem('user'))

let token = "Bearer " + apiRetorno.access_token;

//Adiciona o nome do usuário que está logado 
let titulo_texto = document.getElementById('nome')

titulo_texto.innerHTML += `${apiRetorno.user.name}`

async function listarEnderecos() {
    let api = await fetch(url_lista,{
        method:"GET",
        headers:{
            'Authorization': token
        }
    });

    if(api.ok) {
        let resposta = await api.json();

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

        alert("Endereço excluído com sucesso")
        window.location.reload()
    }
}

const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');

function Logout() {
    localStorage.removeItem('user')
    window.location.assign("../index.html")
}

overlay.onclick = fechaPopup;

function abrePopup() {
    popup.style.display = 'block';
    overlay.style.display = 'block';
}

function fechaPopup() {
    popup.style.display = 'none';
    overlay.style.display = 'none';
}


listarEnderecos()
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
        return;
    } 
}

listarEnderecos()
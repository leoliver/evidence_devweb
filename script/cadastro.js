
const url = "https://go-wash-api.onrender.com/api/user"; 
async function cadastro(){
    let nome = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('password').value;
    let cpf_cnpj = document.getElementById('cpf_cnpj').value;
    let nascimento = document.getElementById('birthday').value;
    let termo = document.getElementById('terms').checked;
    form = {};

    // if (!termo || !nome || !email || !senha || !cpf_cnpj || !nascimento){
    //     alert("Preencha os campos corretamente");
    //     return;
    if(!nome){
        alert("NOME é obrigatório");
        return;
    }
    if(!email){
        alert("EMAIL é obrigatório");
        return;
    }
    if(!senha){
        alert("SENHA é obrigatório");
        return;
    }
    if(!cpf_cnpj){
        alert("CPF/CNPJ é obrigatório");
        return;
    }
    if(!termo){
        alert("Aceitar o TERMO é obrigatório");
        return;
    }
    if(!nascimento){
        alert("DATA DE ANIVERSÁRIO é obrigatório");
        return;
    
    } else {
        termo = 1;
        form = {
            "name": nome,
            "email": email,
            "user_type_id": 1,
            "password": senha,
            "cpf_cnpj": cpf_cnpj,
            "terms": termo,
            "birthday": nascimento
        };
    }

    let api = await fetch(url,{
        method:"POST",
        body:JSON.stringify(form),
        headers:{
            'Content-Type':'application/json'
        }
    });

    if(api.ok){
        let resposta = await api.json();
        console.log(resposta);
        alert(resposta.data)
        return;
    }
    let respostaErro = await api.json();
        console.log(respostaErro)
        // for(let i = 0; i < respostaErro.data.errors.length; i++)
        //     console.log(respostaErro.data.errors[i]);

        for (let tipo in respostaErro.data.errors) {
            respostaErro.data.errors[tipo].forEach(erro => {
                alert(erro)
            });
        }
}

const url = "https://go-wash-api.onrender.com/api/user"; 
async function cadastro(){
    let nome = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('password').value;
    let cpf_cnpj = document.getElementById('cpf_cnpj').value;
    let nascimento = document.getElementById('birthday').value;
    let termo = document.getElementById('terms').checked;
    let form = {};

    //Conjunto de verificações para validar se os campos foram preenchidos

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


    //Verifica se a respota da requisição foi bem sucedida ou não
    //Em caso de sucesso retorna a mensagem de que foi enviado um email ao email informado no formulário
    if(api.ok){
        let resposta = await api.json();
        console.log(resposta);
        alert(resposta.data)
        return;
    } else {
        if(api.status===500){
            alert("Ocorreu um erro, tente novamente!");
            return;
        }
    }
    
    //Em caso de erro a iteração verifica todos os erros e exibe um alerta para cade erro encontrado na requisição
    let respostaErro = await api.json();
        if (respostaErro.data.errors=="cpf_cnpj invalid"){
            alert("cpf_cnpj invalid")
        }
        console.log(respostaErro)
        for (let tipo in respostaErro.data.errors) {
            respostaErro.data.errors[tipo].forEach(erro => {
                alert(erro)
            });
        }
}
const url = "https://go-wash-api.onrender.com/api/login"; 
async function login() {
    let email = document.getElementById('email').value;
    let senha = document.getElementById('password').value;

    if(!email || !senha){
        alert("Preencha os dados corretamente");
        return;
    }

    let form = {
        "email": email,
        "password": senha,
        "user_type_id":1
    }

    let api = await fetch(url,{
        method:"POST",
        body:JSON.stringify(form),
        headers:{
            'Content-Type':'application/json'
        }
    });

    if(api.ok) {
        let resposta = await api.json();
        if(!localStorage.getItem('user')){
            localStorage.setItem('user', JSON.stringify(resposta))
        }
        window.location.assign("home.html");
    } 
    
    let respostaErro = await api.json();
        alert(respostaErro.data.errors)
}
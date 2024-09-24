const url = "https://go-wash-api.onrender.com/api/login"; 
async function login() {
    let email = document.getElementById('email').value;
    let senha = document.getElementById('password').value;

    form = {
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
        window.location.href = "home.html"
        console.log(resposta);
        return;
    } 
    
    let respostaErro = await api.json();
        console.log(respostaErro)
        alert(respostaErro.data.errors)
}
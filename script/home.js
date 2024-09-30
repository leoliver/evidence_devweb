let apiRetorno = JSON.parse(localStorage.getItem('user'))

let token = apiRetorno.access_token

console.log(token)
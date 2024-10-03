const apiRetorno = JSON.parse(localStorage.getItem('user'))

const token = apiRetorno.access_token

console.log(token)
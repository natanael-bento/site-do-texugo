let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")

let nomeOk = false
let emailOk= false
let assuntoOk = false

nome.style.width = "100%"
email.style.width = "100%"

function validaNome(){
 let txtNome = document.querySelector('#txtNome')
if (nome.value.length < 2) {
   txtNome.innerHTML = "Nome Invalido!" 
   txtNome.style.color = "aquamarine"
} else {
    txtNome.style.display = 'none'
    txtNome.style.color ="yellow"
    nomeOk = true
}
}
function validaEmail() {
let txtEmail = document.querySelector('#txtEmail')

if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
    txtEmail.innerHTML = 'E-mail invalido!'
    txtEmail.style.color = "aquamarine"
} else {
    txtEmail.style.display = 'none'
    txtEmail.style.color = 'yellow'
    emailOk = true
}
}
function validaAssunto (){
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length > 200 || assunto.value.length <= 5) {
        txtAssunto.innerHTML = 'O texto tem que ter entre 5(cinco) a 200(duzentos) caracteres'
        txtAssunto.style.color = "aquamarine"
        txtAssunto.style.display = 'block'
  } else {
    txtAssunto.style.display = 'none'
    assuntoOk = true
 
    }
}
function enviar () {
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert ('Formulario enviado com sucesso!')
    } else {
        alert ('Falha no envio! Formulario preenchido incorretamente!')
    }
}

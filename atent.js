var formLogin = document.querySelector('.esconde-login')
var formCadastro = document.querySelector('.esconde-cadastro')
var fundoLogin = document.querySelector('.fundo-login')
var fundoCadastro = document.querySelector('.fundo-cadastro')
const senha = document.getElementById('senha')
const senhaCad = document.getElementById('senhaCad')
const senhaCadConf = document.getElementById('Confsenha')
const btnVerSenha = document.getElementById('verSenha')
const btnVerSenhaCad = document.getElementById('verSenhaCad')

//Função para deixar a section de Login em destaque
document.querySelector('#login').addEventListener('click', () => {
    formLogin.style.opacity = "1";
    fundoLogin.style.zIndex = "1";
    fundoLogin.style.width = "65%";
    fundoLogin.style.backgroundColor = "var(--cinza)"
    formCadastro.style.opacity = "0";
    fundoCadastro.style.zIndex = "0";
    fundoCadastro.style.width = "50%";
    fundoCadastro.style.backgroundColor = "var(--cinzaSombra)"
})

//Função para deixar a section de Cadastro em destaque
document.querySelector('#cadastro').addEventListener('click', () => {
    formLogin.style.opacity = "0";
    fundoLogin.style.zIndex = "0";
    fundoLogin.style.width = "50%";
    fundoLogin.style.backgroundColor = "var(--cinzaSombra)"
    formCadastro.style.opacity = "1";
    fundoCadastro.style.zIndex = "1";
    fundoCadastro.style.width = "65%";
    fundoCadastro.style.backgroundColor = "var(--cinza)"
})

//Condição para chamar o botão de ver senha
function verSenha(){
    let tipoSenha = senha.type == "password"
    let tipoSenhaCad = senhaCad.type == "password"
    let tipoConfSenha = senhaCadConf.type == "password"

    if(tipoSenha){
        mostrarSenha();
    }else{
        esconderSenha();
    }
    if(tipoSenhaCad){
        mostrarSenha();
    }else{
        esconderSenha();
    }
    if(tipoConfSenha){
        mostrarSenha();
    }else{
        esconderSenha();
    }
}

//Função para mostrar senha
function mostrarSenha(){
    senha.setAttribute("type", "text")
    senhaCad.setAttribute("type", "text")
    senhaCadConf.setAttribute("type", "text")
    btnVerSenha.setAttribute("class", "fa-solid fa-eye-slash")
    btnVerSenhaCad.setAttribute("class", "fa-solid fa-eye-slash")
}

//Função para esconder senha
function esconderSenha(){
    senha.setAttribute("type", "password")
    senhaCad.setAttribute("type", "password")
    senhaCadConf.setAttribute("type", "password")
    btnVerSenha.setAttribute("class", "fa-solid fa-eye")
    btnVerSenhaCad.setAttribute("class", "fa-solid fa-eye")
}
//Botão topo
const btnTopo = document.getElementById("btn-topo");

btnTopo.addEventListener('click', function(){
    window.scrollTo(0,0)
})

document.addEventListener("scroll", ocultarTopo)

function ocultarTopo(){
    if(window.scrollY > 10){
        btnTopo.style.display = "flex"
    } else {
        btnTopo.style.display = "none"
    }
}

ocultarTopo()

//Carrossel

const fila = document.querySelector('.fundo-produtos');
const btnVoltar = document.getElementById('btn-voltar');
const btnAvancar = document.getElementById('btn-avancar');

let css_filaBefore = window.getComputedStyle(fila, '::before');
let css_filaAfter = window.getComputedStyle(fila, '::after');

btnAvancar.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;     
})
btnVoltar.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;     
})

fila.addEventListener("scroll", ocultarBtnVoltar)
fila.addEventListener("scroll", ocultarAfter)
function ocultarBtnVoltar(){
    if(fila.scrollLeft > 10){
        btnVoltar.style.display = "flex"
        fila.style.setProperty('--before', 'flex')
    } else {
        btnVoltar.style.display = "none"
        fila.style.setProperty('--before', 'none')
    }
}
ocultarBtnVoltar()

function ocultarAfter(){
    if(fila.scrollLeft < 980){
        fila.style.setProperty('--after', 'flex')       
        btnAvancar.style.display = "flex"
    } else{
        fila.style.setProperty('--after', 'none')      
        btnAvancar.style.display = "none"
    }
}
ocultarAfter()
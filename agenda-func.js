const btnAlterar = document.getElementById('btn-alterar');
const btnSalvar = document.getElementById('btn-salvar');
const select = document.getElementById('select-func');
const selectTroca = document.getElementById('select-troca-func');
const inpServico = document.getElementById('servico');
const inpValor = document.getElementById('valor');
const valoresSelect = select.getElementsByTagName("option");

//Função para liberar os inputs para edição
btnAlterar.addEventListener('click', () => {
    btnSalvar.disabled = false;
    btnSalvar.style.display = "block";
    selectTroca.disabled = false;
    inpServico.disabled = false;
    inpValor.disabled = false;
})

//Função para bloquear a digitação nos inuts
btnSalvar.addEventListener('click', () => {
    if (confirm('Tem certeza que quer alterar o agendamento?') == true){
        selectTroca.disabled = true;
        inpServico.disabled = true;
        inpValor.disabled = true;
        btnSalvar.disabled = true;
        btnSalvar.style.display = "none";
    } else {
        location.reload;
    }
})

//Função para colocar os mesmos valores nos dois selects
select.addEventListener('change', () => {
    selectTroca.value = select.value;    
})
var titulo = document.querySelector(".titulo");
titulo.textContent = "Financeiro Controle";

var receita = document.querySelector("#primeira-receita");
var saldo = receita.querySelector(".info-saldo");
var valor = receita.querySelector(".info-valor");
saldo.textContent = valor.textContent;

var receita2 = document.querySelector("#segunda-receita");
var saldo2 = receita2.querySelector(".info-saldo");
var valor2 = receita2.querySelector(".info-valor");
saldo2.textContent = parseFloat(saldo.textContent) + parseFloat(valor2.textContent);

var receita3 = document.querySelector("#terceira-receita");
var saldo3 = receita3.querySelector(".info-saldo");
var valor3 = receita3.querySelector(".info-valor");
saldo3.textContent = parseFloat(saldo2.textContent) + parseFloat(valor3.textContent);

var receita4 = document.querySelector("#quarta-receita");
var saldo4 = receita4.querySelector(".info-saldo");
var valor4 = receita4.querySelector(".info-valor");
saldo4.textContent = parseFloat(saldo3.textContent) + parseFloat(valor4.textContent);

var receita5 = document.querySelector("#quinta-receita");
var saldo5 = receita5.querySelector(".info-saldo");
var valor5 = receita5.querySelector(".info-valor");
saldo5.textContent = parseFloat(saldo4.textContent) + parseFloat(valor5.textContent);


if(saldo5.textContent < 0){
    saldo5.style.color = "red";
}

var botao = document.querySelector("#adicionar-receita");
botao.addEventListener("click",function(evento){
evento.preventDefault();
var form = document.formulario;
var descricao = form.descricao.value;
var categoria = form.categoria.value;
var data = form.data.value;
var valor = parseFloat(form.valor.value);
var erros = document.querySelector(".erros");

limparErros(erros);

if(descricao.length <= 0){
    erros.textContent += "A descrição é obrigatória.\n"
    erros.style.color = "red";
}

if(categoria.length <= 0){
    erros.textContent += "A categoria é obrigatória.\n"
}

if(data.length <= 0){
    erros.textContent += "A data é obrigatória.\n"
}

if(isNaN(valor)){
    erros.textContent += "O valor é obrigatório.\n"
}else{
    if(valor == 0){
        erros.textContent += "O valor deve ser diferente de zero(0).\n"
    }
}

});

function limparErros(erros){
    erros.innerHTML = "";
}
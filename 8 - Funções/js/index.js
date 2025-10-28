/* Fuções
uma função javascript é um bloco de codigos projetados para executar uma tarefa especifica.
É como uma pequena fabrica onde voce faz uma entrada e ele te da uma saida.
pode ser encaado como um mini programas projetados para fazer tarefas que vai contribuir para o codigo.
uma função javascript ´r executada quando algo a invoca (chama).*/

//função de soma
function soma(valor1,valor2){
    return valor1 + valor2;
}
document.getElementById("texto").innerHTML = soma(10,23);

//função de conversão de real para dollar
function realparadollar (real,cotacaodollar){
    return real * cotacaodollar;
}
var valorreal = 7.89;
var cotacao = 5.08;


var total = realparadollar(valorreal, cotacao);
alert("o valor em real é R$:" +valorreal+"o valor do dollar U$ é:" +total);

function alertahello(){
    alert("olá pessoal");
}
alertahello();

function paraCelsius(valorfahrenheit){
    return (5/9) * (valorfahrenheit-32);
}

var x = paraCelsius(77);

alert("a temperatura é de " + x + " graus celsius");

function minhaFuncao(){
    
}
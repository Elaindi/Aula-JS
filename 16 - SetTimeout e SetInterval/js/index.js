/*👉 setTimeout e setInterval são funções do JavaScript usadas para controlar o tempo de execução de um código.
Elas permitem executar algo depois de um tempo ou repetidamente em intervalos regulares.

Vamos ver cada uma:
🕒 setTimeout()

Executa uma função uma única vez após um determinado tempo (em milissegundos).

📘 Sintaxe:

setTimeout(funcao, tempoEmMilissegundos);
🔁 setInterval()

Executa uma função repetidamente a cada intervalo de tempo especificado.

📘 Sintaxe:

setInterval(funcao, tempoEmMilissegundos);


📍 Exemplo:

setInterval(() => {
  console.log("Executando a cada 2 segundos...");
}, 2000);
*/

function ativarContagem(){
    var cronometro = document.getElementById('tempo').innerHTML;
    var soma = parseInt(cronometro) + 1;
     document.getElementById('tempo').innerHTML = soma;
}
  //  document.getElementById('tempo').innerHTML = "começou a contar";
    //ativa a função apenas uma vez quando der o tempo especificado
/*  tempo =  setTimeout(function(){
        document.getElementById('tempo').innerHTML = "Executou o setTimeout";
    }, 5000);
}*/

function pararContegem(){
    clearInterval(tempo);
  //  document.getElementById('tempo').innerHTML = "parou a contagem";

    setInterval(function(){}, 1000)

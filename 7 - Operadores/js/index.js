/* vamos aprender operadores:
-> os operadores javascript são uasados para atribuir valores, comparar valores,executar operações aritiméticas e muito mais.
são os sinais que usamos: + - * / = ++ -- += -= && || != estc...

são separados por 6 categoria:
1) operadores aritiméticos (matemáticos)
2)operadores de atribuição
3) operadores de sequencia
4) operadores de comparação
5) operadores condicional (ternário)
6) operadores lógicos

*/

//atribuição matematico
var  valor1, valor2, toral;
valor1 = 5;
valor2 = 2;

total = valor1 + valor2;
alert(total);


//operador de sequencia
valor1 = "Elaine ";
valor2 = "Santana";

total = valor1 +  valor2;
alert(total);

//operador de comparação
valor1 = 8;
valor2 = 10;

total = (valor1 == valor2) // true (verdadeiro) ou false (falso)
alert(total);


//operador condicional (ternário)
var idade, eleitor;
idade=18
eleitor= (idade<18) ? "não eleior": "sim, eleitor ";
alert('a repostaé:' + eleitor + 'a idade dele é de' + idade);

//operadores lógicos
var idade, eleitor, resultado;
idade = 72;
eleitor = (idade<18) ? "não eleior": "sim, eleitor ";

resultado = (idade === 65 || idade === 72);
alert(resultado);
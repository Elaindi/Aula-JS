/* 👉 Array (ou vetor, em português) é uma estrutura de dados usada para armazenar uma coleção de valores — como uma lista de itens — em uma única variável.

📦 Exemplo simples:
let frutas = ["maçã", "banana", "uva"];


Aqui,

frutas[0] → "maçã"

frutas[1] → "banana"

frutas[2] → "uva"

Ou seja, cada valor fica guardado dentro do array, e podemos acessá-los pelo índice (posição).
⚠️ O índice começa em 0, não em 1.

💡 Em outras palavras:

Um array é como uma caixa com várias divisórias, onde cada compartimento guarda um valor.

Exemplo visual:

Índice	Valor
0	"maçã"
1	"banana"
2	"uva"
🎯 O que podemos guardar em um array:

Arrays podem conter qualquer tipo de dado, inclusive misturados:

let misto = ["texto", 42, true, null, {nome: "Elaindi"}, [1, 2, 3]];

⚙️ Algumas ações comuns:

Adicionar item → push()

Remover item → pop()

Verificar tamanho → .length

Percorrer → for ou forEach()

Exemplo:

let numeros = [10, 20, 30];
numeros.push(40); // adiciona o número 40
console.log(numeros); // [10, 20, 30, 40]
console.log(numeros.length); // 4

*/


var item1 = "arroz";
var item2 = "feijão";
var item3 = "macarrão";
var item4 = "leite";

               //0         //1        //2        //3
const lista = ["arroz", "feijão", "macarrão", "leite"];
alert(lista[0]);
let x=lista[3];
alert(x);
lista [0] = "café";
alert (lista[0]);
console.log(lista);

const pessoaArray = ["Elaine", "Santana", "Estudante", 43];
const pessoaObjeto = {nome: "Elaine", sobrenome: "Santana", idade: 30};
//pessoaArray.pop(); subtrai o ultimo
//pessoaArray.push("qualquer coisa"); adiciona no final
//pessoaArray.shift(); subtrai o primeiro
//pessoaArray.unshift("Bonoita"); adiciona no começo
//pessoaArray.splice(1,0, "item 1", "item 2"); adiciona no meio
//const lista1 = ["Arroz", "Feijão", "macarrão"];
//const lista2 = ["suco", "refrigeirante", "carne"];
//const superlista = lista1.concat(lista2);

const jogadores = [
    "BiroBiro", 
    "Ribamar", 
    "Pelé", 
    "Maradona",
    "Neymar",
    "Cristiano ronaldo",
    "Vampeta",
    "Dimitri",
];
//jogadores.sort();
//jogadores.reverse();

const jogOrdem = jogadores.sort();
const craques = jogadores.slice(2,6);

document.getElementById("teste").innerHTML = jogOrdem;


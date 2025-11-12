/* Laço de repetição for
laços oferecem um jeito fáxil e rápido de executar uma ação repetidads vezes.*/

/*for (let i = 0; i < 10001; i++) {
    document.getElementById("teste").innerHTML += i + ", ";
}*/

var ano = new Date().getFullYear();

for (let i = 2025; i >= 1900; i--) {
    document.getElementById("ano").innerHTML += "<option value='" + i + "'>" + i + "</option>";
}

/*const carros = ["Gol", "Fusca", "Brasilia", "Del rey",
    "Chevette"];
    var tamanho = carros.length;

    for (let i = 0; i <tamanho i++) {
        document.getElementById("teste").innerHTML += carros [i] + " - ";
    }*/


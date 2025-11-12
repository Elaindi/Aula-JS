function diaDaSemana() {
  let cor = document.getElementById("cor").value; // ✅ valor em minúsculo

  switch (cor) {
    case "azul":
      document.body.style.backgroundColor = "blue";
      document.getElementById("teste").innerHTML = "Você escolheu azul 💙";
      break;

    case "vermelho":
      document.body.style.backgroundColor = "red";
      document.getElementById("teste").innerHTML = "Você escolheu vermelho ❤️";
      break;

    case "amarelo":
      document.body.style.backgroundColor = "yellow";
      document.getElementById("teste").innerHTML = "Você escolheu amarelo 💛";
      break;

    default:
      document.body.style.backgroundColor = "white";
      document.getElementById("teste").innerHTML = `Nenhuma cor disponível para "${cor}" 😅`;
  }
}

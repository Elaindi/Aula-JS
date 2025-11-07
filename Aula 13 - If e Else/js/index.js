/*if e else*/
/*var interruptor = "on";
if (interruptor =="on"){
    alert ('a lampada esta ligada');

}else{
    alert ('a lampada esta desligada');
}*/

var hora = new Date().getHours();

/*if (hora<12){
    alert('Bom dia');

} else if (hora<18){
    alert('Boa tarde');  
}else{
    alert('Boa noite');
}*/

function verificar(){
    let nome = document.getElementById('nome'). ariaValue;
    if (nome =="" || nome ==null){
        let p = document.getElementById("teste");
       p.innerHTML = "Ocampo não pode ser vazio"
       p.style.color = "red";
    }else{
        let p = document.getElementById("teste");
       p.innerHTML = "parabens tudo certo"
       p.style.color = "blue";
    }
}

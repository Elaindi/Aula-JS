/* 🖱️ Eventos de Mouse
Evento	Descrição
onclick	Quando o usuário clica em um elemento
ondblclick	Quando o usuário dá um clique duplo
onmouseover	Quando o ponteiro do mouse passa sobre o elemento
onmouseout	Quando o ponteiro do mouse sai do elemento
onmousedown	Quando o botão do mouse é pressionado
onmouseup	Quando o botão do mouse é solto
onmousemove	Quando o mouse se move sobre o elemento
oncontextmenu	Quando o botão direito do mouse é clicado
⌨️ Eventos de Teclado
Evento	Descrição
onkeydown	Quando uma tecla é pressionada
onkeypress	Quando uma tecla é pressionada e solta (obsoleto em alguns navegadores)
onkeyup	Quando uma tecla é solta
📱 Eventos de Entrada e Formulário
Evento	Descrição
onchange	Quando o valor de um campo muda
oninput	Quando o usuário digita em um campo
onsubmit	Quando o formulário é enviado
onfocus	Quando um campo ganha foco
onblur	Quando o campo perde foco
onreset	Quando o formulário é resetado
🌐 Eventos da Janela e Documento
Evento	Descrição
onload	Quando a página termina de carregar
onresize	Quando o tamanho da janela muda
onscroll	Quando o usuário rola a página
onunload	Quando o usuário sai da página
onbeforeunload	Antes de sair da página (permite mostrar aviso)
📦 Eventos de Mídia (Áudio/Vídeo)
Evento	Descrição
onplay	Quando o vídeo/áudio começa a tocar
onpause	Quando o vídeo/áudio é pausado
onended	Quando o vídeo/áudio termina
onvolumechange	Quando o volume muda
ontimeupdate	Durante a reprodução, enquanto o tempo muda
🔄 Eventos de Drag & Drop
Evento	Descrição
ondrag	Quando o item é arrastado
ondragstart	Quando o arraste começa
ondragend	Quando o arraste termina
ondragover	Quando o item está sobre uma área de soltura
ondrop	Quando o item é solto na área de destino
📲 Eventos de Toque (para dispositivos móveis)
Evento	Descrição
ontouchstart	Quando o toque começa
ontouchmove	Quando o dedo se move na tela
ontouchend	Quando o toque termina
ontouchcancel	Quando o toque é interrompido
*/

function eventoclick(){
    alert('Acionou o evento de click');
    document.body.style.backgroundColor = 'lightblue';
}

function eventoDBLclick(){
    alert('Evento de clique duplo');
}

function viravermelho(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}

function viraAzul(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue";
}

function mudou(){
   console.log('mudou');
}




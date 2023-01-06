

function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
   }else{
        alert('Elemento não encontrado')

   }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(contador = 0; contador <= listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const musica = tecla.classList[1];
    const idAudio = `#som_${musica}`;

    listaDeTeclas[contador].onclick = function(){
        tocaSom(idAudio);
    }

    
tecla.onkeydown = function(event){
    if (event.code === 'Space'|| event.code === 'Enter'){
        tecla.classList.add('ativa');
    }
}


tecla.onkeyup = function(){
    tecla.classList.remove('ativa');
}

}

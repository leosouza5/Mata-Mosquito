var altura = 0
var largura = 0
var contador = 0
var vidas = 1
var tempo = 50
var mosquitoDelay = 1500

var nivel = window.location.search
nivel = nivel.replace('?','')

if(nivel === 'normal'){
	mosquitoDelay = 1500
}else if(nivel === 'dificil'){
	mosquitoDelay = 1000
}else if (nivel === 'muito_dificil'){
	mosquitoDelay = 750
}
console.log(nivel)


function sizeAdjust() {
	altura = window.innerHeight
	largura = window.innerWidth
}
sizeAdjust()



var jogo =setInterval(function() {	//roda o jogo
	insereMosca()
}, mosquitoDelay)


var cronometro = setInterval(function(){   //contador de tempo
	tempo--
	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(jogo)
		window.location.href = 'vitoria.html'
	}else {
		document.getElementById('cronometro').innerHTML = tempo
	}
	
	},1000)










//Inserindo mosquitos
function insereMosca(){
	
	//remover mosquito anterior caso exista
	if (document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()
		

		if(vidas >= 3){
			window.location.href = 'endgame.html'
			
		}else {
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
			vidas++
		}
	}


	//posicao
	posX = Math.floor(Math.random() * largura) - 90
	posY = Math.floor(Math.random() * altura) - 90

	posX = posX < 0 ? 0 : posX 
	posY = posY < 0 ? 0 : posY


	//atributos
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosca.png'
	mosquito.className = tamanhoMosca() + ' ' + ladoMosca()
	mosquito.style.left = posX + 'px'
	mosquito.style.top = posY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function(){
		console.log('mato')
		document.getElementById('mosquito').remove()

	}


	document.body.appendChild(mosquito)

}





//Tamanhos mosquitos random

function tamanhoMosca(){
	var classe = Math.floor(Math.random() * 3)

	switch(classe){
		case 0:
			return 'mosquito1 '

		case 1:
			return 'mosquito2 '

		case 2: 
			return 'mosquito3 '
	}
}

//Lado que a mosca vai ficar virada

function ladoMosca(){
	if(posX < ((largura/2)-90)){
		return 'ladoA'
	}else {
		return 'ladoB'
	}
}
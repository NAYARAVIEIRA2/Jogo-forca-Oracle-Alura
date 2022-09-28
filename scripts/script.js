let tela = document.querySelector("canvas");
let botonNuevoJuegoDesaparecido = document.getElementById("btn-novo-jogo").style.display = "none"
let btnSairDesaparecer = document.getElementById("btn-sair").style.display = "none"
let divAgregarPalavra = document.getElementById("adicionar-palavra").style.display = 'none';
let btnNovoJogo = document.getElementById("btn-novo-jogo");
let btnSair = document.getElementById("btn-sair");
let btnCancelar = document.getElementById("btn-cancelar");


var palavras = ['MANGA', 'LARANJA', 'PITAYA', 'ABACATE', 'BURITI', 'PITOMBA', 'ACEROLA', 'MARACUJA'];
var tablero = document.getElementById('forca').getContext('2d');
var palavraSecreta = "";
var letras = [];
var palavraCorreta = "";
var erros = 8;
let letrasIncorretas = [];
let numeroDeErros = 8
let letraEscolhida = [];

document.getElementById("iniciar-jogo").onclick = () => {
  iniciarJogo();
}


document.getElementById("btn-salvar").onclick = () => {
  salvarPalavra();
 
}


btnNovoJogo.addEventListener("click", function () {
  location.reload();
});


btnSair.addEventListener("click", function () {
  location.reload();
});


btnCancelar.addEventListener("click", function () {
  location.reload();
});


function escolherPalavraSecreta() {
  let palavra = palavras[Math.floor(Math.random() * palavras.length)]
  palavraSecreta = palavra
  return palavra
}




function verificarLetraClicada(key) {
  if (letras.length < 1 || letras.indexOf(key) < 0) {
    letras.push(key)
    return false
    
  }
  else {
    letras.push(key)
    return true
  }
}

function adicionarLetraCorreta(i) {
  palavraCorreta += palavraSecreta[i].toUpperCase()
}

function adicionarLetraIncorreta(letter) {
  if (palavraSecreta.indexOf(letter) <= 0) {
    erros -= 1
  }
}


function verificarFimDeJogo(letra) {
  
 if(letraEscolhida.length < palavraSecreta.length) { 
    
    letrasIncorretas.push(letra);
    

   
    if (letrasIncorretas.length > numeroDeErros) {
      exibirDerrota()
    }
    else if(letraEscolhida.length < palavraSecreta.length) {
      adicionarLetraIncorreta(letra)
      escreverLetraIncorreta(letra, erros)
    }
  }
 } 


function verificarVencedor(letra) {
  letraEscolhida.push(letra.toUpperCase());
  if (letraEscolhida.length == palavraSecreta.length) {

    exibirVitoria()
    
  }

}



function verificarLetra(keyCode) {
  if (typeof keyCode === "number" && keyCode >= 65 && keyCode <= 90) {
    return true;
  } else {
    return false;
  }
}


function mostrarTelaAdicionarPalavra() {
  document.getElementById("div-desaparece").style.display = 'none';
  document.getElementById("adicionar-palavra").style.display = "block";

}

function salvarPalavra() {
  
  let novaPalavra = document.getElementById('input-nova-palavra').value;

  
  if(novaPalavra !== ""){
    palavras.push(novaPalavra.toUpperCase());
    alert('A palavra digitada foi salva')
    
  
    
    document.getElementById("adicionar-palavra").style.display = "none";
    iniciarJogo();
  }
  else{
    alert("Nenhuma palavra foi digitada")
  }

}


function iniciarJogo() {

  
  document.getElementById("div-desaparece").style.display = 'none';

  
  desenharCanvas();

  
  escolherPalavraSecreta();

  
  desenharLinhas();

  
  document.getElementById("btn-novo-jogo").style.display = "block"
  document.getElementById("btn-sair").style.display = "block"

  
  document.onkeydown = (e) => {
    
    let letra = e.key.toUpperCase()
    
    if (letrasIncorretas.length <= numeroDeErros) {
      if (!verificarLetraClicada(e.key) && verificarLetra(e.keyCode)) {
        if (palavraSecreta.includes(letra)) {
          adicionarLetraCorreta(palavraSecreta.indexOf(letra))
          for (let i = 0; i < palavraSecreta.length; i++) {
            if (palavraSecreta[i] === letra) {
              escreverLetraCorreta(i)
              verificarVencedor(letra)

            }
          }

        }
        
        else {
          if (!verificarLetraClicada(e.key) && !verificarVencedor(letra)) return
          desenharForca(erros)
          verificarFimDeJogo(letra)
        }
      }
    }
    else {
      alert('Você atingiu o limíte de letras incorretas')
    }

  };
}
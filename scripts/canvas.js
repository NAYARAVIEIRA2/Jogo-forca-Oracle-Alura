function desenharCanvas() {
    tablero.lineWidth=8
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle= "#F3F5FC"
    tablero.strokeStyle = "#0A3871"
    tablero.fillRect(0,0,1200,800)
    tablero.beginPath();
    tablero.moveTo(650,500)
    tablero.lineTo(900,500)
    tablero.stroke()
    tablero.closePath()
  }
  
  function desenharLinhas() {
    tablero.lineWidth=6
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.strokeStyle = "#0A3871"
    tablero.beginPath()
    let largura=600/palavraSecreta.length
    for (let i=0;i<palavraSecreta.length;i++){
      tablero.moveTo(500+(largura*i),640)
      tablero.lineTo(550+(largura*i),640)
    }
    tablero.stroke()
    tablero.closePath()
  }
  function escreverLetraCorreta(index) {
    tablero.font = 'bold 52px Inter';
    tablero.lineWidth=6
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle= "#0A3871"
    let largura=600/palavraSecreta.length
    tablero.fillText(palavraSecreta[index],505+(largura*index),620)
    tablero.stroke()
  }
  
  function escreverLetraIncorreta(letra, errorsLeft) {
    tablero.lineWidth=6
    tablero.font = 'bold 40px Inter';
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle="#0A3871"
    tablero.fillText(letra,535+(40*(10-errorsLeft)),710,40)
  }
  
  function desenharForca(pontos) {
    tablero.lineWidth=8
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.strokeStyle = "#0A3871"
    if(pontos===8){
    
    tablero.moveTo(700,500)
    tablero.lineTo(700,100)
    }
    if(pontos===7){
    tablero.moveTo(850,100)
    tablero.lineTo(700,100)
    }
    if(pontos===6){
    tablero.moveTo(850,100)
    tablero.lineTo(850,171)
    }
    if(pontos===5){
    tablero.moveTo(900,230)
    tablero.arc(850,230,50,0,Math.PI*2)
    }
    if(pontos===4){
    tablero.moveTo(850,389)
    tablero.lineTo(850,289)
    }
    if(pontos===3){
    tablero.moveTo(850,389)
    tablero.lineTo(800,450)
    }
    if(pontos===2){
    tablero.moveTo(850,389)
    tablero.lineTo(890,450)
    }
    if(pontos===1){
    tablero.moveTo(850,330)
    tablero.lineTo(800,389)
    }
    if(pontos===0){
    tablero.moveTo(850,330)
    tablero.lineTo(890,389)
    }
    tablero.stroke()
    tablero.closePath()
  }
  
  function exibirDerrota() {
    tablero.font = ' bold 42px Inter';
    tablero.lineWidth=6
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle="red"
    tablero.fillText("Fim de jogo!",930,320)
  }
  
  function exibirVitoria() {
    tablero.font = 'bold 42px Inter';
    tablero.lineWidth=6
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle="pink"
    tablero.fillText("Ganhou,",950,320)
    tablero.fillText("Parabéns!",930,360)
    setTimeout( recarregar , 1000)
  }   
  
  function recarregar(){
    location.reload(); 
  }
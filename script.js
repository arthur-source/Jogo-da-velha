
let jogadorAtual = 'X'
let area = document.getElementsByClassName('area')
let status = document.getElementById('vencedor') 
let jogo =  ['']
let jogoAtivo = true;
   
 function clicar(i){

  if (!jogoAtivo) return;

    if(area[i].innerText === ''){

        area[i].innerText = jogadorAtual
            if(jogadorAtual === 'X'){
                area[i].style.backgroundColor = 'tomato'
               }
              else{
                area[i].style.backgroundColor = 'dodgerblue'                
              } 
              jogo[i] = jogadorAtual   

              if (verificarVencedor()) {

               vencedor.innerText = `Parabéns "${jogadorAtual}", você venceu !!!`;

                return;

            }
	
              jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X'  
              } 
status.innerText = `Quem joga agora é o "${jogadorAtual}"`
}

//Verificar vencedor

function verificarVencedor() {
  const combinacoes = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
  ];

  for (let combinacao of combinacoes) {
      const [a, b, c] = combinacao;
      if (jogo[a] && jogo[a] === jogo[b] && jogo[a] === jogo[c]) {
          // Vencedor encontrado!
          area[a].style.backgroundColor = 'rgb(73, 162, 73)';
          area[b].style.backgroundColor = 'rgb(73, 162, 73)';
          area[c].style.backgroundColor = 'rgb(73, 162, 73)';

          jogoAtivo = false;
          return true;
      }
  }

  return false;
}

//Botão de reiniciar o Jogo

function reiniciar(){
  for(let i = 0; i < area.length; i++){
 area[i].style.backgroundColor = ""
 area[i].innerText = ""
 vencedor.innerText ='Quem joga agora é o "X"'
 jogo[i] = ""
 }
jogadorAtual = 'X'
jogoAtivo = true;
}




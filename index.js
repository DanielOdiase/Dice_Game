const playerId=document.getElementById("player-id")
const diceBtn =document.getElementById("rollDice")
const numBtn =document.getElementById("numbers")
const numBtn2 =document.getElementById("numbers2")
const scoreBtn=document.getElementById("score-id")
const scoreBtn2=document.getElementById("score-id2")
const restartBtn =document.getElementById("restartGame")
let player1Turn =true
let randomNumber =0
hasTwenty=false


const playerMessage = "Player 1 Turn"
const playerTurn2 ="Player 2 Turn"
let player1Score = 0
let player2Score = 0
diceBtn.addEventListener('click',clickEvent)
restartBtn.addEventListener('click',restartGm)


function showDice(){
  restartBtn.style.display="block"
  diceBtn.style.display="none"
}
function randomNum(){
   randomNumber= Math.floor(Math.random()*6)+1


    
    
}
 
function restartGm(){
  player1Score=0
  player2Score=0
  numBtn.textContent=0
  numBtn2.textContent=0
  scoreBtn.textContent="Score:"
  scoreBtn2.textContent="Score:"
  playerId.textContent= "Begin Game"
  restartBtn.style.display="none"
  diceBtn.style.display="block"
  player1Turn=true
  numBtn2.classList.remove("active")
    numBtn.classList.add("active")

}

function clickEvent(){
    randomNum()
    
    if(player1Turn){
      player1Score += randomNumber
      scoreBtn.textContent= "Score:" + player1Score
      numBtn.classList.add("active")
      numBtn2.classList.remove("active")
      numBtn.textContent= randomNumber
      playerId.textContent=playerMessage
    
    }else {
        playerId.textContent=playerTurn2
    player2Score+= randomNumber
    numBtn.classList.remove("active")
    numBtn2.classList.add("active")
    numBtn2.textContent= randomNumber
      scoreBtn2.textContent= "Score :" + player2Score
    }

    if (player1Score >=20){
     playerId.textContent="Player 1 has won"
        showDice()
         }else if(player2Score>=20){
          playerId.textContent="Player 2 has won "
          showDice()
      
         }
  player1Turn =!player1Turn

   
}

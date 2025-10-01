let computer;


let score = JSON.parse(localStorage.getItem('rpsScore')) || {
  playerScore : 0,
  computerScore : 0,
  Ties : 0
}

if(!score) {
  score = {
    playerScore : 0,
    computerScore : 0,
    Ties : 0
  }
}
  let resume = document.querySelector('.js-resume');
  
let outcome = (playerMove, computer) => {
  if(playerMove === 'rock' && computer === 'rock' || playerMove === 'paper' && computer === 'paper' || playerMove === 'scissors' && computer === 'scissors'){
    document.querySelector('.js-outcome').innerHTML = `Tie.`
    score.Ties += 1;
  } else if(playerMove === 'rock' && computer === 'paper' || playerMove === 'paper' && computer === 'scissors' || playerMove === 'scissors' && computer === 'rock') {
    document.querySelector('.js-outcome').innerHTML = `You lose.`
    score.computerScore += 1;
    
  } else if(playerMove === 'paper' && computer === 'rock' || playerMove === 'scissors' && computer === 'paper' || playerMove === 'rock' && computer === 'scissors') {
    document.querySelector('.js-outcome').innerHTML = `You win!`
    score.playerScore += 1;
  }

  if(resume) {
  document.querySelector('.js-score').innerHTML = `Your Score: ${score.playerScore} Computer: ${score.computerScore} Ties: ${score.Ties}`
  } else if(!resume) {
    document.querySelector('.js-score').innerHTML = `Your Score: ${score.playerScore} Computer: ${score.computerScore} Ties: ${score.Ties}`
  }
}

function playGame(playerMove) {
  
  if(playerMove === 'rock') 
    {
      document.querySelector(".js-picked").innerHTML = `You picked ${playerMove} Computer picked ${computer}`
    computerMove();
    outcome(playerMove, computer);
  } 
  else if(playerMove === 'paper') {
    document.querySelector(".js-picked").innerHTML = `You picked ${playerMove} Computer picked ${computer}`
    computerMove();
    outcome(playerMove, computer);
  } 
  else if(playerMove === 'scissors') {
    document.querySelector(".js-picked").innerHTML = `You picked ${playerMove} Computer picked ${computer}`
    computerMove();
    outcome(playerMove, computer);
  }
  localStorage.setItem('rpsScore', JSON.stringify(score));

}


function computerMove() {
let randomNumber = Math.random();

  if(randomNumber > 0 && randomNumber <= 0.3) {
    computer = 'rock';

  } else if(randomNumber > 0.3 && randomNumber <= 0.6) {
    computer = 'paper';
    
  } else if(randomNumber > 0.6 && randomNumber <= 0.9) {
    computer = 'scissors';
    
  }
}

function restartGame() {
  score = {
    playerScore : 0,
    computerScore : 0,
    Ties : 0
  }
  localStorage.setItem('rpsScore', JSON.stringify(score));
  document.querySelector('.js-outcome').innerHTML = `The game has restarted.`

  document.querySelector('.js-score').innerHTML = `Your Score: ${score.playerScore} Computer: ${score.computerScore} Ties: ${score.Ties}`
}



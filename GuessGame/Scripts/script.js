let randomNumber = Math.floor(Math.random()*100)+1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
function CheckEntered(){
	let userGuess = Number(guessField.value);
	if (guessCount===1){
		guesses.textContent="Previous guesses: ";
	}
	guesses.textContent+= userGuess+" ";
	if (userGuess===randomNumber){
		lastResult.textContent="Congratulation Your Guess was right!!";
		lastResult.style.backgroundColor = 'green';
		lowOrHi.textContent=" ";
		setGameOver();
	}
	else if (guessCount===10){
		lastResult.textContent="GAME OVER!!";
		lastResult.style.backgroundColor = 'red';
		setGameOver();
	}
	else{
		lastResult.textContent="Wrong";
		if (userGuess<randomNumber){
			lowOrHi.textContent="Your Guess is Low!!";
			lastResult.style.backgroundColor = 'yellow';
			lowOrHi.style.backgroundColor = 'yellow';
		}
		else if (userGuess>randomNumber){
			lowOrHi.textContent="Your Guess is Higher!";
			lastResult.style.backgroundColor = 'red';
			lowOrHi.style.backgroundColor = 'red';
		}
	}
	guessCount+=1;
	guessField.value='';
	guessField.focus();
}
guessSubmit.addEventListener('click', CheckEntered);

function SetAgain(){
	randomNumber = Math.floor(Math.random()*100)+1;
	guessCount = 1;
	const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }
  resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';
}

function setGameOver(){
	guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton=document.createElement('button');
  resetButton.textContent="Start New game";
  document.body.append(resetButton);
  resetButton.addEventListener('click',SetAgain);
}
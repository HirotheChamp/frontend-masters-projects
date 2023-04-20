const letters = document.querySelectorAll('.score-letter')
const loadingDiv = document.querySelector('.info-bar')
//done in all caps because this value never changes
const ANSWER_LENGTH = 5;



function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
  }


  async function init(){
let currentGuess = '';
let currentRow = 0;

const res = await fetch("https://words.dev-apis.com/word-of-the-day")
const resObj = await res.json();
const word = resObj.word.toUpperCase();

console.log(word)



function addLetter(letter) {
  if (currentGuess.length < ANSWER_LENGTH){
    //add letter to end
currentGuess += letter;
  } else {
    //replace letter
current = currentGuess.substring(0, currentGuess.length - 1) + letter;
  }
  letters[ANSWER_LENGTH * currentRow + currentGuess.length-1].innerText = letter;
}

async function commit () {
  if (currentGuess.length != ANSWER_LENGTH) {
    //do nothing
    return
  }
  currentRow++;
  currentGuess = '';
}


function backspace() {
  currentGuess = currentGuess.substring(0, currentGuess.length - 1);
  letters[ANSWER_LENGTH * currentRow + currentGuess.length].innerText = "";
}



  document.addEventListener('keydown', function handleKeyPress (event){
    const action = event.key;
    console.log(action)

    if(action === 'Enter'){
      commit();
  } else if (action === 'Backspace'){
backspace();
  } else if (isLetter(action)){
addLetter(action.toUpperCase())
  } else {
    //do nothing
  }
  });
}

  init();
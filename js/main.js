// Variables

    let turnCounter = 0;
    let boxesArray = [];
    let playerWon = false;
    let xWins = 0;
    let oWins = 0;
    boxesChecked = 0;

// Cached Element References

    let messageEl = document.getElementById('message');
    let boardEl = document.querySelector('section');
    let resetButton = document.querySelector('button');
    let boxesEl = boardEl.childNodes;
    let totalResults = document.getElementById('totalResults');
    let initButton = document.getElementById('newMatch');
    let sq0 = document.getElementById('sq0');
    let sq1 = document.getElementById('sq1');
    let sq2 = document.getElementById('sq2');
    let sq3 = document.getElementById('sq3');
    let sq4 = document.getElementById('sq4');
    let sq5 = document.getElementById('sq5');
    let sq6 = document.getElementById('sq6');
    let sq7 = document.getElementById('sq7');
    let sq8 = document.getElementById('sq8');

// Event Listeners

    boardEl.addEventListener('click', function() {
        if (playerWon === true){
            return;
        }

        if(event.target.className) {
            return;
        }
        
        toggleBox(event.target.id);
        renderResult(event.target.id);
        console.log(boxesChecked);
    });

    resetButton.addEventListener('click', function(){
        resetGame();
    });

    initButton.addEventListener('click', function(){
        init();
    });

// Functions

function resetGame() {
    
    turnCounter = 0;
    boxesArray = [];
    playerWon = false;
    boxesChecked = 0;
    messageEl.innerHTML = 'X starts. Press any box to begin!';
    
    for (let i=0; i< boxesEl.length; i++){
        if (boxesEl[i].nodeName !== '#text'){
            boxesArray.push(boxesEl[i]);
        }
        boxesEl[i].className = '';
    }

     console.log(boxesArray);
};

function init() {

    let xWins = 0;
    let oWins = 0;
    totalResults.innerHTML = (`${xWins} ...... ${oWins}`);
    resetGame();

}


function toggleBox(El){

    if(turnCounter%2 === 0){
        document.getElementById(El).className = 'x';
        messageEl.innerHTML = 'Os Turn';
    } else {
        document.getElementById(El).className = 'o';
        messageEl.innerHTML = 'Xs Turn';
    }

    turnCounter++;
};

function renderResult(El){

    let currentValue = document.getElementById(El).className;
    
    if (sq0.className === currentValue && sq1.className === currentValue && sq2.className === currentValue){
        displayWin(currentValue);
    }

    if (sq3.className === currentValue && sq4.className === currentValue && sq5.className === currentValue){
        displayWin(currentValue);
    }

    if (sq6.className === currentValue && sq7.className === currentValue && sq8.className === currentValue){
        displayWin(currentValue);
    }

    if (sq0.className === currentValue && sq3.className === currentValue && sq6.className === currentValue){
        displayWin(currentValue);
    }

    if (sq1.className === currentValue && sq4.className === currentValue && sq7.className === currentValue){
        displayWin(currentValue);
    }

    if (sq2.className === currentValue && sq5.className === currentValue && sq8.className === currentValue){
        displayWin(currentValue);
    }

    if (sq0.className === currentValue && sq4.className === currentValue && sq8.className === currentValue){
        displayWin(currentValue);
    }

    if (sq2.className === currentValue && sq4.className === currentValue && sq6.className === currentValue){
        displayWin(currentValue);
    }

    for (let i=0; i< boxesArray.length; i++){
        if (boxesArray[i].className){
            boxesChecked++;
        }
    }

    if (boxesChecked === 45 && !playerWon) {
        messageEl.innerHTML = `It's a Tie!`;
        playerWon = true;
    }

}

function displayWin(value) {
    messageEl.innerHTML = `${value.toUpperCase()}'s Win!`;
    confetti.start(1500);

    if (value === 'x') {
        xWins++;
    } else {
        oWins++;
    }

    totalResults.innerHTML = (`${xWins} ...... ${oWins}`);

    playerWon = true;
}

init();
// Variables

    let turnCounter = 0;
    let boxesArray = [];
    let playerWon = false;

// Cached Element References

    let messageEl = document.getElementById('message');
    let boardEl = document.querySelector('section');
    let resetButton = document.querySelector('button');
    let boxesEl = boardEl.childNodes;
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
        toggleBox(event.target.id);
        renderResult(event.target.id);
    });

    resetButton.addEventListener('click', function(){
        init();
    });

// Functions

function init() {
    
    turnCounter = 0;
    boxesArray = [];
    playerWon = false;
    messageEl.innerHTML = 'X starts. Press any box to begin!';
    
    for (let i=0; i< boxesEl.length; i++){
        if (boxesEl[i].nodeName !== '#text'){
            boxesArray.push(boxesEl[i]);
        }
        boxesEl[i].className = '';
    }

     console.log(boxesEl);
};


function toggleBox(El){

    if(document.getElementById(El).className || playerWon === true){
        return;
    }

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

    if (playerWon === true){
        return;
    }

    let currentValue = document.getElementById(El).className;
    if (sq0.className === currentValue && sq1.className === currentValue && sq2.className === currentValue){
        console.log('You win!');
        playerWon = true;
    }

    if (sq3.className === currentValue && sq4.className === currentValue && sq5.className === currentValue){
        console.log('You win!');
        playerWon = true;
    }

    if (sq6.className === currentValue && sq7.className === currentValue && sq8.className === currentValue){
        console.log('You win!');
        playerWon = true;
    }

    if (sq0.className === currentValue && sq3.className === currentValue && sq6.className === currentValue){
        console.log('You win!');
        playerWon = true;
    }

    if (sq1.className === currentValue && sq4.className === currentValue && sq7.className === currentValue){
        console.log('You win!');
        playerWon = true;
    }

    if (sq2.className === currentValue && sq5.className === currentValue && sq8.className === currentValue){
        console.log('You win!');
        playerWon = true;
    }

    if (sq0.className === currentValue && sq4.className === currentValue && sq8.className === currentValue){
        console.log('You win!');
        playerWon = true;
    }

    if (sq2.className === currentValue && sq4.className === currentValue && sq6.className === currentValue){
        console.log('You win!');
        playerWon = true;
    }
}

init();
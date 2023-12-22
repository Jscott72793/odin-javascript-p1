// ROCK, PAPER, SCISSORS

// COMPLETE ----- 1. Get the computer's choice.
// COMPLETE ----- 2. Get the player's choice .
// COMPLETE ----- 3. Compare the choices and select a winner.
// COMPLETE ----- 4. Add winner to a score variable by 1 (for each win). 
// COMPLETE ----- 5. Loop the game 5 times excluding any ties. 
// COMPLETE ----- 6. Champion a winner!




const CHOICES = ['ROCK', 'PAPER', 'SCISSORS']; 


let playerScore = 0;
let compScore = 0;


const playerScoreNumber = document.querySelector('.player-score-number');
playerScoreNumber.textContent = playerScore;

const computerScoreNumber = document.querySelector('.computer-score-number');
computerScoreNumber.textContent = compScore;

const gameNotes = document.querySelector('.game-notes');


// Function that plays through one round of ROCK, PAPER, SCISSORS.

const playRound = (computerSelection, playerSelection) => {

    if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS'){
        playerScore++;
        playerScoreNumber.textContent = playerScore;

        gameNotes.textContent = (`${playerSelection} beats ${computerSelection}! You win this round!`)


    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER'){
        compScore++
        computerScoreNumber.textContent = compScore;

        gameNotes.textContent = (`${computerSelection} beats ${playerSelection}! LOSER!!! `)

    } else if (playerSelection === 'ROCK' && computerSelection === 'ROCK'){

        gameNotes.textContent = (`${playerSelection} and ${computerSelection} tie! No one wins! Repeat this round!`)

    
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK'){
        winner = 'Player';
        playerScore++;
        playerScoreNumber.textContent = playerScore;
        gameNotes.textContent = (`${playerSelection} beats ${computerSelection}! You win this round!`)

    
    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS'){
        winner = 'Computer';
        compScore++;
        computerScoreNumber.textContent = compScore;

        gameNotes.textContent = (`${computerSelection} beats ${playerSelection}! LOSER!!! `)


    } else if (playerSelection === 'PAPER' && computerSelection === 'PAPER'){

        gameNotes.textContent = (`${playerSelection} and ${computerSelection} tie! No one wins! Repeat this round!`)


    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER'){
        playerScore++;
        playerScoreNumber.textContent = playerScore;

        gameNotes.textContent = (`${playerSelection} beats ${computerSelection}! You win this round!`)


    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK'){
        compScore++;
        computerScoreNumber.textContent = compScore;

        gameNotes.textContent = (`${computerSelection} beats ${playerSelection}! LOSER!!! `)

        

    } else if (playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS'){

        gameNotes.textContent = (`${playerSelection} and ${computerSelection} tie! No one wins! Repeat this round!`)

    };

    if (playerScore >= 5 || compScore >= 5){
        playerScore = 0;
        compScore = 0;
        playerScoreNumber.textContent = playerScore;
        computerScoreNumber.textContent = compScore;

        if(playerScore > compScore){
            gameNotes.textContent = 'Make a selection to start the game. First player to 5 wins!';
            alert('You Win! Now Resetting Score!')
        } else {
            gameNotes.textContent = 'Make a selection to start the game. First player to 5 wins!';
            alert('You lost! Sorry, please try again!')
        };
    };
};


const selectionGroup = document.querySelector('.game-items');


selectionGroup.addEventListener('click',(event)=> {

    let playerPick = '';

    let getCompChoice = (min, max) => Math.floor(Math.random() * (max -min) + min); 
    let computerPick = CHOICES[getCompChoice(0, 3)]; 

    switch (event.target.className){
        case 'rock-button':
            playerPick = 'ROCK';
            playRound(computerPick, playerPick);
            break;
        
        case 'paper-button':
            playerPick = 'PAPER';
            playRound(computerPick, playerPick);
            break;

        case 'scissors-button':
            playerPick = 'SCISSORS';
            playRound(computerPick, playerPick);
            break;
    };
});


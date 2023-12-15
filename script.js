// ROCK, PAPER, SCISSORS

// COMPLETE ----- 1. Get the computer's choice.
// COMPLETE ----- 2. Get the player's choice .
// COMPLETE ----- 3. Compare the choices and select a winner.
// COMPLETE ----- 4. Add winner to a score variable by 1 (for each win). 
// COMPLETE ----- 5. Loop the game 5 times excluding any ties. 
// COMPLETE ----- 6. Champion a winner!


const choices = ['ROCK', 'PAPER', 'SCISSORS']; 



let playerScore = 0;
let compScore = 0;


// console.log(`Player chooses: ${playerChoice}`);
// console.log(`Computer chooses: ${compChoice}`);

const playRound = (computerSelection, playerSelection) => {
    
    let getCompChoice = (min, max) => Math.floor(Math.random() * (max -min) + min);

    let getPlayerchoice = (prompt('Choose ROCK, PAPER, or SCISSORS: ')).toUpperCase();

    computerSelection = choices[getCompChoice(0, 3)];

    playerSelection = getPlayerchoice;


    if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS'){
        playerScore++;
        console.log(`${playerSelection} beats ${computerSelection}! You win this round!`);
        console.log(`Your score: ${playerScore}`);
        console.log(`Computer score: ${compScore}`);

    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER'){
        compScore++
        console.log(`${computerSelection} beats ${playerSelection}! LOSER!!! `);
        console.log(`Your score: ${playerScore}`);
        console.log(`Computer score: ${compScore}`);

    } else if (playerSelection === 'ROCK' && computerSelection === 'ROCK'){
        console.log(`${playerSelection} and ${computerSelection} tie! No one wins! Repeat this round!`);
        console.log(`Your score: ${playerScore}`);
        console.log(`Computer score: ${compScore}`);

    
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK'){
        winner = 'Player';
        playerScore++
        console.log(`${playerSelection} beats ${computerSelection}! You win this round!`);
        console.log(`Your score: ${playerScore}`);
        console.log(`Computer score: ${compScore}`);
    
    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS'){
        winner = 'Computer';
        compScore++;
        console.log(`${computerSelection} beats ${playerSelection}! LOSER!!! `);
        console.log(`Your score: ${playerScore}`);
        console.log(`Computer score: ${compScore}`);

    } else if (playerSelection === 'PAPER' && computerSelection === 'PAPER'){
        console.log(`${playerSelection} and ${computerSelection} tie! No one wins! Repeat this round!`);
        console.log(`Your score: ${playerScore}`);
        console.log(`Computer score: ${compScore}`);

    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER'){
        playerScore++;
        console.log(`${playerSelection} beats ${computerSelection}! You win this round!`);
        console.log(`Your score: ${playerScore}`);
        console.log(`Computer score: ${compScore}`);

    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK'){
        compScore++;
        console.log(`${computerSelection} beats ${playerSelection}! LOSER!!! `);
        console.log(`Your score: ${playerScore}`);
        console.log(`Computer score: ${compScore}`);
        

    } else if (playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS'){
        console.log(`${playerSelection} and ${computerSelection} tie! No one wins! Repeat this round!`);
        console.log(`Your score: ${playerScore}`);
        console.log(`Computer score: ${compScore}`);
    } else {
        alert('This is not a valid entry! Please try again!');
    };
}

const playGame = () => {

    alert('Welcome to ROCK, PAPER, SCISSORS. TRY TO BEAT THE COMPUTER BEST 3 OUT OF 5!')

    while (Math.max(playerScore, compScore) < 3){
        playRound();
    };

    if (playerScore < compScore){
        alert(`You lost! Sorry, try again next time!`);
    } else {
        alert(`Congrats! You win best 3 out of 5!`);
    };
}

console.log(playGame());
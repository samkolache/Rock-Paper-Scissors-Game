let userChoice = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;
const possibleChoices = ['rock', 'paper', 'scissors'];
const resetBtn = document.querySelector(".reset-btn");



// Store user selection into userChoice, then send that variable to the playGame Function
document.querySelector(".rock").addEventListener("click", event => {
    userChoice = "rock"
    computerChoice = randomNumber();
    playGame(userChoice, computerChoice);

})

document.querySelector(".paper").addEventListener("click", event => {
    userChoice = "paper"
    computerChoice = randomNumber();
    playGame(userChoice, computerChoice);
})

document.querySelector(".scissors").addEventListener("click", event => {
    userChoice = "scissors"
    computerChoice = randomNumber();
    playGame(userChoice, computerChoice);
})

function playGame(user, comp) {
        if(playerScore === 5 || computerScore === 5) {
            endGame();
        } else if(user === comp) {
            document.querySelector(".result").innerHTML = "<span class = 'default'>It's a tie, oh no!</span>"
        } else if(user === "rock" && comp === "scissors" || user === "paper" && comp === "rock" || user === "scissors" && comp === "paper"   ) {
            document.querySelector(".result").innerHTML = "<span class = 'default'>Player wins, hooray!</span>"
            increaseTally('user');
        } else if(user === "scissors" && comp === "rock" || user === "rock" && comp === "paper" || user === "paper" && comp === "scissors") {
            document.querySelector(".result").innerHTML = "<span class = 'default'>Computer wins, boo hoo</span>"
            increaseTally('computer');
        }
        
}

function endGame() {
    if(playerScore > computerScore) {
        document.querySelector(".result").innerHTML = "<span class = 'default'>Player wins, Congrats!</span>"
        resetGame();
    } else if(playerScore < computerScore) {
        document.querySelector(".result").innerHTML = "<span class = 'default'>Computer wins, sorry!</span>"
        resetGame();
    }

}

function resetGame() {
    resetBtn.style.opacity = "100"
    resetBtn.addEventListener('click', event => {
        resetBtn.style.opacity = "0";
        playerScore = 0;
        document.getElementById('count1').textContent = playerScore
        computerScore = 0;
        document.getElementById('count2').textContent = computerScore;
        document.querySelector(".result").innerHTML = "<span class = 'default'>Start the game!</span>"
    })
}


function increaseTally (winner) {
    if(winner === 'user') {
        playerScore++;
        document.getElementById('count1').textContent = playerScore
    } else if(winner === 'computer') {
        computerScore++
        document.getElementById('count2').textContent = computerScore;
    }
}


// Computer Generated Rock, Paper, or Scissors
function randomNumber() {
    const randomIndex = Math.floor(Math.random() *possibleChoices.length)
    
    return possibleChoices[randomIndex]
}



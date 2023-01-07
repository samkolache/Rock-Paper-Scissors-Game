let userChoice = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;
const possibleChoices = ['rock', 'paper', 'scissors'];



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
    if(user === comp) {
        document.querySelector(".result").innerHTML = "<span class = 'butt'>It's a tie, oh no!</span>"
    } else if(user === "rock" && comp === "scissors" || user === "paper" && comp === "rock" || user === "scissors" && comp === "paper"   ) {
        document.querySelector(".result").innerHTML = "<span class = 'butt'>Player wins, hooray!</span>"
        increaseTally('user');
    } else if(user === "scissors" && comp === "rock" || user === "rock" && comp === "paper" || user === "paper" && comp === "scissors") {
        document.querySelector(".result").innerHTML = "<span class = 'butt'>Computer wins, boo hoo</span>"
        increaseTally('computer');
    }
}

function increaseTally (winner) {
    if(winner === 'user') {
        playerScore++;
        document.getElementById('count1').textContent = playerScore
    } else if(winner === 'computer') {
        computerScore++
        document.getElementById('count2').textContent = computerScore
    }
}


// Computer Generated Rock, Paper, or Scissors
function randomNumber() {
    const randomIndex = Math.floor(Math.random() *possibleChoices.length)
    
    return possibleChoices[randomIndex]
}



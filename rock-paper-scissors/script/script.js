function getComputerChoice(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

function assignComputerChoice(num) {
    num = getComputerChoice(1,4)
    if (num === 1) {        
        return "Rock"
    }
    else if (num === 2) {
        return "Paper"
    }
    else if (num === 3) {
        return "Scissors"
    }
}

function caseInsensitive(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
}

function getUserChoice() {
    input = prompt("Rock, paper or scissors?")
    return input.trim()
}

function validUserChoice() {
    let userChoice = (caseInsensitive(getUserChoice()))
    while (userChoice !== "Rock" && userChoice !== "Paper" && userChoice !== "Scissors") {
        alert("Invalid choice. Please enter Rock, Paper, or Scissors.");
        userChoice = caseInsensitive(getUserChoice());
        }
    return userChoice
}

let userScore = 0
let computerScore = 0
let roundCount = 1

function playRound() {
    let userChoice = validUserChoice()
    let computerChoice = assignComputerChoice()
    if (
        userChoice ===`Rock` && computerChoice === `Scissors` ||
        userChoice === `Scissors` && computerChoice === `Paper` ||
        userChoice === `Paper` && computerChoice === `Rock`) {
            console.log(`You win! ${userChoice} beats ${computerChoice}.`)
            userScore++
        }
    else if (
        computerChoice ===`Rock` && userChoice === `Scissors` ||
        computerChoice === `Scissors` && userChoice === `Paper` ||
        computerChoice === `Paper` && userChoice === `Rock`) {
            console.log(`You lose! ${computerChoice} beats ${userChoice}.`)
            computerScore++
        }
    else {
        console.log(`Draw! Both chose ${userChoice}`)
        } 
    console.log (`SCORE\nUser ${userScore}\nComputer ${computerScore}`)       
}

function fiveRounds() {
    while (roundCount <= 5) {
        console.log(`~ROUND ${roundCount}~`)
        playRound()
        roundCount++
    }
}

function extraRound() {
    while (userScore === computerScore) {
        console.log(`EXTRA ROUND!`)
        playRound() 
    }
}

function announceWinner() {
    if (userScore < computerScore) {
        console.log(`Oh no, you lost! :(`)    
        return;
    }
    
    console.log(`Congratulations, you won!`) 
}

function playGame() {
    fiveRounds()
    extraRound()
    announceWinner()
}

playGame()




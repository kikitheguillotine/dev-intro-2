/*
- GET COMPUTER'S CHOICE
    Declare function getComputerChoice that randomly returns strings "Rock" "Paper" or "Scissors" using the math.random() method
        Include the math.random() method in the function to get a random number between 0 and 1    
        Declare two parameters for the function. These numbers will define the range for random numbers to be returned (1-3)
            min - the argument will be a minimum number (1), and 
            max - the argument will be a maximum number (4). 
        Declare a const (minCeiled) with the math.ceil() method to transform the min number we'll get from the math.random() into an integer
            Use min as a parameter
        Declare a const (maxFloored) with the math.floor() method to transform the max number we'll get from the math.random() into an integer
            Use max as a parameter
        Return the math.floor() method with the math.random() as a parameter.
            Multiply math.random by the maxFloored const subtracted by the minCeiled const
            Add the minCeiled const.
    Declare function that  that assigns the getComputerChoice result to rock, paper or scissors using if/else, and returns the result.
        If getComputerChoice = 1: return rock
        Else if getComputerChoice = 2: return paper
        Else getComputerChoice = 3: return scissors    
*/

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

/*
- GET USER'S CHOICE
    Declare function getUserChoice()
        Use prompt to get user's input
        Return user's input
            Make it case-insensitive
                Declare function that returns input using charAt(), toUpperCase(), slice() and toLowerCase()
    Assign result to a variable
    Declare function that displays error if result is invalid (not rock, paper or scissor)
        If result =/ rock paper or scissors: 
            alert "was that a typo? Please pick rock, paper or scissors"
            run getUserChoice again
        Else (if result is rock or paper or scissors): return "You picked Rock!/Paper/Scissors"
             
*/

function caseInsensitive(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
}

function getUserChoice() {
    input = prompt("Rock, paper or scissors?")
    return input
}

// Declare function to loop until input is valid 

function validUserChoice() {
    let userChoice = (caseInsensitive(getUserChoice()))
    while (userChoice !== "Rock" && userChoice !== "Paper" && userChoice !== "Scissors") {
        alert("Invalid choice. Please enter Rock, Paper, or Scissors.");
        userChoice = caseInsensitive(getUserChoice());
        }
    // console.log(userChoice)
    return userChoice
}

validUserChoice()

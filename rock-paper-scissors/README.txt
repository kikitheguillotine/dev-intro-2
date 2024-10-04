GET COMPUTER'S CHOICE
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

GET USER'S CHOICE
    Declare function getUserChoice()
        Use prompt to get user's input
        Return user's input
            Make it case-insensitive
                Declare function that returns input using charAt(), toUpperCase(), slice() and toLowerCase()
    Assign result to a variable
    Declare function that loops code until user's input is valid


/* KEEP TRACK OF THE SCORE
    Declare variable userScore
        Initialize it with value of 0
        Each round score will increment if user wins or stay the same if user loses
    Declare variable computerScore
        Initialize it with value of 0
        Each round score will increment if user wins or stay the same if user loses
PLAY A SINGLE ROUND
    Declare function playRound()
    Display diferent messages when user or computer wins
*/


/* PLAY 5 ROUNDS GAME
    Declare roundCount variable
    Declare function  that loops the code for 5 rounds
    Increment 1 to roundCount each round, until it hits 5 rounds and loop stops
    Display message with game winner
*/
const prompt = require("prompt-sync")()
const cookie = require("js-cookie"); //Cookie for storing the points and the username


let username = prompt("Enter your username: ")

cookie.set("username", username.toString()) //where username is stored in the cookie
console.log(`welcome ${username}`)

let level = 1 
function game(min, max) {
    while(true){
        let guess = Math.floor((Math.random()*(max - min)) + min);
        console.log(guess); //Where the cheat line is😎
        let userGuess = prompt("Guess a number between " + min + " and " + max + ": ");
        let point = level - 1 //=0
    
            if (userGuess === guess.toString()){
                    level++
                    max++
                    point++
                    cookie.set("point", point.toString()) // where point is stored in the cookie
                    console.log(`Correct! Proceed to level ${level} 😎😎... `, "  You have " + point + " points")
                    continue;
            }else{
                    console.log("Game over! The correct guess is " + guess)
                    break;
            }
        }

}

game(1, 2)
   
#!/usr/bin/env tsm
import inquirer from "inquirer";
async function askQuestion() {
    const number = (Math.floor(Math.random() * 10));
    const answer = await inquirer.prompt([
        {
            "name": "Number_Guessing_Game",
            "type": "number",
            "message": "Please Guess a Number",
        }
    ]);
    if (answer.Number_Guessing_Game == number) {
        console.log("Congratulations!You Won the Game");
    }
    else {
        console.log("You Guessed Wrong! Please Try Again");
    }
}
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do You Want To Continue Press Y or N"
        });
    } while (again.restart == "Y" || again.restart == "y" || again.restart == "YES" || again.restart == "yes");
}
startAgain();

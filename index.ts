#! /usr/env/bin node

import inquirer from "inquirer";

const answer:{
    Sentence: string
} =  await inquirer.prompt([{
     name: "Sentence",
     message: "Enter Your Sentence To Count Words",
     type: "input",


}])

const words = answer.Sentence.trim().split(" ")

console.log(words);

console.log(`Your Sentenc word Count is ${words.length}`);


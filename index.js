#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('\n🌟🌟🌟 Welcome to Typescript World of Colors 🌟🌟🌟\n🌟🌟🌟 Thank you Governor Sindh for Gov. Sindh Initiative Program 🌟🌟🌟\n🌟🌟🌟 Welcome to Strange World of Coding 🌟🌟🌟\n🌟🌟🌟 Good Luck to Everyone at Faculty of Gov. Sindh 🌟🌟🌟\n🌟🌟🌟 Never forget you are future of Pakistan 🌟🌟🌟');
    await sleep();
    rainbowTitle.stop();
}
await welcome();
function rainbowText(text) {
    const rainbowColors = [
        chalk.red.bold.italic,
        chalk.yellow.bold.italic,
        chalk.green.bold.italic,
        chalk.blue.bold.italic,
        chalk.magenta.bold.italic,
        chalk.cyan.bold.italic
    ];
    let coloredText = '';
    for (let i = 0; i < text.length; i++) {
        const color = rainbowColors[i % rainbowColors.length];
        coloredText += color(text[i]);
    }
    return coloredText;
}
const currentDateTime = new Date();
const currentDate = currentDateTime.toLocaleDateString();
const currentTime = currentDateTime.toLocaleTimeString();
console.log(rainbowText(`\nDate: ${currentDate} & Time: ${currentTime}`));
console.log();
console.log(chalk.yellowBright.italic.bold.underline("\n🟠🟢🔵  Welcome to My Word Counter 🔵🟢🟠\n"));
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: chalk.rgb(255, 0, 255).italic.bold("Enter your sentence to count the word: ")
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log("\n", words);
console.log(chalk.rgb(255, 195, 0).italic.bold(`\n Your sentence word count is ${words.length}.`));

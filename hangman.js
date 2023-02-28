const status = document.getElementById("status");
status.innerText = "Lets have fun :)";

const random_word = document.getElementById("random_word");
const submit_word_div = document.getElementById("submit_word_div");

const input = document.getElementById("input");
const input_div = document.getElementById("input_div");

const new_game_btn = document.getElementById("new_game_btn");
const submit_btn = document.getElementById("submit_btn");

const hangman = {
    words: [
        "laravel",
        "php",
        "api",
        "javascript",
        "vscode",
        "react",
        "html",
        "sql",
    ],
};

const rules = {
    gameOff: false,
    remainingGuesses: 5,
    word: "",
    trueLetters: [],
};

function startGame() {
    rules.gameOff = false;
    rules.remainingGuesses = 5;
    rules.word =
        hangman.words[Math.floor(Math.random() * hangman.words.length)];
    rules.trueLetters = [];
}

function guess(input) {
    for (let i = 0; i < rules.word.length; i++) {
        if (rules.trueLetters.includes(rules.word[i])) {
            random_word.innerHTML += ` ${rules.word[i]} `;
        } else {
            random_word.innerHTML += " _ ";
        }
    }
}

function win() {
    let foundAllLetters = true;
    for (let i = 0; i < rules.word.length; i++) {
        if (!rules.trueLetters.includes(rules.word[i])) {
            foundAllLetters = false;
        }
    }
    if (foundAllLetters) {
        status.innerText = "Congratulations, you won :)";
        rules.gameOff = true;
    }
}

function lose() {
    if (rules.remainingGuesses === 0) {
        status.innerText = `Sorry, you lost :( \n The word was ${rules.word}.`;
        rules.gameOff = true;
    }
}

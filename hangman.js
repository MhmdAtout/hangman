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

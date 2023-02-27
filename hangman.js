const status = document.getElementById('status');
const word = document.getElementById('word');
const new_game = document.getElementById('new_game');
const submit = document.getElementById('submit');

const Hangman = {
    words : ["laravel", "php", "api", "javascript", "vscode", "react", "html", "sql"] 
}

const Rules = {
    gameOff : false,
    remainingGuesses: 5,
    word : "",
    trueLetters: [],
}
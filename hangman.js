const status = document.getElementById('status');
status.innerText = "Lets have fun :)"
const random_word = document.getElementById('random_word');
const input = document.getElementById('input');
const new_game_btn = document.getElementById('new_game_btn');
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
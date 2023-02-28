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
    if (rules.gameOff) {
        status.innerText = `Please start a new game :)`;
    } else if (input.length === 0 || input === " ") {
        status.innerText = "Please enter a letter";
    } else if (input.length > 1) {
        status.innerText = "Please enter only one letter";
    } else if (rules.trueLetters.includes(input)) {
        status.innerText = "You've already tried it :) Try another one";
    } else {
        rules.trueLetters.push(input);
        if (rules.word.includes(input)) {
            status.innerText = "Correct guess :)";
            win();
        } else {
            rules.remainingGuesses--;
            console.log(rules.remainingGuesses);
            status.innerText = `Incorrect guess. You have ${rules.remainingGuesses} guesses remaining ;(`;
            console.log(rules.remainingGuesses);
            lose();
        }
    }

    random_word.innerText = "";

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

new_game_btn.addEventListener("click", () => {
    startGame();
    submit_word_div.classList.remove("hide");
    input_div.classList.remove("hide");
    submit_btn.classList.remove("hide");
    status.innerText = `The word is made up of ${rules.word.length} letters`;
});

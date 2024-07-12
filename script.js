let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let userGuess = parseInt(document.getElementById('guessInput').value);
    let result = document.getElementById('result');
    attempts++;

    if (isNaN(userGuess)) {
        result.textContent = "Please enter a valid number!";
        result.style.color = "red";
    } else if (userGuess < 1 || userGuess > 100) {
        result.textContent = "Number must be between 1 and 100!";
        result.style.color = "red";
    } else if (userGuess === randomNumber) {
        result.textContent = `Congratulations! You guessed the correct number in ${attempts} tries!`;
        result.style.color = "green";
        document.getElementById('guessButton').classList.add('d-none');
        document.getElementById('resetButton').classList.remove('d-none');
    } else if (userGuess < randomNumber) {
        result.textContent = "Too low! Try again.";
        result.style.color = "orange";
    } else {
        result.textContent = "Too high! Try again.";
        result.style.color = "orange";
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guessInput').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('guessButton').classList.remove('d-none');
    document.getElementById('resetButton').classList.add('d-none');
}

let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let RandomNumber = Math.ceil(Math.random() * 100);

function checkGuess() {
    let InputValue = parseInt(userInput.value);

    if (InputValue === RandomNumber) {
        gameResult.textContent = "Congrats";
        gameResult.style.backgroundColor = "green";
    } else if (InputValue < RandomNumber) {
        gameResult.textContent = "Too low, try greater than this.";
        gameResult.style.backgroundColor = "grey";
    } else if (InputValue > RandomNumber) {
        gameResult.textContent = "Too high, try less than this.";
        gameResult.style.backgroundColor = "grey";
    } else {
        gameResult.textContent = "Input should be Number";
        gameResult.style.backgroundColor = "grey";
    }

}
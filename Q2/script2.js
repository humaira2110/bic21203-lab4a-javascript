const input = document.getElementById("userInput");
const button = document.getElementById("checkBtn");
const result = document.getElementById("result");

function checkInput() {
    const value = input.value.trim();
    const number = Number(value);

    if (value === "" || isNaN(number)) {
        result.textContent = "Please enter a valid number!";
    }
    else if (number < 10) {
        result.textContent = "The number is lower than 10";
    }
    else if (number > 10) {
        result.textContent = "The number is higher than 10";
    }
    else {
        result.textContent = "The number is equal to 10";
    }
}

button.addEventListener("click", checkInput);
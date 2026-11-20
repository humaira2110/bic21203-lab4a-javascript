const button = document.getElementById("generateBtn");
const list = document.getElementById("numberList");

function generateNumbers() {
    list.textContent = "";

    for (let i = 1; i <= 5; i++) {
        const item = document.createElement("li");

        item.textContent = "The number is " + i;

        list.appendChild(item);
    }
}

button.addEventListener("click", generateNumbers);
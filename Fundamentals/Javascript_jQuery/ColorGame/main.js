let numSquares = 6
let colors = [];
let targetColor;
let title = document.querySelector("h1");
let squares = document.querySelectorAll(".square")
let resetButton = document.querySelector("#resetButton");
let modeButtons = document.querySelectorAll(".mode");
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");

init();

function init() {
    setupModeButtons();
    setupSquares();
    resetGame();
    resetButton.addEventListener("click", resetGame);
}

function setupModeButtons() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            resetGame();
        });
    }
}

function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            let clickedColor = this.style.backgroundColor;
            if (clickedColor === targetColor) {
                changeSquareColors(clickedColor);
                resetButton.textContent = "Play Again?";
                messageDisplay.textContent = "Correct!";
                title.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function resetGame() {
    colors = getRandomColors(numSquares);
    targetColor = getTargetColor();
    resetButton.textContent = "New Colors";
    title.style.backgroundColor = "";
    messageDisplay.textContent = "";
    colorDisplay.textContent = targetColor;
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}

function changeSquareColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function getRandomColors(nColors) {
    let colorArray = [];
    for (let i = 0; i < nColors; i++) {
        colorArray.push(getRandomColor());
    }
    return colorArray;
}

function getTargetColor() {
    let rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
}
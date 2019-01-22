let isGameOver = false;
let winningScore = 5;

let winScoreDisp = document.querySelector("#winDisplay")
let numInput = document.querySelector("#numInput")
numInput.addEventListener("change", function () {
    if (numInput.value < 1) this.value = 1; // force positive score
    winScoreDisp.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});

let p1Score = 0;
let p1Disp = document.querySelector("#p1Display")
let p1Button = document.querySelector("#p1");
p1Button.addEventListener("click", function () {
    if (isGameOver) return;
    p1Score++;
    p1Disp.textContent = p1Score;
    if (p1Score === winningScore) {
        p1Disp.classList.add("winner");
        isGameOver = true;
    }
});

let p2Score = 0;
let p2Disp = document.querySelector("#p2Display")
let p2Button = document.querySelector("#p2");
p2Button.addEventListener("click", function () {
    if (isGameOver) return;
    p2Score++;
    p2Disp.textContent = p2Score;
    if (p2Score === winningScore) {
        p2Disp.classList.add("winner");
        isGameOver = true;
    }
});

let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", reset);

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Disp.textContent = 0;
    p2Disp.textContent = 0;
    p1Disp.classList.remove("winner");
    p2Disp.classList.remove("winner");
}

window.addEventListener("load", start);

function start() {
    console.log("start");
    gameLoad();
}

function gameLoad() {
    document.querySelector(".rock").addEventListener("click", chooseRock);
    document.querySelector(".paper").addEventListener("click", choosePaper);
    document.querySelector(".scissors").addEventListener("click", chooseScissors);
}

let player = "";
let computer = "";
let hands = document.querySelectorAll(".player");

function chooseRock() {
    console.log("rock");
    player = "rock";
    computerChoose();
}

function choosePaper() {
    console.log("paper");
    player = "paper";
    computerChoose();
}

function chooseScissors() {
    console.log("scissors");
    player = "scissors";
    computerChoose();
}


function computerChoose() {
    console.log("computer");

    let rand = Math.ceil(Math.random() * 3);
    if (rand === 1) {
        computer = "rock";
        console.log("rock");
    }
    if (rand === 2) {
        computer = "paper";
        console.log("paper");
    }
    if (rand === 3) {
        computer = "scissors";
        console.log("scissors")
    }

    shake();
}

function shake() {
    console.log("shake");
    hands.forEach((el) => el.classList.add("shake"));
}

hands.forEach((el) => el.addEventListener("animationend", () => {
    console.log("fight");

    if (player === "rock") {
        if (computer === "paper") {
            document.querySelector("#lose").classList.remove("hidden");
            console.log("lose");
        }
        else if (computer === "scissors") {
            document.querySelector("#win").classList.remove("hidden");
            console.log("win");
        }
        else if (computer === "rock") {
            document.querySelector("#draw").classList.remove("hidden");
            console.log("draw");
        }
    }

    if (player === "paper") {
        if (computer === "paper") {
            document.querySelector("#draw").classList.remove("hidden");
            console.log("draw");
        }
        else if (computer === "scissors") {
            document.querySelector("#lose").classList.remove("hidden");
            console.log("lose");
        }
        else if (computer === "rock") {
            document.querySelector("#win").classList.remove("hidden");
            console.log("win");
        }
    }

    if (player === "scissors") {
        if (computer === "paper") {
            document.querySelector("#win").classList.remove("hidden");
            console.log("win");
        }
        else if (computer === "scissors") {
            document.querySelector("#draw").classList.remove("hidden");
            console.log("draw");
        }
        else if (computer === "rock") {
            document.querySelector("#lose").classList.remove("hidden");
            console.log("lose");
        }
    }
}))

function playAgain() {
    console.log("playagain");
    resetGame();
}

document.querySelector("#gamefield").addEventListener("click", playAgain);


function resetGame() {
    console.log("reset");
    player = "";
    computer = "";

    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#lose").classList.add("hidden");
    document.querySelector("#draw").classList.add("hidden");

    document.querySelectorAll(".player").
    forEach((el) => el.classList.remove("shake"));
}
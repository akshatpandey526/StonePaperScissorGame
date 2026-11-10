let resetBtn = document.querySelector(".reset");
let yoursc = document.querySelector(".yoursc")
let compsc = document.querySelector(".computersc")
let Choices = document.querySelectorAll(".choice");
let result = document.querySelector(".result-btn");
let computerchoice = document.querySelector("#compchoose")
let yourchoice = document.querySelector("#yourchoose")
let computerscore = 0;
let Yourscore = 0;
let win;

const computerChoice = () => {
    const arr = ["Stone", "Paper", "Scissors"]
    let comp = arr[Math.floor(Math.random() * 3)]
    computerchoice.innerText = `Computer choice = ${comp}`;
    return comp;
}
Choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        yourchoice.innerText = `user choice = ${userChoice}`;
        score(userChoice);
        checkUp(win);
    })
})

const score = (userChoice) => {
    let computer = computerChoice();
    if (userChoice === computer) {
        win = null;
        return;
    } else {
        if (userChoice === "Paper") {
            (computer === "Stone") ? win = true : win = false
        } else if (userChoice === "Stone") {
            (computer === "Scissors") ? win = true : win = false
        }
        else if (userChoice === "Scissors") {
            (computer === "Paper") ? win = true : win = false
        }
    }
}

let checkUp = (win) => {
    if (win == true) {
        result.innerText = "You Win"
        Yourscore++
        result.style.setProperty("background-color", "green", "important");
        result.style.setProperty("color", "white", "important");
        yoursc.innerText = Yourscore;
    } else if (win == false) {
        result.innerText = "You Lose"
        computerscore++
       result.style.setProperty("background-color", "red", "important");
         result.style.setProperty("color", "white", "important");
        compsc.innerText = computerscore;
    } else if (win == null) {
        result.innerText = "Draw";
        result.style.setProperty("background-color", "gray", "important");
        result.style.setProperty("color", "white", "important");
    }
}

resetBtn.addEventListener("click", () => {
    computerscore = 0;
    Yourscore = 0;
     result.style.setProperty("background-color", "black", "important");
     result.style.setProperty("color", "white", "important");
     computerchoice.innerText = "";
     yourchoice.innerText = "";
    yoursc.innerText = Yourscore;
    compsc.innerText = computerscore;

    result.innerText = "Play Your Move";
});
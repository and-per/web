const player0field = document.querySelector(".player-0");
const player1field = document.querySelector(".player-1");
const score0 = document.getElementById("score-0");
const score1 = document.getElementById("score-1");
const current0 = document.getElementById("current-0");
const current1 = document.getElementById("current-1");

const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn-new");
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold");

score0.innerHTML = 0
score1.innerHTML = 0

dice.classList.add("hidden")

const initState = () => {
    totalScores = [0, 0];
    currentScore = 0;
    activePlayer = 0;

    score0.innerHTML = 0;
    score1.innerHTML = 0;
    current0.innerHTML = 0;
    current1.innerHTML = 0;
    dice.classList.add("hidden");

    player0field.classList.add("active");
    player1field.classList.remove("active");
}

initState()

const switchPlayer = () => {
    document.getElementById(`current-${activePlayer}`).innerHTML = 0;
    activePlayer = activePlayer == 0 ? 1: 0
    currentScore = 0

    player0field.classList.toggle("active");
    player1field.classList.toggle("active");
}

btnRoll.addEventListener("click", () => {
    console.log("Ы")
    const diceSide = Math.trunc(Math.random() * 6 + 1)
    dice.src = `dice-${diceSide}.png`
    dice.classList.remove("hidden")

    if (diceSide != 1){
        currentScore += diceSide;
        document.getElementById(`current-${activePlayer}`).innerHTML = currentScore
    }else{
        switchPlayer()
        const boom = new Audio("Vine-boom-sound-effect.mp3");
        boom.play();
    }
})

btnHold.addEventListener("click", () => {
    totalScores[activePlayer] += currentScore
    document.getElementById(`score-${activePlayer}`).innerHTML =
        totalScores[activePlayer];
    switchPlayer()
    const boom1 = new Audio("v.mp3.mp3");
        boom1.play();
        boom1.play();
        boom1.play();
        boom1.play();
        boom1.play();
        boom1.play();
        boom1.play();
        boom1.play();
        boom1.play();
        boom1.play();
        boom1.play();
        boom1.play();

})
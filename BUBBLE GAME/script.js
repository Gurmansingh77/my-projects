let rhn = 0
let scoree = 0

function CreateBubbles() {

    let clutter = ""
    for (let i = 0; i < 207; i++) {
        clutter += `<div class="bubbles">${Math.floor(Math.random() * 10)}</div>`
    }
    document.querySelector(".bottom").innerHTML = clutter
}

function timer() {
    let count = 60;
    let timerinterVal = setInterval(function () {
        count--
        document.querySelector(".timer").textContent = count

        if (count == 0) {
            clearInterval(timerinterVal)
            document.querySelector(".bottom").innerHTML = "<h1>Game Over</h1>"
        }
    }, 1000)
}

function randomHitNum() {
    rhn = (Math.floor(Math.random() * 10))
    document.querySelector(".hit").textContent = rhn
}

function IncreaseScore() {
    scoree += 10
    document.querySelector(".score").textContent = scoree

}

document.querySelector(".bottom").addEventListener("click", function (dets) {
    let bubbleNum = Number(dets.target.textContent)
    if (bubbleNum === rhn) {
        CreateBubbles()
        randomHitNum()
        IncreaseScore()
    }
})


CreateBubbles()
timer()
randomHitNum()
 


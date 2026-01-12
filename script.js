// JavaScript source code
// Date created: 9/1/2026
// Created by: Marc Bryan Forbes

const startBtn = document.getElementById("startBtn");
const main = document.getElementById("main");
const heart = document.getElementById("heart");
const popSound = document.getElementById("popSound");

startBtn.addEventListener("click", () => {
    startBtn.style.display = "none"; //hide button
    main.classList.remove("hidden"); //show heart
})

// Heart pop
heart.addEventListener("click", () => {
    popSound.currentTime = 0;
    popSound.play();

    heart.classList.add("pop");
    console.log("Ready");

    createConfetti(); // Call Confetti function

    //Hide bottom text after pop
    setTimeout(() => {
        heart.style.display = "none";
        document.getElementById("bottomText").style.display = "none";

        //Move to stage 5
        console.log("Heart popped - Go to next stage");
    }), 600;
});

function createConfetti() {
    for (let i = 0; i < 12; i++) {
        const miniHeart = document.createElement("div");
        miniHeart.classList.add("mini-heart");

        const x = (Math.random() - 0.5) * 200 + "px";
        const y = (Math.random() - 0.5) * 200 + "px";

        miniHeart.style.setProperty("--x", x);
        miniHeart.style.setProperty("--y", y);

        miniHeart.style.left = heart.offsetLeft + 120 + "px";
        miniHeart.style.top = heart.offsetTop + 120 + "px";

        document.body.appendChild(miniHeart);
        setTimeout(() => miniHeart.remove(), 800);
    }
}

setInterval(createSakura, 300);

function createSakura() {
    const sakura = document.createElement("div");
    sakura.classList.add("sakura");

    sakura.style.left = Math.random() * window.innerWidth + "px";
    sakura.style.animationDuration = 5 + Math.random() * 5 + "s";

    document.body.appendChild(sakura);

    setTimeout(() => sakura.remove(), parseFloat(sakura.style.animationDuration) * 1000);
}
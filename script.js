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
        console.log("Go to stage 6");
        openSlideshow();
    }, 600);
});

function createConfetti() {
    for (let i = 0; i < 15; i++) {
        const miniHeart = document.createElement("div");
        miniHeart.classList.add("mini-heart");

        const x = (Math.random() - 0.5) * 500 + "px";
        const y = (Math.random() - 0.5) * 500 + "px";

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

// Enter images and texts
const slides = [
    { image: "Images/p1.jpg", text: "Test1" },
    { image: "Images/p2.jpg", text: "Test2" },
    { image: "Images/p3.jpg", text: "Test3" },
    { image: "Images/p4.jpg", text: "Test4" }
];

let currentSlide = 0;

function openSlideshow() {
    main.style.display = "none" // hide heart
    const slideshow = document.getElementById("slideshow");
    const slideImage = document.getElementById("slideImage");
    const slideText = document.getElementById("slideText");
    const nextBtn = document.getElementById("nextBtn");

    slideshow.classList.remove("hidden");

    //Show first slide
    slideImage.src = slides[currentSlide].image;
    slideText.textContent = slides[currentSlide].text;

    showSlide(currentSlide);

    //Slide interval
    const slideInterval = setInterval(() => {
        currentSlide++;
        if (currentSlide < slides.length) {
            slideImage.src = slides[currentSlide].image;
            slideText.textContent = slides[currentSlide].text;
        }
        else {
            clearInterval(slideInterval);
            nextBtn.classList.remove("hidden"); // Show "next" button
        }
    }, 3000); // Change slides every 3 secs

    nextBtn.addEventListener("click", () => {
        //Move to next stage
        console.log("Go to Stage 7");
    });
}

function showSlide(index) {
    slideImage.classList.remove("fade"); // reset animation
    void slideImage.offsetWidth;         // force reflow
    slideImage.classList.add("fade");

    slideImage.src = slides[index].image;
    slideText.textContent = slides[index].text;
}
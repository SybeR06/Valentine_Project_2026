// JavaScript source code
// Date created: 9/1/2026
// Created by: Marc Bryan Forbes

const startBtn = document.getElementById("startBtn");
const main = document.getElementById("main");
const heart = document.getElementById("heart");
const heartWrapper = document.getElementById("heartWrapper");
const popSound = document.getElementById("popSound");
const bgm = document.getElementById("bgMusic");

startBtn.addEventListener("click", () => {
    startBtn.style.display = "none"; //hide button
    main.classList.remove("hidden"); //show heart
})

// Heart pop
heart.addEventListener("click", () => {
    heart.style.pointerEvents = "none";

    // Force browser to sync layout BEFORE starting effects
    heart.offsetWidth;

    // Start ALL effects together
    heart.classList.add("pop");

    popSound.currentTime = 0;
    popSound.play();

    createConfetti();

    setTimeout(() => {
        heartWrapper.style.display = "none";
        document.getElementById("bottomText").style.display = "none";


        openSlideshow();
    }, 600);
});

function createConfetti() {
    const rect = heart.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;


    for (let i = 0; i < 15; i++) {
        const miniHeart = document.createElement("div");
        miniHeart.classList.add("mini-heart");

        const x = (Math.random() - 0.5) * 500 + "px";
        const y = (Math.random() - 0.5) * 500 + "px";

        miniHeart.style.setProperty("--x", x);
        miniHeart.style.setProperty("--y", y);

        miniHeart.style.left = centerX + "px";
        miniHeart.style.top = centerY + "px";

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
    {
        image: "Images/p2.jpg",
        text: "Date<br>One of my favourite days of the year <3"
    },
    { image: "Images/p3.jpg", text: "Test3" },
    { image: "Images/p4.jpg", text: "Test4" }
];

let currentSlide = 0;

function openSlideshow() {
    main.style.display = "none" // hide heart

    const slideshow = document.getElementById("slideshow");

    const nextBtn = document.getElementById("nextBtn");

    slideshow.classList.remove("hidden");
    textBox.style.display = "block";

    currentSlide = 0;
    showSlide(currentSlide);

    //Slide interval
    const slideInterval = setInterval(() => {
        currentSlide++;
        if (currentSlide < slides.length) {
            showSlide(currentSlide);
        }
        else {
            clearInterval(slideInterval);
            nextBtn.classList.remove("hidden"); // Show "next" button
        }
    }, 5000); // Change slides every 5 secs

    nextBtn.addEventListener("click", () => {
        //Move to next stage
        console.log("Go to Stage 7");
    });

    //Background music
    bgMusic.volume = 0.4;
    bgMusic.currentTime = 0;
    bgMusic.play();

    nextBtn.onclick = () => {
        bgMusic.pause();
        bgMusic.currentTime = 0;
        console.log("Go to Stage 7");
    };
}

function showSlide(index) {
    const slideImage = document.getElementById("slideImage");
    const slideText = document.getElementById("slideText");

    // Reset animation
    slideImage.style.animation = "none";
    slideImage.offsetHeight; // force reflow

    // Update content
    slideImage.src = slides[index].image;
    slideText.textContent = slides[index].text;
    slideText.innerHTML = slides[index].text;

    // Restart fade
    slideImage.style.animation = "";
    slideImage.classList.add("fade");
}
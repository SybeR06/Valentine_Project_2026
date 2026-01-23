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
    { image: "Images/VD Project/22_6_9.jpg", text: "9 June 2022<br>InsertText" },
    { image: "Images/VD Project/23_6_18.jpeg", text: "18 June 2023<br>InsertText" },
    { image: "Images/VD Project/23_6_19.jpg", text: "19 June 2023<br>InsertText" },
    { image: "Images/VD Project/23_7_10.jpg", text: "10 July 2023<br>InsertText" },
    { image: "Images/VD Project/23_8_29.jpg", text: "29 August 2023<br>InsertText" },
    { image: "Images/VD Project/23_9_1.jpg", text: "1 September 2023<br>InsertText" },
    { image: "Images/VD Project/23_11_12.jpg", text: "12 November 2023<br>InsertText" },
    { image: "Images/VD Project/23_11_18.jpg", text: "18 November 2023<br>InsertText" },
    { image: "Images/VD Project/23_12_30.jpg", text: "30 December 2023<br>InsertText" },
    { image: "Images/VD Project/24_1_24.jpg", text: "24 January 2024<br>InsertText" },
    { image: "Images/VD Project/24_3_14.jpg", text: "14 March 2024<br>InsertText" },
    { image: "Images/VD Project/24_3_17.jpg", text: "17 March 2024<br>InsertText" },
    { image: "Images/VD Project/24_6_21.jpg", text: "21 June 2024<br>InsertText" },
    { image: "Images/VD Project/24_6_21-2.jpg", text: "21 June 2024<br>InsertText" },
    { image: "Images/VD Project/24_7_2.jpg", text: "2 July 2024<br>InsertText" },
    { image: "Images/VD Project/24_8_24.jpg", text: "24 August 2024<br>InsertText" },
    { image: "Images/VD Project/24_10_23.jpg", text: "23 October 2024<br>InsertText" },
    { image: "Images/VD Project/24_12_13.jpg", text: "13 December 2024<br>InsertText" },
    { image: "Images/VD Project/25_1_4.jpg", text: "4 January 2025<br>InsertText" },
    { image: "Images/VD Project/25_2_1.jpg", text: "1 February 2025<br>InsertText" },
    { image: "Images/VD Project/25_2_24.jpg", text: "24 February 2025<br>InsertText" },
    { image: "Images/VD Project/25_3_4.jpg", text: "4 March 2025<br>InsertText" },
    { image: "Images/VD Project/25_5_17.jpg", text: "17 May 2025<br>InsertText" },
    { image: "Images/VD Project/25_6_10.jpg", text: "10 June 2025<br>InsertText" },
    { image: "Images/VD Project/25_7_12.jpg", text: "12 July 2025<br>InsertText" },
    { image: "Images/VD Project/25_9_16.jpg", text: "16 September 2025<br>InsertText" },
    { image: "Images/Future.jpg", text: "Manifesting this future with you.??"}

];

let currentSlide = 0;

function openSlideshow() {
    main.style.display = "none" // hide heart

    const slideshow = document.getElementById("slideshow");
    const textBox = document.getElementById("textBox");

    const nextBtn = document.getElementById("nextBtn");
    const replayBtn = document.getElementById("replayBtn");

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
            replayBtn.classList.remove("hidden");// Show replay button
            nextBtn.classList.remove("hidden"); // Show "next" button
        }
    }, 5000); // Change slides every 5 secs

    //Background music
    bgMusic.volume = 0.4;
    bgMusic.currentTime = 0;
    bgMusic.play();

    nextBtn.onclick = () => {
        bgMusic.pause();
        bgMusic.currentTime = 0;
        console.log("Go to Stage 7");
    };

    replayBtn.onclick = () => {
        currentSlide = 0;
        showSlide(currentSlide);

        // Hide buttons again
        nextBtn.classList.add("hidden");
        replayBtn.classList.add("hidden");

        // Restart background music
        bgm.currentTime = 0;
        bgm.play();

        // Restart slideshow interval
        slideInterval = setInterval(() => {
            currentSlide++;
            if (currentSlide < slides.length) {
                showSlide(currentSlide);
            } else {
                clearInterval(slideInterval);
                nextBtn.classList.remove("hidden");
                replayBtn.classList.remove("hidden");
            }
        }, 5000);
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

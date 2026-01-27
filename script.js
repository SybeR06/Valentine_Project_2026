// JavaScript source code
// Date created: 9/1/2026
// Created by: Marc Bryan Forbes

const startBtn = document.getElementById("startBtn");
const bgmIntro = document.getElementById("bgmIntro");
const main = document.getElementById("main");
const heart = document.getElementById("heart");
const heartWrapper = document.getElementById("heartWrapper");
const popSound = document.getElementById("popSound");
const bgm = document.getElementById("bgMusic");
const slideImage = document.getElementById("slideImage");
const slideText = document.getElementById("slideText");
const replayBtn = document.getElementById("replayBtn");

startBtn.onclick = () => {
    startBtn.style.display = "none";
    main.classList.remove("hidden");

    bgmIntro.volume = 0.4;
    bgmIntro.play().catch(() => {
        console.log("Autoplay blocked until user interaction");
    });
}

// Heart pop
heart.addEventListener("click", () => {
    bgmIntro.pause();
    bgmIntro.currentTime = 0;

    heart.style.pointerEvents = "none";
    heart.classList.add("pop");

    popSound.currentTime = 0;
    popSound.play();

    createConfetti();

    setTimeout(() => {
        main.style.display = "none";
        openSlideshow();
    }, 600);
});

function createConfetti() {
    const rect = heart.getBoundingClientRect();

    for (let i = 0; i < 15; i++) {
        const h = document.createElement("div");
        h.className = "mini-heart";
        h.style.left = rect.left + rect.width / 2 + "px";
        h.style.top = rect.top + rect.height / 2 + "px";
        h.style.setProperty("--x", `${(Math.random() - 0.5) * 500}px`);
        h.style.setProperty("--y", `${(Math.random() - 0.5) * 500}px`);
        document.body.appendChild(h);
        setTimeout(() => h.remove(), 800);
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
    {
        image: "Images/VD Project/22_6_9.jpg", text: "<9 June 2022> <br> Nobody could predict" },
    {
        image: "Images/VD Project/23_6_18.jpeg", text: "<18 June 2023> <br> That one day," },
    {
        image: "Images/VD Project/23_6_19.jpg", text: "<19 June 2023> <br> One night," },
    {
        image: "Images/VD Project/23_7_10.jpg", text: "<10 July 2023> <br> was all it took" },
    {
        image: "Images/VD Project/23_8_29.jpg", text: "<29 August 2023> <br> for you to be the most precious," },
    {
        image: "Images/VD Project/23_9_1.jpg", text: "<1 September 2023> <br> most beautiful," },
    {
        image: "Images/VD Project/23_11_12.jpg", text: "<12 November 2023> <br> and most important person to me." },
    {
        image: "Images/VD Project/23_11_18.jpg", text: "<18 November 2023> <br> I didn’t fall all at once," },
    {
        image: "Images/VD Project/23_12_30.jpg", text: "<30 December 2023> <br> it happened in pieces." },
    {
        image: "Images/VD Project/24_1_24.jpg", text: "<24 January 2024> <br> The way you listen," },
    {
        image: "Images/VD Project/24_3_14.jpg", text: "<14 March 2024> <br> the way you care," },
    {
        image: "Images/VD Project/24_3_17.jpg", text: "<17 March 2024> <br> the way you stayed." },
    {
        image: "Images/VD Project/24_6_21.jpg", text: "<21 June 2024> <br> I wasn't perfect in the beginning," },
    {
        image: "Images/VD Project/24_6_21-2.jpg", text: "<21 June 2024> <br> and i'm not perfect now."},
    {
        image: "Images/VD Project/24_7_2.jpg", text: "<2 July 2024> <br> As long as you dont give up,"},
    {
        image: "Images/VD Project/24_8_24.jpg", text: "<24 August 2024> <br> I will always be there."},
    {
        image: "Images/VD Project/24_10_23.jpg", text: "<23 October 2024> <br> You taught my heart" },
    {
        image: "Images/VD Project/24_12_13.jpg", text: "<13 December 2024> <br> A language it never knew," },
    {
        image: "Images/VD Project/25_1_4.jpg", text: "<4 January 2025> <br> Nights with anxiety," },
    {
        image: "Images/VD Project/25_2_1.jpg", text: "<1 February 2025> <br> turned into nights with laughter." },
    {
        image: "Images/VD Project/25_2_24.jpg", text: "<24 February 2025> <br> All because you made me believe" },
    {
        image: "Images/VD Project/25_3_4.jpg", text: "<4 March 2025> <br> that anything was possible with you." },
    {
        image: "Images/VD Project/25_5_17.jpg", text: "<17 May 2025> <br> For the moments when you're scared,"},
    {
        image: "Images/VD Project/25_6_10.jpg", text: "<10 June 2025> <br> For the amount of times you doubt,"},
    {
        image: "Images/VD Project/25_7_12.jpg", text: "<12 July 2025> <br> as long as I breath,"},
    {
        image: "Images/VD Project/25_9_16.jpg", text: "<16 September 2025> <br> I will forever love you."},
    {
        image: "Images/Future.jpg", text: "Manifesting this future with you.<3"
    }

];

let index = 0;
let interval;

function openSlideshow() {
    document.getElementById("slideshow").classList.remove("hidden");
    bgm.volume = 0.4;
    bgm.play();
    showSlide(0);

    interval = setInterval(() => {
        index++;
        if (index < slides.length) showSlide(index);
        else {
            clearInterval(interval);
            document.getElementById("replayBtn").classList.remove("hidden");
        }
    }, 5000);
}

function showSlide(index) {
    slideImage.classList.remove("hidden");
    slideImage.classList.remove("fade");

    void slideImage.offsetWidth;
    slideImage.src = slides[index].image;
    slideText.innerHTML = slides[index].text;

    slideImage.classList.add("fade");
}

replayBtn.addEventListener("click", () => location.reload());
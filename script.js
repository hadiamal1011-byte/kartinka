const yes = document.getElementById("yes");
const no = document.getElementById("no");

let scale = 1;

// Убегающая кнопка
function moveNoButton() {

    const padding = 20;

    const maxX = window.innerWidth - no.offsetWidth - padding;
    const maxY = window.innerHeight - no.offsetHeight - padding;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    no.style.position = "fixed";
    no.style.left = randomX + "px";
    no.style.top = randomY + "px";

    // Увеличиваем кнопку "Ия"
    scale += 0.25;

    if (scale > 3) {
        scale = 3;
    }

    yes.style.transform = `scale(${scale})`;
}

// На iPhone работает при наведении и касании
no.addEventListener("mouseenter", moveNoButton);

no.addEventListener("touchstart", function (e) {
    e.preventDefault();
    moveNoButton();
}, { passive: false });

no.addEventListener("click", function (e) {
    e.preventDefault();
    moveNoButton();
});

// Нажатие "Ия"
yes.addEventListener("click", function () {

    document.body.innerHTML = `
        <div class="finish">

            <h1>Рахмет жаным ❤️</h1>

            <h2>Люблю тебя 💖</h2>

            <img src="images/love.png" class="love-image" alt="Love">

        </div>
    `;

    // Запускаем сердечки
    setInterval(createHeart, 250);
});

// Создание сердечек
function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    const hearts = ["❤️","💖","💕","💗","💓"];

    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (20 + Math.random() * 30) + "px";

    heart.style.animationDuration = (3 + Math.random() * 2) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Если повернули телефон
window.addEventListener("resize", () => {
    no.style.left = "";
    no.style.top = "";
});
document.getElementById("gift").addEventListener("click", openGift);
document.getElementById("gift").addEventListener("touchstart", openGift);

function openGift() {
    document.getElementById("gift").style.display = "none"; // Hide gift box
    document.getElementById("message").style.display = "block"; // Show message
    document.getElementById("song").play(); // Play birthday song
    startConfetti(); // Start confetti animation
}

// Confetti Effect
const confettiCanvas = document.getElementById("confetti");
const ctx = confettiCanvas.getContext("2d");
let confetti = [];

function startConfetti() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;

    for (let i = 0; i < 100; i++) {
        confetti.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            r: Math.random() * 5 + 2,
            d: Math.random() * 5 + 2,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            tilt: Math.random() * 10 - 5
        });
    }
    animateConfetti();
}

function animateConfetti() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    for (let i = 0; i < confetti.length; i++) {
        let c = confetti[i];
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, false);
        ctx.fillStyle = c.color;
        ctx.fill();
        c.y += c.d;
        c.x += Math.sin(c.tilt);
        if (c.y > confettiCanvas.height) {
            c.y = -10;
            c.x = Math.random() * window.innerWidth;
        }
    }
    requestAnimationFrame(animateConfetti);
}


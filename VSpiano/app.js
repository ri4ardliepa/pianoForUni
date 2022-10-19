// select all the button divs

const btns = document.querySelectorAll(".btn")

btns.forEach(btn => {
    btn.addEventListener("click", () => playSound(btn));
});

function playSound(btn) {
    const sounds = document.getElementById(btn.dataset.key);
    sounds.currentTime = 0;
    sound.play();
}
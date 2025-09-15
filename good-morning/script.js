// Floating Ducks
const container = document.getElementById("floating-ducks");

function createDuck() {
  const duck = document.createElement("div");
  duck.classList.add("floating-duck");
  duck.style.left = Math.random() * 100 + "vw";

  // faster animation: 5–8s instead of 8–13s
  duck.style.animationDuration = (5 + Math.random() * 3) + "s";

  duck.style.width = duck.style.height = (40 + Math.random() * 40) + "px";
  container.appendChild(duck);

  setTimeout(() => { duck.remove(); }, 10000);
}

setInterval(createDuck, 800); // also spawns a bit faster

// Quack sound + delayed navigation
const quackBtn = document.getElementById("quackBtn");
const duckSound = document.getElementById("duckSound");

if (quackBtn && duckSound) {
  quackBtn.addEventListener("click", (e) => {
    e.preventDefault(); // stop instant navigation

    duckSound.currentTime = 0;
    duckSound.play();

    // wait until quack finishes then redirect
    duckSound.onended = () => {
      window.location.href = "message.html";
    };
  });
}

const hero = document.querySelector(".hero-section");

function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.position = "absolute";
  heart.style.left = Math.random() * 100 + "%";
  heart.style.top = "100%";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  heart.style.animation = "rise 5s linear forwards";

  hero.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

const heartInterval = setInterval(createHeart, 100);

// Stop hearts after 2 seconds
setTimeout(() => {
  clearInterval(heartInterval);
}, 2000);

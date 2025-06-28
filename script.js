let music;

document.getElementById("giftBox").onclick = () => {
  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("soniyoooScene").classList.remove("hidden");
  createHearts();
  startFloatingHearts();

  // Start music only once
  if (!music) {
    music = new Audio("Assets/music.mp3");
    music.loop = true;
    music.play();
  }
};

function createHearts() {
  const hearts = ["❤️", "❤️", "❤️", "❤️", "❤️"];
  const container = document.getElementById("heartsContainer");
  container.innerHTML = "";
  hearts.forEach((heart) => {
    const span = document.createElement("span");
    span.innerText = heart;
    span.onclick = () => handleHeartClick(span);
    container.appendChild(span);
  });
}

let heartsClicked = 0;
function handleHeartClick(span) {
  span.remove();
  heartsClicked++;
  if (heartsClicked === 5) {
    setTimeout(() => {
      document.getElementById("soniyoooScene").classList.add("hidden");
      document.getElementById("waitScene").classList.remove("hidden");
    }, 300);
  }
}

function goToBirthdayScene() {
  document.getElementById("waitScene").classList.add("hidden");
  document.getElementById("birthdayScene").classList.remove("hidden");
}

function giftResponse(wantsGift) {
  document.getElementById("birthdayScene").classList.add("hidden");
  document.getElementById("giftResponse").classList.remove("hidden");

  const text = document.getElementById("responseText");
  const clickBtn = document.getElementById("clickHereBtn");
  const sweetImg = document.getElementById("sweetImg");

  if (!wantsGift) {
    text.innerText = "how sweet 🥰... issi baat pe ye lo 1 chummii 😘";
    sweetImg.classList.remove("hidden");
    clickBtn.classList.add("hidden");
  } else {
    text.innerText = "pehle party do 😎";
    sweetImg.classList.add("hidden");
    setTimeout(() => {
      text.innerText = "Acha chlo de hi deti hu apne babu ko gift ☺️";
      clickBtn.classList.remove("hidden");
    }, 2000);
  }
}

function showGift() {
  window.open("gift.html", "_blank");
}

// Floating hearts generator
function startFloatingHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 10 + 30 + "px"; // Larger size
    heart.style.bottom = "0px"; // Start from bottom
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 500);
}

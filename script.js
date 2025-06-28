// Floating hearts logic
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("floating-heart");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "0px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}, 500);

// Gift box click
document.getElementById("giftBox").onclick = () => {
  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("soniyoooScene").classList.remove("hidden");
  createHearts();
  document.getElementById("bgMusic").play(); // autoplay music
};

// Create clickable hearts
function createHearts() {
  const hearts = ["❤️", "❤️", "❤️", "❤️", "❤️"];
  const container = document.getElementById("heartsContainer");
  container.innerHTML = "";
  hearts.forEach((heart) => {
    const span = document.createElement("span");
    span.innerText = heart;
    span.style.fontSize = "32px";
    span.style.margin = "10px";
    span.style.cursor = "pointer";
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
      document.getElementById("birthdayScene").classList.remove("hidden");
      setTimeout(() => {
        document.getElementById("birthdayScene").classList.add("hidden");
        document.getElementById("giftQuestion").classList.remove("hidden");
      }, 4000);
    }, 500);
  }
}

// Gift decision
function giftResponse(wantsGift) {
  document.getElementById("giftQuestion").classList.add("hidden");
  document.getElementById("giftResponse").classList.remove("hidden");
  const text = document.getElementById("responseText");
  const clickBtn = document.getElementById("clickHereBtn");

  if (!wantsGift) {
    text.innerText = "How sweet 🥰... issi baat pe ye lo 1 chummii 😘";
  } else {
    text.innerText = "Pehle party do 😎";
    setTimeout(() => {
      text.innerText = "Acha chlo de hi deti hu apne babu ko gift 😉";
      clickBtn.classList.remove("hidden");
    }, 2000);
  }
}

function showGift() {
  document.getElementById("giftResponse").classList.add("hidden");
  document.getElementById("finalScene").classList.remove("hidden");
}

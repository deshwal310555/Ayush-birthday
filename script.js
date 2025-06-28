// 🎁 On gift box click
document.getElementById("giftBox").onclick = () => {
  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("soniyoooScene").classList.remove("hidden");
  createHearts();
};

// ❤️ Create 5 clickable hearts
function createHearts() {
  const hearts = ["❤️", "❤️", "❤️", "❤️", "❤️"];
  const container = document.getElementById("heartsContainer");
  container.innerHTML = ""; // Clear if recreated

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

// 👉 Next button after WAIT scene
function goToBirthdayScene() {
  document.getElementById("waitScene").classList.add("hidden");
  document.getElementById("birthdayScene").classList.remove("hidden");
}

// 🎁 Gift question logic
function giftResponse(wantsGift) {
  // Hide gift question area
  document.getElementById("giftQuestion").style.display = "none";
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

// 🎉 Final gift reveal
function showGift() {
  document.getElementById("giftResponse").classList.add("hidden");
  document.getElementById("finalScene").classList.remove("hidden");
}

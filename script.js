document.getElementById("giftBox").onclick = () => {
  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("soniyoooScene").classList.remove("hidden");
  createHearts();
};

function createHearts() {
  const hearts = ["❤️","❤️","❤️","❤️","❤️"];
  const container = document.getElementById("heartsContainer");
  container.innerHTML = '';
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
      document.getElementById("birthdayScene").classList.remove("hidden");
      setTimeout(() => {
        document.getElementById("birthdayScene").classList.add("hidden");
        document.getElementById("giftQuestion").classList.remove("hidden");
      }, 4000);
    }, 1000);
  }
}

function giftResponse(wantsGift) {
  document.getElementById("giftQuestion").classList.add("hidden");
  document.getElementById("giftResponse").classList.remove("hidden");
  const text = document.getElementById("responseText");
  const clickBtn = document.getElementById("clickHereBtn");

  if (!wantsGift) {
    text.innerText = "how sweet 🥰... issi baat pe ye lo 1 chummii 😘";
  } else {
    text.innerText = "pehle party do 😎";
    setTimeout(() => {
      text.innerText = "Acha chlo de de hi deti hu 😉";
      clickBtn.classList.remove("hidden");
    }, 2000);
  }
}

function showGift() {
  document.getElementById("giftResponse").classList.add("hidden");
  document.getElementById("finalScene").classList.remove("hidden");
}
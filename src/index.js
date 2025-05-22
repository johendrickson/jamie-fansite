let pusheenCount = 0;

const addBtn = document.getElementById("add-btn");
const counter = document.getElementById("counter");
const container = document.getElementById("pusheen-container");

addBtn.addEventListener("click", () => {
  const img = document.createElement("img");
  img.src = "assets/pusheen_wink.png";
  img.alt = "Cute Pusheen";
  img.classList.add("tiny-pusheen"); // 👈 add a class
  container.appendChild(img);

  pusheenCount += 1;
  document.getElementById("count-number").textContent = pusheenCount;
});

document.getElementById("theme1-btn").addEventListener("click", () => {
  document.body.classList.remove("theme2");
  document.body.classList.add("theme1");
});

document.getElementById("theme2-btn").addEventListener("click", () => {
  document.body.classList.remove("theme1");
  document.body.classList.add("theme2");
});

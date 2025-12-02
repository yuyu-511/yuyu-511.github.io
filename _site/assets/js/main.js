/* ================================================
   Christmas — main.js（実質ロック解除だけ）
================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const lock = document.getElementById("lock-screen");
  const home = document.getElementById("home-screen");

  if (!lock || !home) return;

  const unlock = () => {
    lock.classList.add("fade-out");
    setTimeout(() => {
      lock.style.display = "none";
      home.classList.remove("fade-hidden");
      home.classList.add("fade-in");
    }, 600);
  };

  lock.addEventListener("click", unlock);
  lock.addEventListener("touchstart", unlock);
});

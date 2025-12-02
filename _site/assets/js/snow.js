/* ================================================
   ❄ Snow Animation — light but pretty
================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const snowContainer = document.createElement("div");
  snowContainer.className = "snow-container";
  document.body.appendChild(snowContainer);

  const createSnow = () => {
    const snow = document.createElement("div");
    snow.className = "snow";

    const size = Math.random() * 4 + 2;
    snow.style.width = `${size}px`;
    snow.style.height = `${size}px`;
    snow.style.left = `${Math.random() * window.innerWidth}px`;
    snow.style.animationDuration = `${Math.random() * 5 + 4}s`;

    snowContainer.appendChild(snow);

    setTimeout(() => snow.remove(), 9000);
  };

  setInterval(createSnow, 80);
});

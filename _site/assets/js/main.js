/* ================================================
   Christmas — main.js
   ロック画面 → ホーム画面（タップ & スワイプでスクロール）
================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const lock = document.getElementById("lock-screen");
  const home = document.getElementById("home-screen");

  if (!lock || !home) return;

  let startY = null;
  const SWIPE_THRESHOLD = 40; // 上方向に 40px 以上でスワイプとみなす

  // ホーム画面へスクロールする共通処理
  const scrollToHome = () => {
    home.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /* ===== タップでホームへ ===== */
  lock.addEventListener("click", () => {
    scrollToHome();
  });

  /* ===== スワイプアップでホームへ ===== */
  lock.addEventListener("touchstart", (e) => {
    if (e.touches.length !== 1) return;
    startY = e.touches[0].clientY;
  });

  lock.addEventListener("touchmove", (e) => {
    if (startY === null) return;

    const currentY = e.touches[0].clientY;
    const diffY = startY - currentY; // 上に動くと +

    if (diffY > SWIPE_THRESHOLD) {
      scrollToHome();
      startY = null;
    }
  });

  lock.addEventListener("touchend", () => {
    startY = null;
  });

  lock.addEventListener("touchcancel", () => {
    startY = null;
  });
});

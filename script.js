document.getElementById("tiktok-btn").addEventListener("click", function () {
  window.open("https://www.tiktok.com/@abdulahi.olamide", "_blank");
});

document.getElementById("facebook-btn").addEventListener("click", function () {
  window.open("https://www.facebook.com/+2349151413210", "_blank");
});

document.getElementById("whatsapp-btn").addEventListener("click", function () {
  window.open("https://wa.me/2348053992291", "_blank");
});

// Select all video elements in the portfolio grid
const videos = document.querySelectorAll(".portfolio-grid video");

// Add event listeners to play/pause on hover
videos.forEach((video) => {
  video.addEventListener("mouseenter", () => {
    video.play();
  });
  video.addEventListener("mouseleave", () => {
    video.pause();
  });
});

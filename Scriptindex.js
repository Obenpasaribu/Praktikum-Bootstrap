let currentSlide = 0;

function goToSlide(slideIndex) {
  const slider = document.getElementById("slider");
  const sections = slider.querySelectorAll("section");

  sections.forEach((sec) => sec.classList.remove("active"));

  currentSlide = slideIndex;
  slider.style.transform = `translateX(-${slideIndex * 100}vw)`;

  sections[slideIndex].classList.add("active");
}

// Typing effect
const typingText = "Mahasiswa Informatika | Web Developer";
let i = 0;

function typeEffect() {
  if (i < typingText.length) {
    document.getElementById("typing").innerHTML += typingText.charAt(i);
    i++;
    setTimeout(typeEffect, 80);
  }
}

window.onload = function () {
  typeEffect();
  goToSlide(0);
};

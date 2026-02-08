const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
document.body.classList.add(isMobile ? "mobile" : "desktop");


const btn = document.getElementById("langBtn");
let currentLang = "en";

btn.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "es" : "en";
  btn.textContent = currentLang === "en" ? "ES" : "EN";
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${currentLang}`);
  });
});
const track = document.getElementById("carousel");
const slides = track.children;
const prev = document.querySelector(".car-btn.prev");
const next = document.querySelector(".car-btn.next");

let index = 0;
const slideWidth = () => slides[0].offsetWidth + 15;

function updateCarousel(){
  track.style.transform = `translateX(-${index * slideWidth()}px)`;
}

next.onclick = () => {
  index = (index + 1) % slides.length;
  updateCarousel();
};

prev.onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel();
};

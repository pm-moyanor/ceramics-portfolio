import { products } from "./products.js";

const gallery = document.querySelector("#app-section_gallery");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close");
const section = document.querySelector(".app-section_text");
const form = document.getElementById("contact-form");



products.forEach(({ image, title, description }) => {
  const card = document.createElement("div");
const img = document.createElement("img");
const h2 = document.createElement("h2");
  card.classList.add("card");
  img.classList.add("image");
  h2.classList.add("title");

  img.src = image;
  img.alt = title;
  h2.innerText = title;

  card.appendChild(img);
  card.appendChild(h2);

  gallery.appendChild(card);
  addModal(img, description);
});

function addModal(image, text) {
  image.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = image.src;
    modalTitle.innerText = image.alt;
    modalText.innerText = text;
  });
}

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", ({ target }) => {
  if (target === modal) {
    modal.style.display = "none";
  }
});

function checkAnimation() {
  const sectionPosition = section.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionPosition < screenHeight) {
    section.classList.add("animation");
    window.removeEventListener("scroll", checkAnimation);
  } else {
    section.classList.remove("animation");
  }
}

checkAnimation();
window.addEventListener("scroll", checkAnimation);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  fetchData(name, email, message);
});

async function fetchData(name, email, message) {
  try {
    const storedData = localStorage.getItem("contactData");
    const previousData = storedData ? JSON.parse(storedData) : {};

    const newData = {
      ...previousData,
      [Date.now()]: {
        name,
        email,
        message,
      },
    };

    localStorage.setItem("contactData", JSON.stringify(newData));

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  } catch (error) {
    console.error(error);
  }
}
const storedData = localStorage.getItem("contactData");
if (storedData) {
  const parsedData = JSON.parse(storedData);
  console.log(parsedData);
}

const toTopButton = document.querySelector(".to-top-btn");


function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
}
window.onscroll = () => scrollFunction();
scrollFunction();

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
toTopButton.addEventListener("click", topFunction);
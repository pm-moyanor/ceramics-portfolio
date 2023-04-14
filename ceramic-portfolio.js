const products = [
  {
    image: "assets/toa-heftiba-n5jkZK-4rhs-unsplash.jpg",
    title: "Josua Vase",
    description:
      "A beautifully handcrafted vase made from premium quality clay. Its elegant design is perfect for adding a touch of sophistication to your home decor.",
  },
  {
    image: "assets/brooke-lark-uarQNKJUdJk-unsplash.jpg",
    title: "Larkin Plates",
    description:
      "These plates are made from high-quality ceramic and feature a minimalist design that complements any table setting. They are microwave and dishwasher safe for easy use and cleaning.",
  },
  {
    image: "assets/tom-crew-7HuTGlUfQSo-unsplash.jpg",
    title: "Fortessa Cloud No 2",
    description:
      "The Fortessa Cloud No 2 collection features a sleek and modern design that is perfect for any contemporary kitchen. Made from high-quality porcelain, these dishes are both durable and beautiful.",
  },
  {
    image: "assets/chloe-bolton-R0qthXq3jec-unsplash.jpg",
    title: "Astoria Collection",
    description:
      "The Astoria Collection features a set of beautifully designed glasses that are perfect for serving your favorite beverages. Made from high-quality glass, these glasses are both elegant and durable.",
  },
  {
    image: "assets/vladimir-gladkov-NPPIq1XFdck-unsplash.jpg",
    title: "Lava Beach Stoneware",
    description:
      "The Lava Beach Stoneware collection features a set of rustic and earthy dishes that are perfect for adding a touch of natural beauty to your dining table. Each piece is unique and handcrafted with care.",
  },
  {
    image: "assets/tom-crew-YA2E3d7a9Wo-unsplash (1).jpg",
    title: "Sand Canyon Bowls",
    description:
      "These beautiful bowls are made from high-quality porcelain and feature a stunning sand canyon design that is sure to impress. They are microwave and dishwasher safe for easy use and cleaning.",
  },
  {
    image: "assets/toa-heftiba-SrvMNmQ_T-Q-unsplash.jpg",
    title: "Lennon Collection",
    description:
      "The Lennon Collection features a set of beautifully designed plates that are perfect for serving your favorite meals. Made from high-quality ceramic, these plates are both elegant and durable.",
  },
  {
    image: "assets/tom-crew-U9gXnSGSB3w-unsplash.jpg",
    title: "Mendocino Dinnerware",
    description:
      "The Mendocino Dinnerware collection features a set of stunning plates and bowls that are perfect for any occasion. Made from high-quality stoneware, these dishes are both beautiful and durable.",
  },
];

const gallery = document.querySelector("#app-section_gallery");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close");

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
  const section = document.querySelector("#app-section_text");
  const sectionPosition = section.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;
  
  if (sectionPosition < screenHeight) {
    section.classList.add("anim");
    window.removeEventListener("scroll", checkAnimation);
  } else {
    section.classList.remove("anim");
  }
}

checkAnimation();
window.addEventListener("scroll", checkAnimation);


const form = document.getElementById("contact-form");

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

let toTopButton = document.querySelector (".to-top-btn");

window.onscroll = () => scrollFunction();

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
}

scrollFunction();

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

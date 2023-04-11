const products = [
  {
    image: "assets/toa-heftiba-n5jkZK-4rhs-unsplash.jpg",
    title: "Josua Vase",
  },
  {
    image: "assets/brooke-lark-uarQNKJUdJk-unsplash.jpg",
    title: "Larkin Plates",
  },
  {
    image: "assets/tom-crew-7HuTGlUfQSo-unsplash.jpg",
    title: "Fortessa Cloud No 2",
  },
  {
    image: "assets/chloe-bolton-R0qthXq3jec-unsplash.jpg",
    title: "Astoria Collection",
  },
  {
    image: " assets/vladimir-gladkov-NPPIq1XFdck-unsplash.jpg",
    title: "Lava Beach Stoneware",
  },
  {
    image: "assets/tom-crew-YA2E3d7a9Wo-unsplash (1).jpg",
    title: "Sand Canyon Bowls",
  },

  {
    image: "assets/toa-heftiba-SrvMNmQ_T-Q-unsplash.jpg",
    title: "Lennon Collection",
  },
  {
    image: "assets/tom-crew-U9gXnSGSB3w-unsplash.jpg",
    title: "Mendocino Dinnerware",
  },
];

const gallery = document.querySelector(".app-section_gallery");

products.forEach((product) => {
  const card = document.createElement("div");
  const img = document.createElement("img");
  const h2 = document.createElement("h2");
  card.classList.add("card");
  img.classList.add("image");
  h2.classList.add("title");
  console.log(img);
  img.src = product.image;
  h2.innerText = product.title;

  card.appendChild(img);
  card.appendChild(h2);

  gallery.appendChild(card);
});

// function fillArt(artArray) {
//   let index = 0;
//   let img

//   artArray.forEach((piece) => {
//     console.log(piece.title,piece.image)
//     img = piece.image
//     const parentDiv = document.createElement('div');
//     const h2 = document.createElement('h2');
//     h2.textContent = piece.title;
//     h2.classList.add('title');
//     parentDiv.appendChild(img.cloneNode());
//     parentDiv.appendChild(h2);
//     parentDiv.classList.add('card');
//     img.parentNode.replaceChild(parentDiv, img);
//   });
// }

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
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

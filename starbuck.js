const images = [
  "Belgium Chocolate Latte.png",
  "Black_Palm_Jaggery_Latte.png",
  "Caramel_Macchiato.png",
  "Chocolate_Cappuccino.png",
  "Doppio_Espresso.png",
  "Hazelnut_Oat_Cortado.png",
  "Iced_Belgium_Chocolate_Latte.png",
  "Ices_Caffe_latte.png",
  "Pecan_Iced_Shaken_Espresso.png",
  "Picco_Cappuccino.png",
];

let currentIndex = 4;
const carousel = document.getElementById("carousel");

function renderImages() {
  carousel.innerHTML = "";

  // Circular index logic
  const visibleIndices = [
    (currentIndex - 2 + images.length) % images.length, // two left
    (currentIndex - 1 + images.length) % images.length, // one left
    currentIndex, // center
    (currentIndex + 1) % images.length, // one right
    (currentIndex + 2) % images.length, // two right
  ];

  visibleIndices.forEach((i, idx) => {
    const img = document.createElement("img");

    img.src = images[i];
    img.className = "pankaj-image";

    if (idx === 2) {
      img.classList.add("pankaj-center");
    }

    img.addEventListener("click", () => {
      currentIndex = i;
      renderImages();
    });

    carousel.appendChild(img);
  });
}

renderImages();

// SECOND SLIDE
// const foodImages = [
//   'starbuckFood/Avocado Salsa Sandwich.webp',
//   'starbuckFood/Basil Tomata Mozzarella Cheese Sandwich.webp',
//   'starbuckFood/Chicken Salad Sandwich.webp',
//   'starbuckFood/chilli cheese toast.webp',
//   'starbuckFood/Kosha mangsho wrap.webp',
//   'starbuckFood/Mediterranean_Focaccia_Sandwich.webp',
//   'starbuckFood/Murgh kathi wrap.webp',
//   'starbuckFood/Mushroom pesto Sourdough sandwich.webp',
//   'starbuckFood/Paneer tikka snadwich.webp',
//   'starbuckFood/Scrambled egg & chilly Oil on Grilled Sourdough.webp',
//   'starbuckFood/Smoked Chicken & Salami Sandwhich.webp',
//   'starbuckFood/Spinach& corn sandwich.webp',
//   'starbuckFood/Crispy Chicken Focaccia Sandwich.webp',
//   'starbuckFood/Chicken Tikka Sandwich.webp',
//   'starbuckFood/Harissa Chicken sourdough sandwich.webp',
//   'starbuckFood/Tandoori Paneer Sourdough sandwich.webp'
// ]

// const container = document.getElementById('right-images');

// foodImages.forEach(path => {
//   const img = document.createElement('img');
//   img.src = path; // <-- loading local image
//   img.className = 'food-image';
//   container.appendChild(img);
// });

// Get all right-side images
const figures = document.querySelectorAll(".rightImages figure");

// Get the image element on the left
const mainImage = document.getElementById("mainImage");

// Get the caption element
const mainCaption = document.getElementById("mainCaption");

// Get the info element
const mainInfo = document.getElementById("mainInfo");

// Get the about element
const mainAbout = document.getElementById("about");

// Get the price element
const mainPrice = document.getElementById("mainPrice");

// Loop through thumbnails and add click event
figures.forEach((figure) => {
  const img = figure.querySelector("img");
  const caption = figure.querySelector("figcaption");
  img.addEventListener("click", () => {
    // Set image in display
    mainImage.src = img.src;

    // Set caption in display
    mainCaption.textContent = caption.textContent;
    mainCaption.style.display = "block"; // Show the caption
    mainInfo.textContent = caption.nextElementSibling.textContent;
    mainInfo.style.display = "block";
    mainAbout.textContent =
      caption.nextElementSibling.nextElementSibling.textContent;
    mainAbout.style.display = "block";
    mainPrice.textContent =
      caption.nextElementSibling.nextElementSibling.nextElementSibling.textContent;
    mainPrice.style.display = "block";
  });
});

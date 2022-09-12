let center = document.querySelector(".center");
let dotted = document.querySelector(".content-point");
let left = document.querySelector(".left");
let right = document.querySelector(".right");

let images = [
  "https://cdn.stocksnap.io/img-thumbs/280h/businessmeeting-people_AEENLCARXY.jpg",
  "https://cdn.stocksnap.io/img-thumbs/280h/woman-working_8LHTBAZW32.jpg",
  "https://cdn.stocksnap.io/img-thumbs/280h/brick-building_CNR0WYMVJX.jpg",
  "https://cdn.stocksnap.io/img-thumbs/280h/global-map_UN4MECXXU6.jpg",
  "https://image.shutterstock.com/image-photo/business-people-shaking-hands-finishing-260nw-420967090.jpg",
];

for (i = 0; i < images.length; i++) {
  let img = document.createElement("img");
  img.className = "images";
  img.setAttribute("src", images[i]);
  center.appendChild(img);
  let point = document.createElement("span");
  point.className = "all";
  dotted.appendChild(point);
}

let Allimg = document.querySelectorAll(".images");
let imgToarr = Array.from(Allimg);
let count = imgToarr.length;

let Allpoint = document.querySelectorAll(".all");
let pointToarr = Array.from(Allpoint);
let countSlide = 0;

imgToarr[countSlide].classList.add("active");
pointToarr[countSlide].classList.add("dotted");

left.addEventListener("click", prevslides);
right.addEventListener("click", nextslides);

if (countSlide === 0) {
  left.style.opacity = 0;
}

function nextslides() {
  imgToarr.forEach((item) => {
    item.classList.remove("active");
  });
  pointToarr.forEach((point) => {
    point.classList.remove("dotted");
  });
  countSlide++;
  imgToarr[countSlide].classList.add("active");
  pointToarr[countSlide].classList.add("dotted");
  if (countSlide === count - 1) {
    right.style.opacity = 0;
  }
  if (countSlide > 0) {
    left.style.opacity = 1;
  }
}

function prevslides() {
  imgToarr.forEach((item) => {
    item.classList.remove("active");
  });
  pointToarr.forEach((point) => {
    point.classList.remove("dotted");
  });
  countSlide--;
  imgToarr[countSlide].classList.add("active");
  pointToarr[countSlide].classList.add("dotted");
  if (countSlide < count - 1) {
    right.style.opacity = 1;
  }
  if (countSlide === 0) {
    left.style.opacity = 0;
  }
}

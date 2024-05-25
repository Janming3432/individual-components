// Authorization: 'Client-ID uTZvkAsCtGpVTTU779KkPcQK0XkDIQdxILMqU23rkWk'
const val = Math.floor(Math.random() * 8) + 3;
// console.log(val);
const UNSPLASH_API_URL = "https://api.unsplash.com/photos/random?count=" + val;
const UNSPLASH_ACCESS_KEY = "uTZvkAsCtGpVTTU779KkPcQK0XkDIQdxILMqU23rkWk";
// async function fetchImagesArray(){
//     const response = await fetch(UNSPLASH_API_URL, {
//         headers: {
//             'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`
//         }
//     });
//     if(response.status===403){
//         createCaraousel(new Array(val));
//         return;
//     }
//     const images = await response.json();
//     // console.log(images);
//     createCaraousel(images);
// }
// fetchImagesArray();
const images = [
  {
    src: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
  },
  {
    src: "https://www.shutterstock.com/shutterstock/photos/1199337631/display_1500/stock-photo-red-fort-delhi-india-with-india-flag-flying-high-1199337631.jpg",
  },
  {
    src: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg",
  },
  {
    src: "https://media.istockphoto.com/id/157189324/photo/peacock-calling.jpg?s=612x612&w=0&k=20&c=QinoJNtTMLY-m0wljCP1hiSoXdUc1Jl49F4nUsdrLCo=",
  },
  {
    src: "https://media.istockphoto.com/id/1198272365/photo/colorful-wavy-object.jpg?b=1&s=612x612&w=0&k=20&c=fsey2u6qNoqHbzhecbgKEUICWYW2xbiIHewj_tQfeVc=",
  },
  {
    src: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
  },
];

let idx = 0;
let elements = [];
const parent = document.querySelector(".caraousel");
const buttons = document.querySelector(".elements");
createCaraousel(images);
function createCaraousel(images) {
  images.forEach((image, count) => {
    const item = document.createElement("div");
    item.classList.add("caraousel-item");
    const div = document.createElement("div");
    div.style.backgroundImage = `url(${image.src})`;
    div.classList.add("image");
    if (count === 0) item.classList.add("active");
    item.appendChild(div);
    parent.appendChild(item);
    elements.push(item);
    const btn = document.createElement("button");
    // btn.classList.add('btn');
    btn.addEventListener("click", (event) => slideElements(count));
    buttons.appendChild(btn);
  });
}

function getMinimumDistance(idx, nextIdx) {
  if (nextIdx > idx) {
    if (nextIdx - idx < idx + images.length - nextIdx) return 1;
    else return -1;
  } else {
    if (idx - nextIdx < nextIdx + images.length - idx) return -1;
    else return 1;
  }
}
function slideElements(nextIdx) {
  if (nextIdx === idx) return;
  const dist = getMinimumDistance(idx, nextIdx);
  const currImage = elements[idx];
  const nextImage = elements[nextIdx];
  console.log(dist);
  if (dist === 1) {
    currImage.classList.add("slide-left1");
    nextImage.classList.add("slide-right1", "active");
    setTimeout(() => {
      currImage.classList.remove("active");
      nextImage.classList.remove("slide-right1");
      currImage.classList.remove("slide-left1");
    }, 300);
  } else {
    currImage.classList.add("slide-right2");
    nextImage.classList.add("slide-left2", "active");
    setTimeout(() => {
      currImage.classList.remove("active");
      nextImage.classList.remove("slide-left2");
      currImage.classList.remove("slide-right2");
    }, 300);
  }
  idx = nextIdx;
}

const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");
leftButton.style.left = "0";
rightButton.style.right = "0";
window.onload = resize;
window.onresize = resize;
function resize() {
  leftButton.style.top = parent.offsetHeight / 2 + "px";
  leftButton.style.bottom = parent.offsetHeight / 2 + "px";
  rightButton.style.top = parent.offsetHeight / 2 + "px";
  rightButton.style.bottom = parent.offsetHeight / 2 + "px";
}
leftButton.addEventListener("click", (event) => {
  slideElements((idx - 1 + images.length) % images.length);
});
rightButton.addEventListener("click", (event) => {
  slideElements((idx + 1) % images.length);
});

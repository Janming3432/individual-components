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
createCaraousel(images);
function createCaraousel(images) {
  
  images.forEach((image, count) => {
    const div = document.createElement("div");
    div.style.backgroundImage = `url(${image.src})`;
    div.classList.add("image");
    if (count === 0) div.classList.add("active");
    parent.appendChild(div);
    elements.push(div);
  });
}

function slideElements(add) {
  const currImage = elements[idx];
  idx = (idx + add + images.length) % images.length;
  const nextImage = elements[idx];
  if (add === 1) {
    currImage.classList.add("slide-right");
    nextImage.classList.add("active", "slide-left");
    setTimeout(() => {
      currImage.classList.remove("active", "slide-right");
      nextImage.classList.remove("slide-left");
    }, 500);
  } else {
    currImage.classList.add("slide-left");
    nextImage.classList.add("active", "slide-right");
    setTimeout(() => {
      currImage.classList.remove("active", "slide-left");
      nextImage.classList.remove("slide-right");
    }, 500);
  }
  console.log(idx);
}

const leftButton = document.createElement("button");
const rightButton = document.createElement("button");

leftButton.addEventListener("click", (event) => {
  slideElements(-1);
});
rightButton.addEventListener("click", (event) => {
  slideElements(1);
});

leftButton.classList.add("left");
leftButton.classList.add("btn");
rightButton.classList.add("right");
rightButton.classList.add("btn");

parent.appendChild(leftButton);
parent.appendChild(rightButton);

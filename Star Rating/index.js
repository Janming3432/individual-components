const stars = document.getElementsByClassName("star");
const num = document.getElementsByTagName("p");
console.log(num);
var value = 0;
const addColor = (x) => {
  for (let i = value; i <= x; ++i) stars[i].style.color = "wheat";
};

const removeColor = (x) => {
  for (let i = value; i <= x; ++i) stars[i].style.color = "white";
};

const changeColor = (x) => {
  const check = x === value - 1;
  if (x <= value) value = 0;
  removeColor(stars.length - 1);
  if (check) return;
  for (let i = 0; i <= x; ++i) stars[i].style.color = "yellow";
  value = x + 1;
  num[0].innerHTML = "Current Rating: " + value + "/5";
};

for (let i = 0; i < stars.length; ++i) {
  stars[i].addEventListener("mouseover", (event) => addColor(i));
  stars[i].addEventListener("mouseout", (event) => removeColor(i));
  stars[i].addEventListener("click", (event) => changeColor(i));
}
console.log(stars);

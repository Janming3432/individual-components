const stars = document.getElementsByClassName("star");
const num = document.getElementsByTagName("p")[0];
var value = 0;
const addColor = (x) => {
  const partial = value - Math.floor(value);
  if (partial > 0) {
    stars[
      Math.floor(value)
    ].style.backgroundImage = `linear-gradient(to right, gold 0%, gold ${
      partial * 100
    }%, white ${partial * 100}%, wheat 100%)`;
  }
  for (let i = Math.ceil(value); i <= x; ++i)
    stars[
      i
    ].style.backgroundImage = `linear-gradient(to right, wheat 0%, wheat 100%)`;
};

const removeColor = (x) => {
  const partial = value - Math.floor(value);
  if (partial > 0) {
    stars[
      Math.floor(value)
    ].style.backgroundImage = `linear-gradient(to right, gold 0%, gold ${
      partial * 100
    }%, white ${partial * 100}%, white 100%)`;
  }
  for (let i = Math.ceil(value); i <= x; ++i)
    stars[
      i
    ].style.backgroundImage = `linear-gradient(to right, white 0%, white 100%)`;
};

const changeColor = (x) => {
  x = Math.floor(x * 10) / 10;
  const partial = x - Math.floor(x);
  const check = x === value - 1;
  if (x <= value) value = 0;
  removeColor(stars.length - 1);
  if (check) return;
  for (let i = 0; i < Math.floor(x); ++i)
    stars[
      i
    ].style.backgroundImage = `linear-gradient(to right, gold 0%, gold 100%)`;

  if (partial > 0) {
    stars[
      Math.floor(x)
    ].style.backgroundImage = `linear-gradient(to right, gold 0%, gold ${
      partial * 100
    }%, white ${partial * 100}%, white 100%)`;
  } else {
    stars[
      Math.floor(x)
    ].style.backgroundImage = `linear-gradient(to right, gold 0%, gold 100%)`;
  }
  value = x;
  num.innerHTML = "Current Rating: " + value + "/5";
};

for (let i = 0; i < stars.length; ++i) {
  stars[i].addEventListener("mouseover", (event) => addColor(i));
  stars[i].addEventListener("mouseout", (event) => removeColor(i));
  stars[i].addEventListener("click", (event) =>
    changeColor(
      i +
        (event.x - event.currentTarget.getBoundingClientRect().left) /
          event.currentTarget.getBoundingClientRect().width
    )
  );
}

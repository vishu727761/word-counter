const box = document.querySelector("#textBox");
const counter = document.querySelector("#charCount");

box.onkeyup = () => {
  counter.innerText = box.value.length;
};

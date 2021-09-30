import "./style/style.scss";

import img1 from "./media/images/1.jpg";
import img2 from "./media/images/2.jpg";
import img3 from "./media/images/3.jpg";
import img4 from "./media/images/4.gif";

import sound1 from "./media/audio/1.mp3";
import sound2 from "./media/audio/2.mp3";
import sound3 from "./media/audio/3.mp3";

import movie1 from "./media/video/1.mp4";
import movie2 from "./media/video/2.mp4";

const blockWidth = "400px";
const container = document.querySelector(".container");

const imageList = [img1, img2, img3, img4];
const data1 = [
  { img: img1, title: "природа" },
  { img: img2, title: "лес" },
  { img: img3, title: "дом" },
  { img: img4, title: "кот" },
];
data1.forEach((item, ind) => {
  const elem = document.createElement("img");
  elem.src = item.img;
  elem.style.width = "200px";
  elem.style.height = "150px";
  const div = document.createElement("div");
  const title = document.createElement("p");
  div.classList.add("col");
  title.innerHTML = item.title;
  div.appendChild(elem);
  div.appendChild(title);
  document.querySelector(".row").appendChild(div);
});

const data2 = [
  { img: sound1, title: "песня" },
  { img: sound2, title: "хит" },
  { img: sound3, title: "музыка" },
];

data2.forEach((item, ind) => {
  const elem = document.createElement("audio");
  elem.setAttribute("controls", true);
  elem.src = item;
  elem.src = item.img;
  elem.style.width = "200px";
  elem.style.height = "150px";
  const div = document.createElement("div");
  const title = document.createElement("p");
  div.classList.add("col");
  title.innerHTML = item.title;
  div.appendChild(elem);
  div.appendChild(title);
  document.querySelector(".row").appendChild(div);
});

const data3 = [
  { img: movie1, title: "кино" },
  { img: movie2, title: "клип" },
];

data3.forEach((item, ind) => {
  const elem = document.createElement("video");
  elem.setAttribute("controls", true);
  elem.src = item;
  elem.src = item.img;
  elem.style.width = "200px";
  elem.style.height = "150px";
  const div = document.createElement("div");
  const title = document.createElement("p");
  div.classList.add("col");
  title.innerHTML = item.title;
  div.appendChild(elem);
  div.appendChild(title);
  document.querySelector(".row").appendChild(div);
});

console.log("WoW");

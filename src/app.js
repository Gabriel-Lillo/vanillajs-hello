/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let randomNumber = Math.random() * 10;
  Document.querySelector("#excuse").innerHTML = randomNumber;
  console.log("Hello Rigo from the console!");
};

let generate;
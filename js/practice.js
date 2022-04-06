// const API_KEY = "b8abee4faeaef5c78b33c76ec8c49c72";

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";
const TODOS_KEY = "todos";
// const URL_KEY = "url";

// const savedLink = localStorage.getItem(URL_KEY);
const savedUsername = localStorage.getItem(USERNAME_KEY);

const loginForm = document.querySelector("form#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
// const link = document.querySelector("a");
const clock = document.querySelector("h2#clock");
const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input:first-child");
const toDoList = document.querySelector("ul#todo-list");
// const weather = document.querySelector("#weather");
// const linkForm = document.querySelector("#link");
// const linkInput = document.querySelector("#link input");

////////////////////// login - greeting
function onLoginSubmit(event) {
  event.preventDefault();
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  // link.classList.remove(HIDDEN_CLASSNAME);
  // link.href = localStorage.getItem(URL_KEY); // link
  loginForm.classList.add(HIDDEN_CLASSNAME)
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  document.querySelector("div#quote").classList.remove(HIDDEN_CLASSNAME);
  // weather.classList.remove(HIDDEN_CLASSNAME);
  paintGreeting();
}
function paintGreeting() {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  const username = localStorage.getItem(USERNAME_KEY);

  const date = new Date();
  const hours = date.getHours();
  if (hours > 5 && hours < 12) {
    greeting.innerText = `Good Morning! ${username}`;
  } else if (hours >= 12 && hours < 17) {
    greeting.innerText = `Good Afternoon! ${username}`;
  } else if (hours >= 17 && hours < 23) {
    greeting.innerText = `Good Evening! ${username}`;
  } else {
    greeting.innerText = `Hello! ${username}`;
  }
}
///////////////////////////////// link
// function onLinkSubmit(event) {
//   event.preventDefault();
//   linkForm.classList.add(HIDDEN_CLASSNAME);
//   localStorage.setItem(URL_KEY, linkInput.value);
//   link.href = localStorage.getItem(URL_KEY);
// }
// linkForm.addEventListener("submit", onLinkSubmit);
///////////////////////////////// background
const images = [
  "0.jpeg",
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
];
const chosenImage = images[Math.floor(Math.random() * images.length)];
document.body.style.background = `url('img/${chosenImage}')`;
document.body.style.opacity = 0.77;
///////////////////////////////// clock
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);
///////////////////////////////// todo
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text + "\t\t\t";
  const button = document.createElement("button");
  button.innerText = "Completed";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
/////////////////////////////////////////////weather
// main / temp \n lo
// function onGeoOk(position) {
//   const lat = position.coords.latitude;
//   const lon = position.coords.longitude;
//   const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
//   console.log(urlWeather);
//   const urlAirPollution = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
//   console.log(urlWeather);
//   console.log(urlAirPollution);
//   fetch(urlWeather)
//     .then((response) => response.json())
//     .then((data) => {
//       const weather = document.querySelector("#weather span:first-child");
//       const city = document.querySelector("#weather span:last-child");

//       weather.innerText = `${data.weather[0].main} / ${
//         Math.round(data.main.temp * 10) / 10
//       }°C\n`;
//       city.innerText = data.name;
//     });
//   const qualitativeIndex = {
//     1: "Good",
//     2: "Fair",
//     3: "Moderate",
//     4: "Poor",
//     5: "Very Poor",
//   };
//   fetch(urlAirPollution)
//     .then((response) => response.json())
//     .then((data) => {
//       const airQuality = document.querySelectorAll("#weather span")[1];
//       airQuality.innerText = `Air Quality: ${
//         qualitativeIndex[data.list[0].main.aqi]
//       }\n`;
//     });
// }
// function onGeoError() {
//   alert("Can't find you, No Weather information available.");
// }
// navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting();
  // link.classList.remove(HIDDEN_CLASSNAME);
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  document.querySelector("div#quote").classList.remove(HIDDEN_CLASSNAME);
  // weather.classList.remove("hidden");
  // if (savedLink) {
  //   link.href = savedLink;
  // } else {
  //   linkForm.classList.remove(HIDDEN_CLASSNAME);
  // }
}

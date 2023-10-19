// import data array from data.js

import { userData } from "../js/data.js";

//Function Login
const btnElm = document.querySelector("#btn_login");
function onLogin(params) {
  const usernameEl = document.querySelector("#username").value;
  const passwordEl = document.querySelector("#password").value;

  const users = userData.find(
    (user) => user.username == usernameEl && user.password == passwordEl
  );

  if (users) {
    localStorage.setItem("user", JSON.stringify(users));
    window.location.href = "index.html";
  } else {
    alert("Username Atau password Salah");
  }
}

btnElm.addEventListener("click", () => {
  onLogin();
});

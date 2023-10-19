// Array data pet

const pet = [
  {
    id: 0,
    image: "assets/img/anjing-chihuahua.png",
    title: "anjing chihuahua",
    age: "6 bulan",
  },

  {
    id: 1,
    image: "assets/img/anjing-french-bulldog.jpg",
    title: "anjing french bulldog",
    age: "1 tahun",
  },

  {
    id: 2,
    image: "./assets/img/Scottish-fold.jpg",
    title: "kucing scottish fold",
    age: " 7 bulan",
  },

  {
    id: 3,
    image: "./assets/img/kucing-domestik.jpg",
    title: "kucing domestik",
    age: "2 tahun",
  },

  {
    id: 4,
    image: "./assets/img/kucing-persia.jpg",
    title: "kucing persia",
    age: "1,5 tahun",
  },

  {
    id: 5,
    image: "./assets/img/kucing-anggora.jpg",
    title: "kucing anggora",
    age: "10 bulan",
  },

  {
    id: 6,
    image: "./assets/img/anjing-pomeranian.jpg",
    title: "anjing pomeranian",
    age: "11 bulan",
  },

  {
    id: 7,
    image: "./assets/img/British-shorthair.jpg",
    title: "British shorthair",
    age: " 17 bulan",
  },

  {
    id: 8,
    image: "./assets/img/anjing-pug.jpg",
    title: "anjing pug",
    age: "9 bulan",
  },
];

// DOM untuk menampilkan data dan fungsi search bar pet ke innerHTML

const categories = [
  ...new Set(
    pet.map((item) => {
      return item;
    })
  ),
];

document.getElementById("searchBar").addEventListener("keyup", (e) => {
  const searchData = e.target.value.toLowerCase();
  const filterData = categories.filter((item) => {
    return item.title.toLocaleLowerCase().includes(searchData);
  });

  displayItem(filterData);
});

const displayItem = (items) => {
  document.getElementById("grid").innerHTML = items
    .map((item) => {
      var { image, title, age } = item;
      return `<div class='box'>
      <div class='img-box'>
      <img class='images' src=${image}></img>
      </div>
      
      <div class='bottom'>
      <p>${title}
      <h2>${age}</h2>
      </div>
      </div>`;
    })
    .join("");
};

displayItem(categories);

// get data dari local storage
// convert data ke object
// display ke DOM
function getDataUser() {
  const dataUser = localStorage.getItem("user");

  if (dataUser) {
    const conData = JSON.parse(dataUser);

    const imgElm = document.getElementById("img_user");
    imgElm.src = conData.imgUrl;

    const usernameElm = document.getElementById("username");
    usernameElm.innerHTML = conData.username;
  } else {
    window.location.href = "./view/login.html";
  }
}

// Function Logout

function onLogout() {
  localStorage.removeItem("user");
  window.location.href = "./view/login.html";
}

getDataUser();

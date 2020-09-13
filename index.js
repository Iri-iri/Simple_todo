const title = document.querySelector("#title");
const description = document.querySelector("#description");
const display = document.querySelector("#display");
const btn = document.querySelector("#btn");
const modalWrapper = document.querySelector(".modal-wrapper");
const closeBtn = document.querySelector("#closeBtn");
const okBtn = document.querySelector("#okBtn");
const mess = document.querySelector("#mess");
const inputTitle = document.querySelector("#new_title");
const inputDescription = document.querySelector("#new_description");
const form = document.querySelector("#form");

let arr = [];

function ArrPush() {
  let obj = {
    titleDisplay: title.value,
    descriptionDisplay: description.value,
  };
  arr.push(obj);
}


function displayMessage() {
  let displayMessage = "";

  arr.forEach(function (item) {
    displayMessage += `
        <li class = "li">
        <h3 class = "newTitle">${item.titleDisplay}</h3>
        <p class = "newDescription">${item.descriptionDisplay}</p>
        <button class = "editButton"> Edit </button>
        <button class = "deleteButton"> Delete </button>
        </li>
        `;
    display.innerHTML = displayMessage;
  });
};


function openModal() {
  modalWrapper.style.display = "block";
}


closeBtn.addEventListener("click", function () {
  modalWrapper.style.display = "none";
});


btn.addEventListener("click", (event) => {
  event.preventDefault();
  ArrPush();
  displayMessage();
});


function del() {
  const newLi = event.target.closest(".li");
  const newTitle = newLi.querySelector(".newTitle").textContent;
  const newDescription = newLi.querySelector(".newDescription").textContent;

  arr.forEach(function (item) {
    if (newTitle === item.titleDisplay && newDescription === item.descriptionDisplay) {
      let index = arr.indexOf(item);
      arr.splice(index, 1);
    }
  });

  displayMessage();
};


function edit() {
  const newLi = event.target.closest(".li");
  const newTitle = newLi.querySelector(".newTitle").textContent;
  const newDescription = newLi.querySelector(".newDescription").textContent;


  openModal();
   inputTitle.value = `${newTitle}`;
   inputDescription.value = `${newDescription}`;

  
  okBtn.addEventListener("click", () => {
  
    arr.forEach(function (item) {
      if (newTitle === item.titleDisplay && newDescription === item.descriptionDisplay) {
        let index = arr.indexOf(item);
        arr.splice(index, 1, {
          title: inputTitle.value,
          description: inputDescription.value,
        });
        modalWrapper.style.display = "none";
        displayMessage();
      }
      
    });
  
  });
}


container.addEventListener("click", (event) => {

  if (event.target.closest(".deleteButton")) {
    del();
  } 

  if (event.target.closest(".editButton")) {
    event.preventDefault()
    edit();
  }
});


// displayMessage();
// const arrOfLi = document.querySelectorAll(".newTitle");
// arrOfLi.forEach((item) => {
//   item.addEventListener("mouseenter", () => {
//     item.style.color = "red";
//   });
//   item.addEventListener("mouseleave", () => {
//     item.style.color = "none";
//   });
// })


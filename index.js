(() => {

let toDoListArray = [];

const form = document.querySelector(".form");
const input = document.querySelector(".form_input");
const ul = document.querySelector(".toDoList");

form.addEventListener("submit", (e) => {
   e.preventDefault();

   let itemId = String(Date.now());
   let toDoItem = input.ariaValueMax

   addItemToDom(itemId, toDoItem);
   addItemToArray();

   input.value = "";

});


ul.addEventListener("click", () => {
    let id = e.target.getAttribute("data-id");
    if(!id) return;

    removeItemFromDOM(id);
    removeItemFromDOM(id);

    

});


function addItemToDOM(itemId, toDoItem) {
    const li = document.createElement("li");
    li.setAttribute("data-id", itemId);
}


}) ();
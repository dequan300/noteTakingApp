let notes =[]
const button = document.querySelector("#button")
let form = document.querySelector("#form")


const addNote = function (e) {
  e.preventDefault();
  const container = document.querySelector(".noteContainer");
  container.innerHTML = ''; // Clear the existing content

  let input = document.querySelector("input").value;
  notes.push(input);
const noteCards = document.createElement("div")
noteCards.classList.add("notes");

  notes.forEach(element => {
const p= document.createElement("p")
const edit=document.createElement("button")
const deleteB=document.createElement("button")

    p.textContent=element
    edit.textContent="edit"
    deleteB.textContent="delete"
    deleteB.classList.add("delete"); // Use add method to add class
    edit.classList.add("edit"); // Use add method to add class
    noteCards.appendChild(p)
    noteCards.appendChild(edit)
    noteCards.appendChild(deleteB)
    container.appendChild(noteCards.cloneNode(true)); // Append a copy of noteCards to the container

    
  });
  
form.reset()

};
button.addEventListener("click", addNote);


let deleteButton= document.querySelector(".delete")


const deleteCard=function (e){

console.log(Hello)
}


deleteButton.addEventListener('click',deleteCard)

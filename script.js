let notes =[]
const button = document.querySelector("#button")
let form = document.querySelector("#form")



const addNote = function (e) {
  e.preventDefault();
  const container = document.querySelector(".noteContainer");
  container.innerHTML = ''; // Clear the existing content

  let input = document.querySelector("input").value;
  notes.push(input);
// const noteCards = document.createElement("div")
// noteCards.classList.add("notes");

  notes.forEach(element => {
    const noteCards = document.createElement("div"); // Create a new noteCards for each note
    noteCards.classList.add("notes");

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
    container.appendChild(noteCards); // Append a copy of noteCards to the container

    
  });

  
form.reset()

};
button.addEventListener("click", addNote);

const container = document.querySelector(".noteContainer");
container.addEventListener('click',(e)=>{
    if(e.target.classList.contains("delete")){
        deleteCard(e)
    }else if(e.target.classList.contains("edit"))
    edit(e)
})

const deleteCard=function (e){

    console.log("hello")
    const deleteButton = e.target;
    const noteCards = deleteButton.parentElement;
    console.log(noteCards)
 const container = document.querySelector(".noteContainer");

    let index= Array.from(container.children).indexOf(noteCards)

    console.log(index)
    notes.splice(index,1)
    noteCards.remove()
 }



 const edit =function(e){
  let edit = e.parentElement
  const input=document.createElement(input).value
  const p =noteCards.p

 }


    


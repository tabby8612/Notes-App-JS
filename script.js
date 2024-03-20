const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll("input-box");

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

function showNotes() {
    console.log(`Executed`);
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.classList.add("input-box");
    inputBox.setAttribute("contenteditable", "true");
    img.setAttribute("src", "images/delete.png");

    notesContainer.appendChild(inputBox);
    inputBox.appendChild(img);
});

notesContainer.addEventListener("click", (e) => {

    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }

    if (e.target.tagName === "P") {
        const notes = document.querySelectorAll(".input-box");
        notes.forEach(el => {
            el.addEventListener("keyup", () => {
                updateStorage();
            });
        });

    }
});
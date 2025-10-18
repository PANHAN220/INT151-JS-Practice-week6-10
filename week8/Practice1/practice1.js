//practice 1

const addButton = document.getElementById("add");
addButton.addEventListener("click", () => {
    const box = document.querySelector("#box")
    box.classList.add("bordered")
});

const removeButton = document.getElementById("remove");
removeButton.addEventListener("click", () => {
    const box = document.querySelector("#box")
    box.classList.remove("bordered")
});

const toggleButton = document.getElementById("toggle");
toggleButton.addEventListener("click", () => {
    const box = document.querySelector("#box")
    box.classList.toggle("bordered")
})

//1. (insertBefore) <li class = "vegan">Cabbage Soup </li>
//1.1 get its parent
const soupUlElement = document.getElementById("soup")   
//1.2 get ref node -Beef Soup
let refNode = null
Array.from(soupUlElement.children).forEach((element) => {
    if (element.textContent.trim().includes("Beef Soup")) refNode = element
});



// 2. remove Vegetable Soup
//2.1 get its parent
const MenuSoupUlElement = document.getElementById("soup")
//2.2 get ref node -Beef Soup
let referNode = null
Array.from(MenuSoupUlElement.children).forEach((element) => {
  if (element.textContent.trim() === "Vegetable Soup") refNode = element
})
//2.3 remove
soupUlElement.removeChild(refNode)



// 3.Write JavaScript to find out how many menu items are of class "vegan" and "meat" and display them.

const itemVegan = document.querySelectorAll(".vegan");
const itemMeat = document.querySelectorAll(".meat");
console.log("Vegan", itemVegan.length);
console.log("Meat", itemMeat.length);


// 4.Add a new <li> code inside the <ul id="soup"> that says "Tom Yum Soup" and has a class of "spicy".

const soupList = document.getElementById("soup");
const newItem = document.createElement("li");

newItem.textContent = "Tom yum soup"
newItem.classList.add = "spicy"
soupList.appendChild(newItem)



// 5. Use JavaScript to select all menu items with the class "meat" and change the text color to red.

const menuMeat = document.querySelectorAll(".meat")
menuMeat.forEach((item) => item.style.color = red);

// 6. When the button is clicked, fetch the values ​​from the fname and lname fields, concatenate them, and display them in alert().

function formSubmit() {
    const form = document.forms["myForm"];
    const first = form.fname.value;
    const last = form.lname.value;
    
    alert(`Hello ${first} ${last}`)

}
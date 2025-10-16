// อ้างถึง root node (มีแค่ตัวเดียวจากทั้งเอกสาร)
console.log(window.document);
console.log(document);


//root element node , document element 
const htmlElement = document.documentElement
console.log(htmlElement);


// query ผ่าน id
console.log(document.getElementById("soup"));


// gorup property ที่เรียกใช้ได้
console.log(document.firstChild); // ลูกคนแรกของ root node คือ document 
console.log(document.firstElementChild); //มองแค่ element type เท่านั้น
console.log(document.lastChild);
console.log(document.lastElementChild);


console.log(htmlElement.parentElement); // null เพราะไม่มี element ไหนสูงกว่าแล้ว
console.log(htmlElement.parentNode);// root node 

//get all child node under id soup
const childElement = document.getElementById('soup')
const childNodes = childElement.childNodes
console.log(childNodes.length);


//node type children 
childNodes.forEach( child => console.log(child))










// อ้างถึง root node (มีแค่ตัวเดียวจากทั้งเอกสาร)
console.log(window.document);
console.log(document);


//root element (document element) 
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
console.log(document.firstChild.nextSibling); // html element 



//get all child node under id soup
const childElement = document.getElementById('soup')
const childNodes = childElement.childNodes //ได้ลูกที่เป็น type อะไรก็ได้
console.log(childNodes.length);

const child = childElement.children //ได้ลูกที่เป็นเฉพาะ element 
//node type children 
childNodes.forEach( child => console.log(child))

// how to get attributes 
const divElementNode = document.getElementById("soup") // query node นั้นมาก่อนแล้วค่อยเข้าภึง attributes
const divAttributes = divElementNode.attributes
console.log(divAttributes.length);




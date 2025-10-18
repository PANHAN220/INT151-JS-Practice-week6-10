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
const divElement = document.getElementById("menu") // query node นั้นมาก่อนแล้วค่อยเข้าภึง attributes
const divAttributes = divElementNode.attributes
console.log(divAttributes.length);

// acess by use value 
const ulElement = document.getElementById("soup")
console.log(ulElement.nodeName)
console.log(ulElement.nodeType)
console.log(ulElement.nodeValue)



// 1. what is the node type of first child of root node
console.log(document.firstChild.nodeType)

// 2. if node types is an element node, display 'Hello HTML node' , ottherwise, display "Hello any node"

if(document.firstElementChild.nodeType===Node.ELEMENT_NODE){
    console.log('Hello, HTML node');
    
}
else {
    console.log('hello any node')
} 




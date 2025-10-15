// Fist-class function
//  การปฏิบัติต่อฟังก์ชันเหมือนกับ "วัตถุ" หรือ "ประชากรชั้นหนึ่ง"
function sayHello() {
    console.log("hello");
    
}

let greeting = sayHello; //สามารถกำหนดเป็น variable ได้ (Function expression)



// Higher order function
//  function ถือเป็นข้อมูลประเภทหนึ่งสามารถถูกเก็บไว้เป็นตัวแปร หรือ เป็น argument ให้ฟังก์ชันอื่นได้
//  ฟังก์ชันที่รับฟังก์ชันอื่นเป็นพารามิเตอร์
function greet(name, formatter) {
    return formatter(name)
}

function shout(text) {
    return text.toUpperCase() + "!!!";
}

function whisper(text) {
  return text.toLowerCase() + "...";
}

console.log(greet("Alice", shout)); // Alice!!!
console.log(greet("Alice", whisper)); // alice...




// แบบใช้ arrow function

const greets = (name, formatter) => formatter(name);
const shouts = text => text.toUpperCase() + "!!!";
const whispers = text => text.toLowerCase() + "..."
// ข้อดีคือ เราสามารถ “แยก logic ออกเป็นชิ้นเล็กๆ” แล้วนำมาประกอบกันได้

console.log(greet("Alice", shout)); // ALICE!!!
console.log(greet("Alice", whispers)); // alice...



// test my self 

function toUpper(text) {
    return text.toUpperCase()
}

function toLower(text) {
    return text.toLowerCase()
}

function processText(text, operation) {
    return operation(text);
}

console.log(processText("hello", toUpper));
console.log(processText("hello", toLower));



// Immutability
//  การไม่ไปเปลี่ยนแปลงข้อมูลเดืม array เดิมไม่ถูกแตะเลยลดการเกิด bug
const numbers = [1, 2, 3];
const newNumbers = numbers.concat(4);  // ✅ สร้าง array ใหม่
console.log(numbers);     // [1, 2, 3]
console.log(newNumbers);  // [1, 2, 3, 4]



// Pure function
//  ฟังก์ชันที่ ให้ผลลัพธ์เหมือนเดิมเสมอ เมื่อใส่ input เดิม (ไม่แตะอะไรข้างนอก และ ไม่ขึ้นอยู่กับอะไรข้างนอก)
//  ข้อดี Predictable – ใส่ค่าเดิมได้ผลเดิมเสมอ, ปลอดภัย ไม่เปลี่ยนข้อมูลที่ไม่ควรเปลี่ยน 
function increase(value) {
  return value + 1;
}

const data1 = { value: 10 };
console.log(increase(data1.value)); // 11
console.log(data1.value);           // 10 ✅ ไม่เปลี่ยนของเดิม


// แบบ impure

function increase(obj) {
  obj.value += 1; // แก้ค่าใน object เดิม
  return obj.value;
}

const data2 = { value: 10 };
console.log(increase(data2)); // 11
console.log(data2.value);     // 11 ❌ ข้อมูลเดิมถูกเปลี่ยน



// Function compose
//  การรวมฟังก์ชันเล็ก ๆ หลายตัวให้ทำงานต่อกัน

function compose(f, g) {
  return function(x) {
    return f(g(x));
  };
}

function square(x) {
  return x * x;
}

function triple(x) {
  return x * 3;
}

const squareThenTriple = compose(triple, square);

console.log(squareThenTriple(2)); // 12



// Closures
//  function ที่ยังจำตัวแปรด้านนอกได้
function counter() {
  let count = 0;

  function increment() {
    count++;
    return count;
  }

  return increment;
}

const c = counter();
console.log(c()); // 1
console.log(c()); // 2
console.log(c()); // 3

















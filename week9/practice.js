// =============================================
// 🟢 Practice 1: Toggle Text
// =============================================
// เมื่อคลิกปุ่ม “Toggle Text”
// ให้สลับข้อความใน <h3 id="text"> ระหว่าง
// "Hello World!" และ "Welcome Back!"
// ---------------------------------------------

const toggle = document.getElementById("toggleBtn");
const text = document.getElementById("text");

toggle.addEventListener("click", () => {
    if (text.textContent === "Hello World!") {
        text.textContent = "Welcome Back!"
    } 
    else {
        text.textContent = "Hello World!"
    }
});


// =============================================
// 🟢 Practice 2: เปลี่ยนสีพื้นหลังด้วย data-*
// =============================================
// มีปุ่ม 3 ปุ่ม แต่ละปุ่มมี data-color (เช่น red, green, blue)
// เมื่อคลิก ให้เปลี่ยน backgroundColor ของกล่อง (#box)
// ตามสีที่อยู่ใน data-color ของปุ่มนั้น
// ---------------------------------------------

const box = document.getElementById("box");
const colorButtons = document.querySelectorAll("button[data-color]")

colorButtons.forEach(btn => 
    btn.addEventListener("click", () => {
        const color = btn.dataset.color
        box.style.backgroundColor = color
    })
);


// =============================================
// 🟢 Practice 3: Word Repeater
// =============================================
// เมื่อพิมพ์คำใน input (#word) แล้วกดปุ่ม “Repeat”
// ให้สร้าง <p> ใหม่และแสดงคำนั้นใน #output
// ทุกครั้งที่กดปุ่มจะเพิ่มข้อความใหม่ด้านล่าง (ไม่ลบของเก่า)
// ---------------------------------------------

const wordInput = document.getElementById("word")
const repeatbtn = document.getElementById('repeatBtn')
const output = document.getElementById('output')

repeatbtn.addEventListener('click', () => {
    const p = document.createElement("p")
    p.textContent = wordInput.value
    output.appendChild(p)
});


// =============================================
// 🟢 Practice 4: Password Strength Checker
// =============================================
// เมื่อผู้ใช้พิมพ์รหัสผ่านใน input (#password)
// ให้ตรวจสอบความยาวของรหัส
// - น้อยกว่า 4 ตัว -> แสดง “Weak” (สีแดง)
// - 4 ถึง 7 ตัว -> แสดง “Medium” (สีส้ม)
// - 8 ตัวขึ้นไป -> แสดง “Strong” (สีเขียว)
// ผลลัพธ์แสดงใน <p id="strength">
// ---------------------------------------------

const password = document.getElementById('password')
const strength = document.getElementById('strength')

password.addEventListener("input", () => {
    const len = password.value.length
    if (len < 4){
        strength.textContent = 'Weak'
        strength.style.color = 'red'
    } else if (len < 8) {
        strength.textContent = "Medium";
        strength.style.color = "orange";
    } else {
    strength.textContent = "Strong";
    strength.style.color = "green";
  }
})


// =============================================
// 🟢 Practice 5: Key Highlight
// =============================================
// เมื่อผู้ใช้กดแป้นใด ๆ บนคีย์บอร์ด (event: "keydown")
// ให้แสดงชื่อปุ่มที่ถูกกดใน <div id="keyDisplay">
//
// 📋 Requirements:
// 1. แสดงข้อความ “You pressed: <key>”
// 2. ถ้ากด "Enter" ให้เปลี่ยนสีข้อความเป็นแบบสุ่ม
// 3. ถ้ากด "Space" ให้แสดงว่า “You pressed: Spacebar”
// 4. ถ้าเป็นปุ่มตัวอักษรอื่น ๆ ให้เป็นสีดำปกติ
// ---------------------------------------------

const keyDisplay = document.getElementById("keyDisplay");

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    keyDisplay.textContent = "You pressed: Enter";
    keyDisplay.style.color = getRandomColor();
  } else if (event.key === " ") {
    keyDisplay.textContent = "You pressed: Spacebar";
    keyDisplay.style.color = "gray";
  } else {
    keyDisplay.textContent = `You pressed: ${event.key}`;
    keyDisplay.style.color = "black";
  }
});

function getRandomColor() {
  return `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;
}


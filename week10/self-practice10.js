
// =============================================
// 🟢 Practice 1: localStorage - Todo List
// =============================================
// 📋 REQUIREMENT:
// 1. มี input (#colorPicker) ให้เลือกสีจาก color picker
// 2. เมื่อกดปุ่ม “Save Color”
//    - ให้บันทึกค่าสีที่เลือกไว้ใน localStorage (key: "favColor")
//    - เปลี่ยนสีพื้นหลังของกล่อง (#colorBox) ให้ตรงกับค่าสีที่เลือก
// 3. เมื่อเปิดหน้าใหม่หรือรีเฟรช ต้องโหลดค่าสีเดิมกลับมาแสดงในกล่อง
// 4. ปุ่ม “Clear” ต้องลบข้อมูลใน localStorage และรีเซ็ตกล่องให้กลับเป็นสีเดิม (ไม่มีสี)

const colorPicker = document.getElementById('colorPicker')
const saveColor = document.getElementById('saveColor')
const clearColor = document.getElementById('clearColor')
const colorBox = document.getElementById('colorBox')

const savedColor = localStorage.getItem('favColor')
if (saveColor) {
    colorBox.style.backgroundColor = savedColor
}

saveColor.addEventListener('click', () => {
    const color = colorPicker.value
    localStorage.setItem('favColor', color);
    colorBox.style.backgroundColor = color;
})

clearColor.addEventListener("click", () => {
  localStorage.removeItem("favColor");
  colorBox.style.backgroundColor = "";
});

// =============================================
// 🟢 Practice 2: sessionStorage - Temporary Login
// =============================================
// 📋 REQUIREMENT:
// 1. ให้ผู้ใช้พิมพ์ชื่อในช่อง input (#sessionName)
// 2. เมื่อกดปุ่ม “Start Session”
//    - ให้เก็บชื่อไว้ใน sessionStorage (key: "sessionUser")
//    - แสดงข้อความ “Welcome, <name>” ใน <p id="greeting">
// 3. เมื่อรีเฟรชหน้า ชื่อยังต้องแสดงอยู่ (เพราะ session ยังไม่ปิด)
// 4. เมื่อปิดแท็บหรือปิดเบราว์เซอร์ ข้อมูลจะหาย (session หมดอายุเอง)
// 5. ปุ่ม “End Session” ใช้ลบข้อมูลใน sessionStorage และล้างข้อความที่แสดง

const sessionName = document.getElementById("sessionName");
const startSession = document.getElementById("startSession");
const endSession = document.getElementById("endSession");
const greeting = document.getElementById("greeting");

const sessionUser = sessionStorage.getItem("sessionUser");
if (sessionUser) greeting.textContent = "Welcome back, " + sessionUser;

startSession.addEventListener("click", () => {
  const name = sessionName.value;
  sessionStorage.setItem("sessionUser", name);
  greeting.textContent = "Welcome, " + name;
});

endSession.addEventListener("click", () => {
  sessionStorage.removeItem("sessionUser");
  greeting.textContent = "";
});
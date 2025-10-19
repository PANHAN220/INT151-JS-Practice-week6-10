// DOM Practice Set — “Soup Menu”

const soupElement = document.getElementById("soup");
const allSoup = soupElement.children;

// Practice 1 — “List All Soups”
// เข้าถึง <ul id="soup"> แล้วแสดงชื่อซุปทั้งหมดใน <li> ทีละตัวใน console
// ใช้ document.getElementById() เพื่อเข้าถึง <ul>
// และใช้ Array.from() หรือ forEach() เพื่อแสดงผล
Array.from(allSoup).forEach(soup => console.log(soup.textContent));




//Practice 2 — “Find and Show the Beef Soup”
// หา <li> ที่มีข้อความ "beef soup"
const beefSoup = Array.from(allSoup).find(
    (li) => li.textContent.trim() === "beef soup"
)
console.log(beefSoup);


//Practice 3 — “Count How Many Soups”
//แสดงจำนวน <li> ทั้งหมดใน <ul id="soup">
console.log("Total Soups", allSoup.length)


//Practice 4 — “Highlight the First and Last Soup”
// เข้าถึง <li> ตัวแรกและตัวสุดท้าย
//ตัวแรก → สีแดง
// ตัวสุดท้าย → สีน้ำเงิน
allSoup = allSoup[0].style.color = "red";
allSoup = [allSoup.length - 1].style.color = "bule";


//Practice 5 — “Add a New Soup to the Menu”
// สร้าง <li> ใหม่ชื่อ "chicken soup" แล้วต่อท้าย <ul id="soup">

const newSoup = document.createElement("li");
newSoup.textContent = "chicken soup";
soupList.appendChild(newSoup);




// Practice 6 — “Remove the Normal Soup”
// ลบ <li> ที่มีข้อความ "normal soup" ออกจากเมนู

const normalSoup = Array.from(allSoups).find(
  (li) => li.textContent.trim() === "normal soup"
);
normalSoup.remove();

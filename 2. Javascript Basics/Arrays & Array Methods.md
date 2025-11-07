# 📘 Topic: Arrays & Array Methods in JavaScript

Arrays are **used to store multiple values** in a single variable. JavaScript provides many **methods** to manipulate arrays.

---

## 🧠 Key Points

| Feature        | Description                                                                                        |
| -------------- | -------------------------------------------------------------------------------------------------- |
| Array          | A data structure to store multiple values in an ordered list.                                      |
| Indexing       | Arrays are **zero-indexed** (first element is at index 0).                                         |
| Mutable        | Arrays can be modified (add, remove, update elements).                                             |
| Common Methods | `push()`, `pop()`, `shift()`, `unshift()`, `slice()`, `splice()`, `map()`, `filter()`, `reduce()`. |

---

## 🧩 Example 1 — Basic Array Operations

let fruits = ["Apple", "Banana", "Mango"];

fruits.push("Orange"); // Add to end
console.log(fruits); // 👉 ["Apple", "Banana", "Mango", "Orange"]

fruits.pop(); // Remove last
console.log(fruits); // 👉 ["Apple", "Banana", "Mango"]

fruits.unshift("Pineapple"); // Add to start
console.log(fruits); // 👉 ["Pineapple", "Apple", "Banana", "Mango"]

fruits.shift(); // Remove first
console.log(fruits); // 👉 ["Apple", "Banana", "Mango"]

---

## 🧩 Example 2 — Using `map()`

let numbers = [1, 2, 3, 4, 5];
let squared = numbers.map(num => num * num);
console.log(squared); // 👉 [1, 4, 9, 16, 25]

---

## 🧩 Example 3 — Using `filter()`

let ages = [12, 18, 25, 30, 15];
let adults = ages.filter(age => age >= 18);
console.log(adults); // 👉 [18, 25, 30]

---

## 🧩 Example 4 — Using `reduce()`

let nums = [1, 2, 3, 4];
let sum = nums.reduce((total, num) => total + num, 0);
console.log(sum); // 👉 10

---

💡 **Tip:**

* Arrays are versatile for storing and manipulating multiple values.
* Use **array methods** (`map`, `filter`, `reduce`) for clean and functional code.
* Always remember arrays are **zero-indexed**.

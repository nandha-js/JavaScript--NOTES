# 📘 Topic: Selecting and Manipulating Elements in JavaScript

Selecting elements is the first step in DOM manipulation. Once selected, elements can be **read, modified, or styled** dynamically.

---

## 🧠 Key Points

| Feature               | Description                                                                                             |
| --------------------- | ------------------------------------------------------------------------------------------------------- |
| Selecting Elements    | Use JavaScript to get references to HTML elements.                                                      |
| Methods               | `getElementById`, `getElementsByClassName`, `getElementsByTagName`, `querySelector`, `querySelectorAll` |
| Manipulating Elements | Change content, attributes, or styles of selected elements.                                             |
| Common Properties     | `textContent`, `innerHTML`, `value`, `classList`, `style`                                               |

---

## 🧩 Example 1 — Selecting by ID

const heading = document.getElementById("title");
console.log(heading.textContent);

---

## 🧩 Example 2 — Selecting by Class

const items = document.getElementsByClassName("item");
for (let i = 0; i < items.length; i++) {
console.log(items[i].textContent);
}

---

## 🧩 Example 3 — Using querySelector & querySelectorAll

const firstItem = document.querySelector(".item");
const allItems = document.querySelectorAll(".item");
allItems.forEach(item => console.log(item.textContent));

---

## 🧩 Example 4 — Manipulating Content and Styles

const heading = document.getElementById("title");
heading.textContent = "New Heading";
heading.style.color = "blue";
heading.classList.add("highlight");

---

💡 **Tip:**
✅ Use `querySelector`/`querySelectorAll` for flexible CSS-style selection.
✅ Use `classList` to safely add, remove, or toggle classes instead of changing `className` directly.

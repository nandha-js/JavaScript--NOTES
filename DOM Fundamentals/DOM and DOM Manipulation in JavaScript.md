# 📘 Topic: DOM and DOM Manipulation in JavaScript

The **DOM (Document Object Model)** is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.

**DOM Manipulation** is the process of using JavaScript to dynamically **access, modify, add, or remove elements** from the HTML document.

---

## 🧠 Key Points

| Feature          | Description                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------------ |
| DOM              | A tree-like representation of the HTML elements in a web page.                                                     |
| DOM Node         | Each HTML element, attribute, or text in the document is a node.                                                   |
| DOM Manipulation | Using JavaScript to **change content, styles, or structure** of the DOM.                                           |
| Methods          | `getElementById`, `querySelector`, `createElement`, `appendChild`, `removeChild`, `innerHTML`, `textContent`, etc. |

---

## 🧩 Example 1 — Accessing Elements

const heading = document.getElementById("title");
console.log(heading.textContent);

---

## 🧩 Example 2 — Changing Content

document.getElementById("title").textContent = "New Heading";

---

## 🧩 Example 3 — Creating & Appending Elements

const newPara = document.createElement("p");
newPara.textContent = "This is a new paragraph.";
document.body.appendChild(newPara);

---

## 🧩 Example 4 — Removing Elements

const oldPara = document.getElementById("oldPara");
oldPara.remove();

---

💡 **Tip:**
✅ DOM manipulation allows dynamic and interactive web pages.
⚠️ Over-manipulation can affect performance; use wisely with event delegation when needed.

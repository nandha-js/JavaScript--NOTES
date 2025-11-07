# 📘 Topic: `getElementById`, `getElementsByClassName`, and `getElementsByTagName` in JavaScript

These are common methods to **select HTML elements** for DOM manipulation.

---

## 🧠 Key Points

| Method                   | Description                                 | Returns                     |
| ------------------------ | ------------------------------------------- | --------------------------- |
| `getElementById`         | Selects an element by its `id`.             | Single element object       |
| `getElementsByClassName` | Selects all elements with a specific class. | HTMLCollection (array-like) |
| `getElementsByTagName`   | Selects all elements with a specific tag.   | HTMLCollection (array-like) |

---

## 🧩 Example 1 — `getElementById`

```javascript
const heading = document.getElementById("title");
console.log(heading.textContent);
heading.style.color = "red";
```

---

## 🧩 Example 2 — `getElementsByClassName`

```javascript
const items = document.getElementsByClassName("item");
for (let i = 0; i < items.length; i++) {
  console.log(items[i].textContent);
  items[i].style.backgroundColor = "yellow";
}
```

---

## 🧩 Example 3 — `getElementsByTagName`

```javascript
const paragraphs = document.getElementsByTagName("p");
for (let p of paragraphs) {
  console.log(p.textContent);
  p.style.fontWeight = "bold";
}
```

---

💡 **Tip:**
✅ `getElementById` is **fastest** for selecting a single element.
✅ `getElementsByClassName` and `getElementsByTagName` return **live HTMLCollections** that update automatically when DOM changes.

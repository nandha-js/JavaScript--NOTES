# 📘 Topic: `document.querySelector` and `document.querySelectorAll` in JavaScript

`querySelector` and `querySelectorAll` are modern methods to **select HTML elements using CSS selectors**.

---

## 🧠 Key Points

| Method             | Description                                                | Returns                                      |
| ------------------ | ---------------------------------------------------------- | -------------------------------------------- |
| `querySelector`    | Selects the **first element** that matches a CSS selector. | Single element object or `null` if not found |
| `querySelectorAll` | Selects **all elements** that match a CSS selector.        | NodeList (can use `forEach`)                 |

---

## 🧩 Example 1 — `querySelector`

```javascript
const heading = document.querySelector("#title");
console.log(heading.textContent);
heading.style.color = "green";
```

---

## 🧩 Example 2 — `querySelectorAll`

```javascript
const items = document.querySelectorAll(".item");
items.forEach(item => {
  console.log(item.textContent);
  item.style.backgroundColor = "lightblue";
});
```

---

## 🧩 Example 3 — Using Complex CSS Selectors

```javascript
const firstButton = document.querySelector("button.submit-btn");
const allActiveLinks = document.querySelectorAll("a.active");
```

---

💡 **Tip:**
✅ `querySelector`/`querySelectorAll` allow flexible, CSS-style selections.
✅ Use `forEach` on NodeLists returned by `querySelectorAll` for easy iteration.
⚠️ `querySelector` only selects the **first matching element**.

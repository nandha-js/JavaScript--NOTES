# 📘 Topic: `append` and `appendChild` in JavaScript

Both `append` and `appendChild` are used to **add new elements or nodes** to the DOM, but they have slight differences.

---

## 🧠 Key Points

| Method        | Description                                                      | Can Append Strings? | Multiple Nodes?           |
| ------------- | ---------------------------------------------------------------- | ------------------- | ------------------------- |
| `appendChild` | Adds a **single node** as the last child of a parent element.    | ❌ No, only nodes    | ❌ Only one node at a time |
| `append`      | Adds **nodes or strings** as the last child of a parent element. | ✅ Yes               | ✅ Multiple nodes/strings  |

---

## 🧩 Example 1 — Using `appendChild`

```javascript
const parent = document.getElementById("container");
const newDiv = document.createElement("div");
newDiv.textContent = "I am a new div";
parent.appendChild(newDiv);
```

---

## 🧩 Example 2 — Using `append`

```javascript
const parent = document.getElementById("container");
const newDiv = document.createElement("div");
const newSpan = document.createElement("span");

newDiv.textContent = "Hello";
newSpan.textContent = " World";

// Append multiple nodes and text
parent.append(newDiv, newSpan, "! Welcome!");
```

---

💡 **Tip:**
✅ Use `appendChild` for **older browsers** and **single node** additions.
✅ Use `append` for **flexible appending**, including multiple nodes or strings.
⚠️ `append` does not return the appended element, while `appendChild` returns it.

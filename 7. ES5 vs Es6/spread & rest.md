# 📘 Topic: Spread & Rest Operators in JavaScript

The **Spread** (`...`) and **Rest** (`...`) operators use the same syntax but serve **different purposes** in JavaScript.

---

## 🧠 Key Points

| Operator       | Purpose                                                                |
| -------------- | ---------------------------------------------------------------------- |
| Spread (`...`) | Expands elements of an array or object into individual elements.       |
| Rest (`...`)   | Collects multiple elements into a single array in function parameters. |

---

## 🧩 Example 1 — Spread Operator with Arrays

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];
console.log(combined);
// Output: [1, 2, 3, 4, 5, 6]
```

---

## 🧩 Example 2 — Spread Operator with Objects

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const merged = { ...obj1, ...obj2 };
console.log(merged);
// Output: { a: 1, b: 2, c: 3, d: 4 }
```

---

## 🧩 Example 3 — Rest Operator in Functions

```javascript
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4));
// Output: 10
```

---

💡 **Tip:**
✅ Use **spread** to expand arrays/objects.
✅ Use **rest** to collect function arguments.
⚠️ Remember, both use the same syntax `...` but **context matters**.

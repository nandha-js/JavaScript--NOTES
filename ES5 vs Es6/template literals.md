# 📘 Topic: Template Literals in JavaScript

**Template Literals** allow embedding expressions and multi-line strings using backticks (`` ` ``) instead of quotes.

---

## 🧠 Key Points

| Feature                  | Description                                                           |
| ------------------------ | --------------------------------------------------------------------- |
| Syntax                   | Enclosed in backticks `` ` `` instead of single or double quotes.     |
| Expression Interpolation | Use `${expression}` to embed variables or expressions.                |
| Multi-line Strings       | Supports writing strings across multiple lines without concatenation. |
| Tagged Templates         | Allows custom processing of template literals with a function.        |

---

## 🧩 Example 1 — Basic Usage

```javascript
const name = "Nandha";
const age = 25;

const message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);
// Output: Hello, my name is Nandha and I am 25 years old.
```

---

## 🧩 Example 2 — Multi-line Strings

```javascript
const text = `This is line 1
This is line 2
This is line 3`;
console.log(text);
```

---

## 🧩 Example 3 — Expression Evaluation

```javascript
const a = 5;
const b = 10;
console.log(`Sum of ${a} and ${b} is ${a + b}`);
// Output: Sum of 5 and 10 is 15
```

---

💡 **Tip:**
✅ Use template literals for **dynamic strings** instead of concatenation.
✅ They make code **more readable** and **maintainable**.
✅ Great for multi-line strings and embedding expressions directly.

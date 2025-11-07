# 📘 Topic: Variables & Data Types in JavaScript

Variables are containers used to **store data values** in JavaScript.  
They can hold different types of data such as numbers, strings, objects, etc.

---

## 🧩 Declaring Variables

You can declare variables using `var`, `let`, or `const`:

```js
var name = "Nandha";   // Function-scoped, can be redeclared and reassigned
let age = 25;           // Block-scoped, can be reassigned but not redeclared
const country = "India"; // Block-scoped, cannot be reassigned
```

---

## 🧠 Data Types in JavaScript

| Type | Example | Description |
|------|----------|--------------|
| **String** | `"Hello"` | Text data enclosed in quotes |
| **Number** | `42`, `3.14` | Numeric values (integer or float) |
| **Boolean** | `true`, `false` | Represents logical values |
| **Undefined** | `let x;` | Declared but not assigned a value |
| **Null** | `let y = null;` | Represents intentional absence of value |
| **Object** | `{ name: "Nandha", age: 25 }` | Collection of key-value pairs |
| **Array** | `[1, 2, 3, 4]` | Ordered list of values |
| **Symbol** | `Symbol("id")` | Unique and immutable value |
| **BigInt** | `12345678901234567890n` | Used for very large integers |

---

## 🧩 Example — Using Variables and Data Types

```js
let userName = "Nandha";     // String
let userAge = 22;            // Number
let isActive = true;         // Boolean
let userScore;               // Undefined
let userData = null;         // Null
let skills = ["JS", "React"]; // Array
let details = { name: "Nandha", city: "Chennai" }; // Object

console.log(userName, userAge, isActive, userData, skills, details);
```

**Output:**  
```
Nandha 22 true null [ 'JS', 'React' ] { name: 'Nandha', city: 'Chennai' }
```

---

💡 **Tip:**  
- Use **`let`** when the value will change.  
- Use **`const`** for constants or fixed values.  
- Avoid **`var`**, as it can cause scope-related bugs.  
- Use `typeof variable` to check the data type.

---

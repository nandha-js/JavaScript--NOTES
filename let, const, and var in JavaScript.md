# 📘 Topic: let, const, and var in JavaScript

Used to **declare variables** in JavaScript.  
Each keyword behaves differently in **scope**, **reassignment**, and **hoisting**.

---

## 🧠 Key Differences

| Keyword   | Scope          | Can Reassign? | Can Redeclare? | Hoisted?                                |
|------------|----------------|---------------|----------------|-----------------------------------------|
| **var**   | Function Scope | ✅ Yes         | ✅ Yes          | ✅ Yes (initialized as `undefined`)      |
| **let**   | Block Scope    | ✅ Yes         | ❌ No           | ⚠️ Yes (but not usable before declared) |
| **const** | Block Scope    | ❌ No          | ❌ No           | ⚠️ Yes (but not usable before declared) |

---

## 🧩 Example 1 — Basic Usage
var a = 10;
let b = 20;
const c = 30;

a = 15; // ✅ allowed
b = 25; // ✅ allowed
// c = 35; ❌ Error - cannot reassign const

{
  var x = 1;
  let y = 2;
  const z = 3;
}

console.log(x); // ✅ 1
// console.log(y); ❌ Error - block scope
// console.log(z); ❌ Error - block scope

---

## 🧩 Example 2 — Scope Isolation
const varName = { name: "Nandha" };

function name() {
  const varName = { name: "Kumar" };
  console.log(varName);
}

name(); // 👉 { name: "Kumar" }
console.log(varName); // 👉 { name: "Nandha" }

---

💡 **Tip:**  
✅ Use **let** for variables that will change.  
🔒 Use **const** for values that remain constant.  
🚫 Avoid **var** — it’s old and can cause scope-related bugs due to function-level scoping.

---

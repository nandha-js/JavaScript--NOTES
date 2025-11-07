# 📘 Topic: Hoisting & Scope in JavaScript

Hoisting and scope determine **how variables and functions are accessed and executed** in JavaScript.

---

## 🧠 Key Points

| Feature            | Description                                                                                              |
| ------------------ | -------------------------------------------------------------------------------------------------------- |
| Hoisting           | JavaScript moves **declarations** of variables and functions to the top of their scope before execution. |
| Function Scope     | Variables declared with `var` are function-scoped; accessible throughout the function.                   |
| Block Scope        | Variables declared with `let` or `const` are block-scoped; accessible only inside the block `{}`.        |
| Temporal Dead Zone | For `let` and `const`, variables cannot be accessed before declaration, even though hoisted.             |
| Global Scope       | Variables declared outside any function or block are accessible anywhere.                                |

---

## 🧩 Example 1 — Hoisting with `var`

console.log(a); // 👉 undefined (declaration hoisted)
var a = 10;
console.log(a); // 👉 10

---

## 🧩 Example 2 — Hoisting with Functions

sayHello(); // 👉 "Hello!"

function sayHello() {
console.log("Hello!");
}

---

## 🧩 Example 3 — Scope with `let` and `const`

{
let x = 5;
const y = 10;
console.log(x); // 👉 5
console.log(y); // 👉 10
}
// console.log(x); ❌ Error - block scope
// console.log(y); ❌ Error - block scope

---

## 🧩 Example 4 — Function vs Block Scope

function testScope() {
var a = 1;
let b = 2;
if (true) {
var a = 10; // same variable
let b = 20; // different variable
console.log(a); // 👉 10
console.log(b); // 👉 20
}
console.log(a); // 👉 10
console.log(b); // 👉 2
}

testScope();

---

💡 **Tip:**

* ✅ `var` is function-scoped and hoisted.
* ✅ `let` and `const` are block-scoped and hoisted but cannot be used before declaration.
* 🔑 Understanding hoisting and scope helps avoid **undefined errors** and **unexpected behaviors**.

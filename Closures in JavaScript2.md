# 📘 Topic: Closures in JavaScript

A **closure** is a function that **remembers the variables from its outer scope** even after the outer function has finished executing.
Closures allow **data privacy** and **function factories**.

---

## 🧠 Key Points

| Feature | Description                                                                                                           |
| ------- | --------------------------------------------------------------------------------------------------------------------- |
| Closure | A function having access to variables in its outer scope, even after the outer function has returned.                 |
| Uses    | Data encapsulation, private variables, function factories, callbacks.                                                 |
| Access  | Inner function can access **outer function’s variables** but outer function cannot access inner function’s variables. |

---

## 🧩 Example 1 — Basic Closure

function outer() {
let count = 0;
function inner() {
count++;
console.log("Count: " + count);
}
return inner;
}

const counter = outer();
counter(); // 👉 Count: 1
counter(); // 👉 Count: 2
counter(); // 👉 Count: 3

---

## 🧩 Example 2 — Data Privacy

function secretPassword() {
let password = "12345";
return function() {
console.log("Password is: " + password);
}
}

const showPassword = secretPassword();
showPassword(); // 👉 Password is: 12345

---

💡 **Tip:**
✅ Closures are useful to **preserve state** across function calls and create **private variables**.
⚠️ Be careful with memory usage — closures keep outer scope in memory as long as they exist.


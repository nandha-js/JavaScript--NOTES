# 📘 Topic: Functions in JavaScript

Functions are **blocks of code** designed to perform a task. They can be **defined once** and **called multiple times**.

---

## 🧠 Key Points

| Feature                | Description                                                   |
| ---------------------- | ------------------------------------------------------------- |
| Function Declaration   | `function name(params) { /* code */ }`                        |
| Function Expression    | Assign a function to a variable `const fn = function() {}`    |
| Arrow Function         | Shorter syntax: `const fn = () => {}`                         |
| Parameters & Arguments | Inputs passed to functions to perform operations.             |
| Return Value           | Functions can return a value using `return`.                  |
| Scope                  | Functions create their own scope; variables inside are local. |

---

## 🧩 Example 1 — Function Declaration

function greet(name) {
return "Hello, " + name + "!";
}

console.log(greet("Nandha")); // 👉 Hello, Nandha!

---

## 🧩 Example 2 — Function Expression

const add = function(a, b) {
return a + b;
};

console.log(add(5, 10)); // 👉 15

---

## 🧩 Example 3 — Arrow Function

const multiply = (x, y) => x * y;

console.log(multiply(4, 5)); // 👉 20

---

## 🧩 Example 4 — Function Without Return

function sayHi() {
console.log("Hi there!");
}

sayHi(); // 👉 Hi there!

---

💡 **Tip:**

* Use **function declarations** when you want hoisting.
* Use **arrow functions** for concise syntax, especially in callbacks.
* Always name functions clearly to reflect their purpose.

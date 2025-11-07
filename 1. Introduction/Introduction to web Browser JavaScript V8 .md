# 📘 Topic: Introduction to Web Browser JavaScript & V8 Engine

JavaScript is a **programming language** that makes web pages **interactive**.  
It runs directly inside web browsers through their **JavaScript engines** — one of the most powerful being **V8**.

---

## 🌐 What Happens in a Web Browser?

When you open a web page:
1. The **HTML** defines the structure.
2. The **CSS** defines the design.
3. The **JavaScript** adds logic and interactivity.

The browser’s **JavaScript engine** executes the JS code — handling things like animations, forms, API calls, and user events.

---

## ⚙️ What is the V8 Engine?

The **V8 Engine** is Google’s open-source JavaScript engine, developed for **Google Chrome** and **Node.js**.

### 🧠 How it Works:
- V8 takes the JavaScript code.
- Converts it into **machine code** using a **Just-In-Time (JIT)** compiler.
- Executes it directly — making it extremely fast.

---

## 🧩 Key Features of V8

| Feature | Description |
|----------|--------------|
| **Fast Execution** | Converts JS into machine code instead of interpreting line by line. |
| **Memory Management** | Automatically cleans up unused memory (garbage collection). |
| **Cross-Platform** | Runs on browsers and on servers (Node.js). |
| **Written in C++** | Highly optimized and used beyond browsers. |

---

## ✨ Example

```js
// Simple JavaScript code running inside a browser
const name = "Nandha";
console.log(`Hello ${name}, welcome to JavaScript powered by V8!`);

## 💡 Tip:

The same V8 engine that runs inside Google Chrome is also used in Node.js,
allowing JavaScript to run both on browsers and servers!
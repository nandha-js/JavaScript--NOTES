# 📘 Topic: `for` Loop in JavaScript

The `for` loop is used to **repeat a block of code** a specific number of times.

---

## 🧠 Key Points

| Feature             | Description                                                     |
| ------------------- | --------------------------------------------------------------- |
| Syntax              | `for (initialization; condition; increment) { // code }`        |
| Initialization      | Sets the starting point of the loop.                            |
| Condition           | The loop continues while this condition is true.                |
| Increment/Decrement | Updates the loop counter after each iteration.                  |
| Scope               | Variables declared with `let` inside the loop are block-scoped. |

---

## 🧩 Example 1 — Basic `for` Loop

for (let i = 0; i < 5; i++) {
console.log("Iteration: " + i);
}

// Output:
// Iteration: 0
// Iteration: 1
// Iteration: 2
// Iteration: 3
// Iteration: 4

---

## 🧩 Example 2 — Looping Over an Array

const fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
console.log(fruits[i]);
}

// Output:
// Apple
// Banana
// Mango

---

## 🧩 Example 3 — Nested `for` Loop

for (let i = 1; i <= 3; i++) {
for (let j = 1; j <= 2; j++) {
console.log(`i=${i}, j=${j}`);
}
}

// Output:
// i=1, j=1
// i=1, j=2
// i=2, j=1
// i=2, j=2
// i=3, j=1
// i=3, j=2

---

💡 **Tip:**

* Use `for` loops when you know **exactly how many times** you want to repeat a block of code.
* Combine with arrays or nested loops for structured iteration.

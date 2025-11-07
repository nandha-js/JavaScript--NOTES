# 📘 Topic: `while` & `do...while` Loops in JavaScript

`while` and `do...while` loops are used to **repeat a block of code** while a condition is true. The difference is in when the condition is checked.

---

## 🧠 Key Points

| Feature      | Description                                                                                        |
| ------------ | -------------------------------------------------------------------------------------------------- |
| `while`      | Checks the condition **before** executing the loop body.                                           |
| `do...while` | Executes the loop body **once first**, then checks the condition.                                  |
| Use Case     | Use `while` when the number of iterations is unknown; `do...while` ensures at least one execution. |

---

## 🧩 Example 1 — `while` Loop

let i = 0;
while (i < 5) {
console.log("Iteration: " + i);
i++;
}

// Output:
// Iteration: 0
// Iteration: 1
// Iteration: 2
// Iteration: 3
// Iteration: 4

---

## 🧩 Example 2 — `do...while` Loop

let j = 0;
do {
console.log("Iteration: " + j);
j++;
} while (j < 5);

// Output:
// Iteration: 0
// Iteration: 1
// Iteration: 2
// Iteration: 3
// Iteration: 4

---

## 🧩 Example 3 — Difference Between `while` and `do...while`

let k = 10;

while (k < 5) {
console.log("This will NOT run");
}

do {
console.log("This will run once");
} while (k < 5);

// Output:
// This will run once

---

💡 **Tip:**

* Use `while` for **condition-first checks**.
* Use `do...while` for **execute-first, then check** scenarios.

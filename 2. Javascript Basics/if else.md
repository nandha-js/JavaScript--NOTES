# 📘 Topic: `if...else` Statements in JavaScript

The `if...else` statement is used to **execute code based on a condition**. It allows branching of logic.

---

## 🧠 Key Points

| Feature           | Description                                                                   |
| ----------------- | ----------------------------------------------------------------------------- |
| `if`              | Executes a block of code if the condition is true.                            |
| `else`            | Executes a block of code if the `if` condition is false.                      |
| `else if`         | Checks additional conditions if previous `if`/`else if` conditions are false. |
| Boolean Condition | The condition inside `if` must evaluate to **true** or **false**.             |

---

## 🧩 Example 1 — Basic `if...else`

let age = 18;

if (age >= 18) {
console.log("You are an adult.");
} else {
console.log("You are a minor.");
}

// Output:
// You are an adult.

---

## 🧩 Example 2 — Using `else if`

let score = 85;

if (score >= 90) {
console.log("Grade A");
} else if (score >= 75) {
console.log("Grade B");
} else if (score >= 50) {
console.log("Grade C");
} else {
console.log("Fail");
}

// Output:
// Grade B

---

## 🧩 Example 3 — Nested `if` Statements

let num = 10;

if (num > 0) {
if (num % 2 === 0) {
console.log("Positive even number");
} else {
console.log("Positive odd number");
}
} else {
console.log("Number is zero or negative");
}

// Output:
// Positive even number

---

💡 **Tip:**

* Always use **`===`** for strict equality to avoid unexpected type coercion.
* Use `else if` for multiple conditions.
* Nest `if` statements carefully to keep code readable.

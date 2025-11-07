# 📘 **Topic: Operators — Arithmetic & Logical in JavaScript**

Operators are special symbols used to **perform operations on values and variables**.  
They help in performing calculations, comparisons, and logical decisions in programs. ⚙️

---

## 🧮 **Arithmetic Operators**

Used to perform mathematical calculations on numeric data.

| Operator | Description | Example | Result |
|---------:|-------------|---------:|:------:|
| `+` | Addition | `5 + 3` | `8` |
| `-` | Subtraction | `5 - 3` | `2` |
| `*` | Multiplication | `5 * 3` | `15` |
| `/` | Division | `10 / 2` | `5` |
| `%` | Modulus (Remainder) | `10 % 3` | `1` |
| `**` | Exponentiation | `2 ** 3` | `8` |
| `++` | Increment | `let a = 5; a++` → `6` |
| `--` | Decrement | `let a = 5; a--` → `4` |

---

## 🧩 **Example 1 — Basic Arithmetic**

let x = 10, y = 3;

console.log(x + y); // 13  
console.log(x - y); // 7  
console.log(x * y); // 30  
console.log(x / y); // 3.333...  
console.log(x % y); // 1  
console.log(x ** y); // 1000

---

## 🧩 **Example 2 — Increment & Decrement (Pre / Post behavior)**

let count = 5;  
console.log(count++); // prints 5 (post-increment returns old value), count becomes 6  
console.log(++count); // prints 7 (pre-increment increments then returns)  

count = 5;  
console.log(count--); // prints 5 (post-decrement), count becomes 4  
console.log(--count); // prints 3 (pre-decrement)

---

## 🔢 **Operator Precedence (important)**

Some operators run before others. Example: `*` and `/` have higher precedence than `+` and `-`.

let result = 2 + 3 * 4;  
// multiplication first → 3*4 = 12; then 2 + 12 = 14

Use parentheses to control order: `(2 + 3) * 4` → 20

---

## 🔍 **Logical Operators**

Used to combine or manipulate **boolean values (true/false)**.

| Operator | Description | Example | Result |
|---------:|-------------|--------:|:------:|
| `&&` | AND — True only if both are true | `true && false` | `false` |
| `||` | OR — True if at least one is true | `true || false` | `true` |
| `!` | NOT — Reverses boolean value | `!true` | `false` |

---

## 🧩 **Example 3 — Logical Conditions**

let isLoggedIn = true;  
let isAdmin = false;

if (isLoggedIn && isAdmin) {  
  console.log("Welcome, Admin!");  
} else if (isLoggedIn || isAdmin) {  
  console.log("Welcome, User!");  
} else {  
  console.log("Please log in.");  
}

---

## 🧩 **Example 4 — Combining Arithmetic & Logical**

let score = 75;  
let passed = score >= 60 && score <= 100;  
console.log(passed); // true

let a = 5, b = 10;  
let check = (a + b > 10) && (b - a === 5);  
console.log(check); // true

---

💡 **Tip:**  
✅ Use parentheses `()` to make precedence explicit and avoid bugs.  
✅ Use **`let`/`const`** with operators for clear scoping.  
✅ Combine arithmetic and logical operators to build powerful conditions (e.g., range checks).  
⚠️ Be careful with `==` vs `===` (use `===` for strict equality to avoid unexpected type coercion).

---

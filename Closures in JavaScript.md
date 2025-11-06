# 📘 Topic: Closures in JavaScript

A **closure** is a function that remembers variables from its outer scope even after that outer function has finished executing.  
Closures allow functions to have **private variables** and maintain **state** between calls.

---

## 💡 Tip:
Closures are created automatically whenever a function accesses variables outside its own scope.  
They are essential for **data privacy**, **function factories**, and **modular code design**.

---

## 🧩 Syntax
function outerFunction() {
    let outerVariable = "I'm from the outer scope";

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const closureFunc = outerFunction();
closureFunc(); // Output: I'm from the outer scope

---

## 🧠 Key Points
- A closure gives access to an outer function’s scope from an inner function.
- Useful for creating **private variables** and **persistent states**.
- Each closure has its own lexical environment.
- Variables used inside closures are not garbage collected until no reference remains.

---

## ✨ Examples

### 🧩 Example 1 — Private Counter
function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

---

### 🧩 Example 2 — Parameter Retention
function greet(name) {
    return function(message) {
        console.log(`${message}, ${name}!`);
    };
}

const greetNandha = greet("Nandha");
greetNandha("Hello"); // Output: Hello, Nandha!

---

### 🧩 Example 3 — setTimeout Closure
function delayedMessage() {
    for (var i = 1; i <= 3; i++) {
        setTimeout(function() {
            console.log(i);
        }, i * 1000);
    }
}
delayedMessage();
// Output: 4 4 4 (because var is function-scoped)

function fixedDelayedMessage() {
    for (let i = 1; i <= 3; i++) {
        setTimeout(function() {
            console.log(i);
        }, i * 1000);
    }
}
fixedDelayedMessage();
// Output: 1 2 3 (because let is block-scoped)

---

## ✅ Real-World Uses
- Data encapsulation in JavaScript modules.
- Maintaining private states (e.g., counters, cache, config).
- Function factories for generating custom logic.
- “Once-only” functions to prevent re-initialization.

---

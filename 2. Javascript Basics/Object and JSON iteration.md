# 📘 Topic: Object & JSON Iteration in JavaScript

Objects store data in **key-value pairs**. JSON is a text-based format to represent objects. Iterating over them helps access or manipulate their data.

---

## 🧠 Key Points

| Feature   | Description                                                                                                     |
| --------- | --------------------------------------------------------------------------------------------------------------- |
| Object    | Collection of key-value pairs `{ key: value }`.                                                                 |
| JSON      | JavaScript Object Notation, used to exchange data between client and server.                                    |
| Iteration | Looping over keys, values, or entries using `for...in`, `Object.keys()`, `Object.values()`, `Object.entries()`. |
| Mutable   | Object properties can be updated, added, or deleted.                                                            |

---

## 🧩 Example 1 — `for...in` Loop

const person = { name: "Nandha", age: 25, city: "Chennai" };

for (let key in person) {
console.log(key + ": " + person[key]);
}

// Output:
// name: Nandha
// age: 25
// city: Chennai

---

## 🧩 Example 2 — Using `Object.keys()`

Object.keys(person).forEach(key => {
console.log(key + ": " + person[key]);
});

---

## 🧩 Example 3 — Using `Object.values()`

Object.values(person).forEach(value => {
console.log(value);
});

// Output:
// Nandha
// 25
// Chennai

---

## 🧩 Example 4 — Using `Object.entries()`

Object.entries(person).forEach(([key, value]) => {
console.log(key + " = " + value);
});

// Output:
// name = Nandha
// age = 25
// city = Chennai

---

💡 **Tip:**

* Use `for...in` for basic iteration over object keys.
* Use `Object.keys()`, `Object.values()`, and `Object.entries()` for cleaner and more flexible iteration.
* JSON objects can be iterated after parsing using `JSON.parse()`.


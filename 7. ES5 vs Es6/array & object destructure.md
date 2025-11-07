# 📘 Topic: Array & Object Destructuring in JavaScript

**Destructuring** allows unpacking values from arrays or properties from objects into **distinct variables** for cleaner and more readable code.

---

## 🧠 Key Points

| Type                 | Purpose                                                                       |
| -------------------- | ----------------------------------------------------------------------------- |
| Array Destructuring  | Extract values from an array into variables based on **position**.            |
| Object Destructuring | Extract properties from an object into variables based on **property names**. |
| Default Values       | Assign default values if the element or property is `undefined`.              |
| Nested Destructuring | Extract values from nested arrays or objects.                                 |

---

## 🧩 Example 1 — Array Destructuring

```javascript
const numbers = [1, 2, 3, 4];
const [a, b, ...rest] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4]
```

---

## 🧩 Example 2 — Object Destructuring

```javascript
const person = {
  name: "Nandha",
  age: 25,
  address: { city: "Chennai", state: "TN" }
};

const { name, age, address: { city } } = person;
console.log(name); // Nandha
console.log(age); // 25
console.log(city); // Chennai
```

---

## 🧩 Example 3 — Default Values

```javascript
const arr = [10];
const [x, y = 5] = arr;
console.log(x); // 10
console.log(y); // 5

const obj = { name: "Nandha" };
const { name: n, age: a = 30 } = obj;
console.log(n); // Nandha
console.log(a); // 30
```

---

💡 **Tip:**
✅ Destructuring makes code more readable and concise.
✅ Use default values to avoid `undefined`.
✅ Great for **function parameters** and **API response handling**.

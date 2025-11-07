# 📘 Topic: Callback & Callback Hell in JavaScript

A **callback** is a function passed as an argument to another function to be executed **later**, often after an asynchronous operation. **Callback Hell** occurs when multiple nested callbacks make the code difficult to read and maintain.

---

## 🧠 Key Points

| Concept          | Description                                                             |
| ---------------- | ----------------------------------------------------------------------- |
| Callback         | Function passed as an argument and executed after some operation.       |
| Asynchronous Use | Often used in operations like API calls, setTimeout, or event handling. |
| Callback Hell    | Deeply nested callbacks making code **hard to read** and **debug**.     |
| Solution         | Use Promises or async/await to flatten the structure.                   |

---

## 🧩 Example 1 — Basic Callback

```javascript
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

greet("Nandha", function() {
  console.log("Callback executed!");
});
```

---

## 🧩 Example 2 — Callback Hell

```javascript
setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
      setTimeout(() => {
        console.log("Step 4");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
```

This nesting becomes difficult to manage as tasks increase.

---

💡 **Tip:**
✅ Use callbacks for simple async tasks.
✅ For multiple sequential async operations, prefer **Promises** or **async/await** to avoid callback hell.

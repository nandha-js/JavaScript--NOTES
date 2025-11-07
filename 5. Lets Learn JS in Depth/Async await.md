# 📘 Topic: Async & Await in JavaScript

**Async/Await** is a modern way to handle asynchronous operations in JavaScript, making the code look **synchronous** while still performing asynchronously.

---

## 🧠 Key Points

| Feature        | Description                                                               |
| -------------- | ------------------------------------------------------------------------- |
| async Function | Declaring a function with `async` makes it return a **Promise**.          |
| await Keyword  | Pauses the execution of an async function until the **Promise resolves**. |
| Error Handling | Use `try...catch` to handle errors in async functions.                    |
| Advantages     | Cleaner code, avoids callback hell, easier to read than `.then()` chains. |

---

## 🧩 Example 1 — Basic Async/Await

```javascript
async function fetchData() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched!"), 2000);
  });

  let result = await promise;
  console.log(result);
}

fetchData();
```

---

## 🧩 Example 2 — Async/Await with try/catch

```javascript
async function fetchData() {
  try {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => reject("Error occurred!"), 2000);
    });

    let result = await promise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
```

---

💡 **Tip:**
✅ Use async/await for **sequential asynchronous operations**.
✅ Always handle errors with `try...catch`.
✅ Makes code easier to read compared to nested callbacks or promise chaining.

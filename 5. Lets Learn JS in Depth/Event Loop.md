# 📘 Topic: Event Loop in JavaScript

The **Event Loop** is a mechanism that allows JavaScript to **perform non-blocking asynchronous operations** despite being single-threaded.
It continuously checks the **call stack** and **task queue** to decide what to execute next.

---

## 🧠 Key Points

| Concept                     | Description                                                                                            |
| --------------------------- | ------------------------------------------------------------------------------------------------------ |
| Call Stack                  | Keeps track of function executions. LIFO (Last In, First Out).                                         |
| Task Queue / Callback Queue | Holds functions to be executed after the current stack is empty.                                       |
| Event Loop                  | Moves functions from the queue to the call stack when stack is empty, enabling asynchronous execution. |
| Asynchronous Functions      | `setTimeout`, `fetch`, Promises, etc., use the event loop to execute after current code.               |

---

## 🧩 Example 1 — setTimeout

```javascript
console.log("Start");

setTimeout(function() {
  console.log("Inside Timeout");
}, 0);

console.log("End");
```

**Output:**

```
Start
End
Inside Timeout
```

Explanation: Even with `0ms`, the callback waits until the call stack is empty.

---

## 🧩 Example 2 — Promises

```javascript
console.log("Start");

Promise.resolve().then(() => console.log("Promise resolved"));

console.log("End");
```

**Output:**

```
Start
End
Promise resolved
```

Explanation: Promise callbacks go to the **microtask queue**, which runs before the next task in the event loop.

---

💡 **Tip:**
✅ The event loop ensures JavaScript can handle **async tasks** like timers, API calls, and UI events without blocking.
⚠️ Understanding it helps debug asynchronous behavior and avoid race conditions.

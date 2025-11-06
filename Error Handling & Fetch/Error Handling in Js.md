# 📘 Topic: Error Handling in JavaScript

Error handling in JavaScript allows developers to **catch and handle exceptions** to prevent program crashes.

---

## 🧠 Key Points

| Feature      | Description                                                            |
| ------------ | ---------------------------------------------------------------------- |
| try...catch  | Used to **execute code** and **catch errors** if they occur.           |
| throw        | Allows manually **throwing an error** with a custom message.           |
| finally      | Code block that **always executes**, whether an error occurred or not. |
| Error Object | Contains details about the error (`name`, `message`).                  |

---

## 🧩 Example 1 — try...catch

```javascript
try {
  let result = riskyOperation(); // may throw error
  console.log(result);
} catch (error) {
  console.log("An error occurred: " + error.message);
}
```

---

## 🧩 Example 2 — throw new Error

```javascript
function checkAge(age) {
  if (age < 18) {
    throw new Error("Age must be 18 or older");
  }
  return "Access granted";
}

try {
  console.log(checkAge(15));
} catch (error) {
  console.log(error.message);
}
```

---

## 🧩 Example 3 — finally

```javascript
try {
  console.log("Trying something risky");
  // risky code here
} catch (error) {
  console.log(error);
} finally {
  console.log("This always runs");
}
```

---

💡 **Tip:**
✅ Always use **try...catch** around code that may fail.
✅ Use **throw** to signal custom errors.
✅ Use **finally** for cleanup tasks that must run regardless of errors.

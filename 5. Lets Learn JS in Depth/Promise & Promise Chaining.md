# 📘 Topic: Promise & Promise Chaining in JavaScript

A **Promise** is an object representing the **eventual completion or failure** of an asynchronous operation. Promise chaining allows executing multiple asynchronous tasks in sequence.

---

## 🧠 Key Points

| Feature   | Description                                                       |
| --------- | ----------------------------------------------------------------- |
| Promise   | Represents an async operation that may **resolve** or **reject**. |
| States    | `Pending` → `Fulfilled` → `Rejected`                              |
| then()    | Executes when the promise is **fulfilled**.                       |
| catch()   | Executes when the promise is **rejected**.                        |
| finally() | Executes **regardless of outcome**.                               |
| Chaining  | Multiple `then()` calls to execute async tasks in sequence.       |

---

## 🧩 Example 1 — Basic Promise

```javascript
const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if(success) {
    resolve("Promise Resolved!");
  } else {
    reject("Promise Rejected!");
  }
});

myPromise
  .then(message => console.log(message))
  .catch(error => console.log(error));
```

---

## 🧩 Example 2 — Promise Chaining

```javascript
new Promise((resolve, reject) => {
  resolve(5);
})
.then(result => {
  console.log(result); // 5
  return result * 2;
})
.then(result => {
  console.log(result); // 10
  return result + 3;
})
.then(result => {
  console.log(result); // 13
})
.catch(error => console.log(error));
```

---

💡 **Tip:**
✅ Use Promises to manage asynchronous operations **without callback hell**.
✅ Promise chaining allows sequential async operations.
⚠️ Always use `catch()` at the end to handle errors.




```isHalwathere = false;

function waitInQueuw() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isHalwathere) {
        resolve("Buy 1 KG halwa");
      } else {
        reject("My Bad sorry");
      }
    }, 3000);
  });
}

async function buyHalwa() {
  try {
    let result = await waitInQueuw();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

buyHalwa();

```
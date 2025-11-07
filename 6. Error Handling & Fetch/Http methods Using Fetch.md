# 📘 Topic: HTTP Methods Using Fetch in JavaScript

The `fetch()` API allows making **HTTP requests** in JavaScript using different methods like `GET`, `POST`, `PUT`, and `DELETE`.

---

## 🧠 Key Points

| Method | Description                          |
| ------ | ------------------------------------ |
| GET    | Retrieves data from a server.        |
| POST   | Sends new data to the server.        |
| PUT    | Updates existing data on the server. |
| DELETE | Deletes data from the server.        |

---

## 🧩 Example 1 — GET Request

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

---

## 🧩 Example 2 — POST Request

```javascript
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ title: 'New Post', body: 'Hello world', userId: 1 })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

---

## 🧩 Example 3 — PUT Request

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ id: 1, title: 'Updated Post', body: 'Updated content', userId: 1 })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

---

## 🧩 Example 4 — DELETE Request

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'
})
.then(() => console.log('Post deleted'))
.catch(error => console.error('Error:', error));
```

---

💡 **Tip:**
✅ Use the `headers` option to set content types and authorization.
✅ Always handle errors using `.catch()` or try/catch with async/await.
✅ `fetch` returns a **Promise**, so you can chain `.then()` or use `async/await`.

# 📘 Topic: Request & Response Cycle in JavaScript (HTTP)

The **Request-Response Cycle** describes how the **client (browser or app)** communicates with the **server** over the **HTTP protocol**.

Every time you visit a website or call an API, this cycle happens behind the scenes.

---

## 🔄 How It Works — Step by Step

| Step | Phase | Description |
|------|--------|-------------|
| **1️⃣** | **Client Sends Request** | The browser or frontend sends an HTTP request (using `fetch()`, `axios`, or a form submission). |
| **2️⃣** | **DNS Resolution** | The domain name (like `example.com`) is converted to an IP address. |
| **3️⃣** | **Server Receives Request** | The server (e.g., Node.js, Express) receives and processes the request. |
| **4️⃣** | **Server Processes Data** | Server runs backend logic, interacts with the database, and prepares the response. |
| **5️⃣** | **Server Sends Response** | The server sends back a response with a **status code**, **headers**, and **body**. |
| **6️⃣** | **Client Receives Response** | The browser or app displays the data (like rendering HTML or showing JSON). |

---

## 🧩 Example — Request & Response Using Fetch

```js
// Client sends a GET request
fetch("https://api.example.com/users")
  .then(response => {
    console.log("Status:", response.status); // 👉 e.g., 200 OK
    return response.json();
  })
  .then(data => console.log("Data:", data))
  .catch(error => console.error("Error:", error));


import express from "express";
const app = express();

app.get("/users", (req, res) => {
  res.status(200).json({ message: "Users fetched successfully!" });
});

app.listen(3000, () => console.log("Server running on port 3000"));


```
## ⚙️ Anatomy of an HTTP Request
| Component   | Example                          | Description                            |
| ----------- | -------------------------------- | -------------------------------------- |
| **Method**  | `GET`, `POST`, `PUT`, `DELETE`   | Defines the action type.               |
| **URL**     | `/api/users`                     | Path of the resource.                  |
| **Headers** | `Content-Type: application/json` | Metadata about the request.            |
| **Body**    | `{ "name": "Nandha" }`           | Sent only with POST/PUT/PATCH methods. |

## ⚙️ Anatomy of an HTTP Response

| Component       | Example                                       | Description                       |
| --------------- | --------------------------------------------- | --------------------------------- |
| **Status Code** | `200 OK`, `404 Not Found`, `500 Server Error` | Indicates success or failure.     |
| **Headers**     | `Content-Type: application/json`              | Metadata about the response.      |
| **Body**        | `{ "message": "Success" }`                    | The actual content/data returned. |


## 💡 Tip:
✅ Always handle both success and error responses.
⚙️ Use proper HTTP status codes (200, 201, 400, 404, 500) to make debugging easier.
🚀 Understanding the request-response cycle is key to building APIs and frontends that communicate effectively.
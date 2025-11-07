# 📘 Topic: Evolution of HTTP & HTTP Methods

HTTP (**HyperText Transfer Protocol**) is the foundation of communication on the web.  
It defines how data is requested and transmitted between clients (like browsers) and servers.

---

## 🕰️ Evolution of HTTP

| Version | Year | Description |
|----------|------|--------------|
| **HTTP/0.9** | 1991 | The first version of HTTP. Supported only simple `GET` requests. No headers or status codes. |
| **HTTP/1.0** | 1996 | Added headers, status codes, and support for content types (HTML, images, etc.). Each request opened a new TCP connection. |
| **HTTP/1.1** | 1997 | Introduced persistent connections (keep-alive), chunked transfer encoding, and caching improvements. |
| **HTTP/2** | 2015 | Improved performance with multiplexing, header compression, and binary framing. |
| **HTTP/3** | 2022 | Built on QUIC (UDP-based) for faster, more reliable connections with lower latency. |

---

## 🌐 What Is an HTTP Method?

HTTP Methods define the **type of action** to be performed on a resource (API endpoint or URL).  
They help servers understand what clients want to do.

---

## 🚀 Common HTTP Methods

| Method | Description | Example |
|---------|--------------|----------|
| **GET** | Retrieve data from the server. | `GET /users` |
| **POST** | Send data to create a new resource. | `POST /users` |
| **PUT** | Update an existing resource entirely. | `PUT /users/1` |
| **PATCH** | Partially update an existing resource. | `PATCH /users/1` |
| **DELETE** | Delete a resource. | `DELETE /users/1` |
| **HEAD** | Same as GET, but returns only headers. | `HEAD /users` |
| **OPTIONS** | Lists supported methods for a resource. | `OPTIONS /users` |

---

## 🧩 Example — Using HTTP Methods via Fetch API

```js
// GET - Retrieve data
fetch("https://api.example.com/users")
  .then(res => res.json())
  .then(data => console.log(data));

// POST - Create new data
fetch("https://api.example.com/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Nandha", role: "Developer" })
});

// PUT - Update entire data
fetch("https://api.example.com/users/1", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Kumar", role: "Designer" })
});

// DELETE - Remove data
fetch("https://api.example.com/users/1", { method: "DELETE" });


## 💡 Tip:
✅ Use GET for fetching data.
📝 Use POST for creating data.
🔁 Use PUT/PATCH for updating data.
🗑️ Use DELETE for removing data.

⚡ Modern applications use HTTP/2 or HTTP/3 for better speed, security, and reliability.
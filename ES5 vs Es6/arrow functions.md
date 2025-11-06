# 📘 Topic: Arrow Functions in JavaScript

**Arrow functions** provide a shorter syntax to define functions in JavaScript and **do not have their own `this`**.

---

## 🧠 Key Points

| Feature                        | Description                                                  |
| ------------------------------ | ------------------------------------------------------------ |
| Syntax                         | `(parameters) => { statements }`                             |
| Single Expression              | Can omit braces `{}` and `return` for single expressions.    |
| `this` Keyword                 | Arrow functions inherit `this` from their **lexical scope**. |
| Cannot be used as constructors | `new` with arrow functions will throw an error.              |

---

## 🧩 Example 1 — Basic Arrow Function

```javascript
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

greet("Nandha");
// Output: Hello, Nandha!
```

---

## 🧩 Example 2 — Single Expression

```javascript
const sum = (a, b) => a + b;
console.log(sum(5, 10));
// Output: 15
```

---

## 🧩 Example 3 — Arrow Function with `this`

```javascript
const person = {
  name: "Nandha",
  greet: function() {
    setTimeout(() => {
      console.log(`Hi, I'm ${this.name}`);
    }, 1000);
  }
};

person.greet();
// Output (after 1 second): Hi, I'm Nandha
```

---

💡 **Tip:**
✅ Use arrow functions for **shorter syntax** and **lexical `this`**.
⚠️ Do not use arrow functions for **object methods** if you need `this` to refer to the object itself.
✅ Great for **callbacks**, `map`, `filter`, and `reduce` functions.

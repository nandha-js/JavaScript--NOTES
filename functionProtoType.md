# 📘 Topic: `this`, `bind()`, `call()`, and `apply()` in JavaScript

JavaScript provides multiple ways to manage **function context (`this`)** — using `bind()`, `call()`, and `apply()`.
Each method helps control **how and when** a function runs, and **what `this` refers to**.

---

## 🧠 Key Points

| Feature   | Description                                                                                |
| --------- | ------------------------------------------------------------------------------------------ |
| `this`    | Refers to the current object executing the code.                                           |
| `bind()`  | Creates a **new function** with `this` fixed; does **not run immediately**.                |
| `call()`  | Calls a function **immediately** with a specific `this`; arguments passed **one by one**.  |
| `apply()` | Calls a function **immediately** with a specific `this`; arguments passed as an **array**. |

---

## 🧩 Example 1 — Function Nesting

function fun1() {
var x = 10;
fun2();

function fun2() {
var y = 20;
fun3();

```
function fun3() {  
  var z = 30;  
  console.log(x, y, z);  
}  
```

}
}

fun1(); // Output: 10 20 30

---

## 🧩 Example 2 — Using `bind()`

var person = {
firstName: "Nandhakumar",
lastName: "Perumal",

get: function () {
console.log("outer: " + this.firstName + " " + this.lastName);
var print = function(role) {
console.log("inner: " + this.firstName + " " + this.lastName + ". I am a " + role);
}.bind(this, "Developer");
print();
}
};

person.get();
// Output:
// outer: Nandhakumar Perumal
// inner: Nandhakumar Perumal. I am a Developer

---

## 🧩 Example 3 — Using `call()`

var person = {
firstName: "Nandhakumar",
lastName: "Perumal",

get: function () {
console.log("outer: " + this.firstName + " " + this.lastName);
var print = function(role) {
console.log("inner: " + this.firstName + " " + this.lastName + ". I am a " + role);
}.call(this, "Developer");
}
};

person.get();
// Output:
// outer: Nandhakumar Perumal
// inner: Nandhakumar Perumal. I am a Developer

---

## 🧩 Example 4 — Using `apply()`

let person = {
firstName: "Nandhakumar",
lastName: "Perumal",

get: function () {
console.log("outer: " + this.firstName + " " + this.lastName);
let print = function(role, type) {
console.log("inner: " + this.firstName + " " + this.lastName + ". I am a " + role + " in " + type);
}.apply(this, ["Developer", "React"]);
}
};

person.get();
// Output:
// outer: Nandhakumar Perumal
// inner: Nandhakumar Perumal. I am a Developer in React

---

💡 **Tip:**

* 🔗 `bind()` → Save function for later with fixed `this`.
* ⚡ `call()` → Execute immediately with custom `this`.
* 📦 `apply()` → Execute immediately using an argument array.

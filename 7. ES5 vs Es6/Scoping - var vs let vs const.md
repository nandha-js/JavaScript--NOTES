# 📘 Topic: Scoping - var vs let vs const in JavaScript

Variables in JavaScript have **different scopes** depending on whether you use `var`, `let`, or `const`.

---

## 🧠 Key Points

| Keyword   | Scope          | Can Reassign? | Can Redeclare? | Hoisted?                           |
| --------- | -------------- | ------------- | -------------- | ---------------------------------- |
| **var**   | Function Scope | ✅ Yes         | ✅ Yes          | ✅ Yes (initialized as `undefined`) |
| **let**   | Block Scope    | ✅ Yes         | ❌ No           | ⚠️ Yes (Temporal Dead Zone)        |
| **const** | Block Scope    | ❌ No          | ❌ No           | ⚠️ Yes (Temporal Dead Zone)        |

---

## 🧩 Example 1 — var Scope

```javascript
function varScope() {
  if(true) {
    var x = 10;
  }
  console.log(x); // 10 - accessible outside the block
}
varScope();
```

---

## 🧩 Example 2 — let & const Scope

```javascript
function blockScope() {
  if(true) {
    let y = 20;
    const z = 30;
    console.log(y, z); // 20 30
  }
  // console.log(y, z); // ❌ Error - not accessible outside block
}
blockScope();
```

---

## 🧩 Example 3 — Reassign & Redeclare

```javascript
var a = 5;
a = 10; // ✅ allowed
var a = 15; // ✅ allowed

let b = 5;
b = 10; // ✅ allowed
// let b = 15; // ❌ Error - cannot redeclare

const c = 5;
// c = 10; // ❌ Error - cannot reassign
// const c = 15; // ❌ Error - cannot redeclare
```

---

💡 **Tip:**
✅ Use **let** for variables that need reassignment.
🔒 Use **const** for constants.
🚫 Avoid **var** unless you need function-scoped behavior or for legacy code.

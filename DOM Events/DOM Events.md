# 📘 Topic: DOM Events in JavaScript

DOM Events are **actions that occur on HTML elements**, which can be **detected and handled** using JavaScript.

---

## 🧠 Key Points

| Concept        | Description                                                                 |
| -------------- | --------------------------------------------------------------------------- |
| Event          | An action that occurs in the browser (e.g., click, hover, keypress).        |
| Event Listener | A function that waits for an event to occur and executes code when it does. |
| Common Methods | `addEventListener`, `removeEventListener`                                   |
| Event Object   | Contains details about the event, accessible in the callback function.      |

---

## 🧩 Example 1 — Click Event

```javascript
const button = document.getElementById("myBtn");
button.addEventListener("click", function() {
  alert("Button clicked!");
});
```

---

## 🧩 Example 2 — Mouseover Event

```javascript
const box = document.getElementById("box");
box.addEventListener("mouseover", function() {
  box.style.backgroundColor = "lightblue";
});
```

---

## 🧩 Example 3 — Keyboard Event

```javascript
document.addEventListener("keydown", function(event) {
  console.log("Key pressed: " + event.key);
});
```

---

💡 **Tip:**
✅ Always use `addEventListener` instead of inline HTML events for better maintainability.
✅ Use the **event object** to access additional info like target element, mouse position, or key pressed.
⚠️ Remember to remove listeners if not needed using `removeEventListener` to prevent memory leaks.

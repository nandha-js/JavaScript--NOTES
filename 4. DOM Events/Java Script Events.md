# 📘 Topic: JavaScript Events

JavaScript Events are **actions or occurrences** that happen in the browser, which the JavaScript code can **respond to**.

---

## 🧠 Key Points

| Concept        | Description                                                                     |
| -------------- | ------------------------------------------------------------------------------- |
| Event          | An action triggered by the user or browser (click, hover, load, keypress, etc.) |
| Event Handler  | A function that executes when an event occurs.                                  |
| Event Listener | A modern way to attach functions to events using `addEventListener`.            |
| Event Object   | Passed to the event handler and contains details about the event.               |

---

## 🧩 Example 1 — Click Event

```javascript
const button = document.getElementById("btn");
button.addEventListener("click", function() {
  alert("Button clicked!");
});
```

---

## 🧩 Example 2 — Mouseover Event

```javascript
const box = document.getElementById("box");
box.addEventListener("mouseover", function() {
  box.style.backgroundColor = "yellow";
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
✅ Prefer `addEventListener` over inline events.
✅ Use the **event object** to get details like key pressed, mouse position, or target element.
⚠️ Remove listeners when no longer needed with `removeEventListener` to avoid memory leaks.

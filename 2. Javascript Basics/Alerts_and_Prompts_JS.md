# 📘 Topic: Alerts & Prompts in JavaScript

JavaScript provides simple **dialog boxes** to interact with users — mainly for **displaying messages**, **asking input**, or **confirming actions**.

These are built-in browser functions that temporarily pause code execution until the user responds.

---

## 🧠 Types of Dialog Boxes

| Type            | Method      | Purpose                               | Returns                                           |
| --------------- | ----------- | ------------------------------------- | ------------------------------------------------- |
| **Alert Box**   | `alert()`   | Displays an informational message.    | Nothing (`undefined`)                             |
| **Prompt Box**  | `prompt()`  | Asks the user for input.              | The entered value (string) or `null` if cancelled |
| **Confirm Box** | `confirm()` | Asks the user to confirm (OK/Cancel). | `true` (OK) or `false` (Cancel)                   |

---

## 🧩 Example 1 — Alert Box

```js
alert("Welcome to JavaScript! 🚀");
```

**Output:**  
A pop-up message saying **“Welcome to JavaScript! 🚀”** appears.  
Code execution pauses until the user clicks **OK**.

---

## 🧩 Example 2 — Prompt Box

```js
let name = prompt("What is your name?");
alert("Hello, " + name + "!");
```

**Explanation:**

- `prompt()` asks for user input.
- The user’s input is stored in the variable `name`.
- Then, an alert shows a greeting using that input.

---

## 🧩 Example 3 — Confirm Box

```js
let result = confirm("Do you want to delete this file?");
if (result) {
  alert("File deleted successfully!");
} else {
  alert("Action cancelled.");
}
```

**Explanation:**

- `confirm()` displays **OK** and **Cancel** buttons.
- Returns `true` if OK is pressed, `false` otherwise.

---

💡 **Tip:**  
⚠️ Avoid using too many alert, prompt, or confirm dialogs — they block the UI.  
✅ Use them mainly for **simple confirmations** or **debugging**.  
🧱 For modern UI, prefer custom modals or toast notifications instead.

---

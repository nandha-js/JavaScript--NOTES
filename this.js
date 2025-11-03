/*📘 Topic: this Keyword in JavaScript

this refers to the current object that is executing the code.
Its value depends on how a function is called.


🧩 Syntax:

this.propertyName


🧠 Key Points:

Inside an object method, this = the object itself.

In a regular function, this = undefined (in strict mode) or window (in browsers).

In arrow functions, this doesn’t change — it uses the value from its parent scope.

In event handlers, this = the element that received the event.





*/

//✨ Examples:

// 1️⃣ Inside an Object

const person = {
  name: "Nandha",
  sayHi: function() {
    console.log("Hi, I'm " + this.name);
  }
};

person.sayHi(); // 👉 Hi, I'm Nandha



// 2️⃣ In a Regular Function

function show() {
  console.log(this);
}
show(); // 👉 window (or undefined in strict mode)

//3️⃣ In an Arrow Function

const user = {
  name: "Nandha",
  show: () => console.log(this.name)
};
user.show(); // 👉 undefined (arrow doesn’t have its own this)


// 4️⃣ In Event Listeners

<button id="btn">Click Me</button>

document.getElementById("btn").addEventListener("click", function() {
  console.log(this); // 👉 the button element
});

/* 💡 Tips:

Use regular functions when you need your own this.

Use arrow functions when you want to keep this from the outer scope.

bind(), call(), and apply() can change what this refers to. */


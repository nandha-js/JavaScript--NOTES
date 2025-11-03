// Try something

/* function fun1() {
  var x = 10;
  fun2();

  function fun2() {
    var y = 20;
    
    fun3();
    function fun3() {
      var z = 30;
      console.log(x,y,z)
    }
  }
}

fun1(); */

// this.  KEY WORDS IN JS

// .bind(this, "anyArguments")

/* 

bind() Method in JavaScript

Used to bind (fix) the value of this to a function so it remembers who it belongs to.
It doesn’t run immediately, it just returns a new function. 

🧠 Key Points:

bind() creates a copy of the function.

That copy remembers the value of this.

The new function can be called later.

Use bind() when you want to call a function later but still keep the correct this (for example, in event listeners or callbacks).

*/

var person = {
  firstName: "Nandhakumar",
  lastName: "Perumal",

  get: function () {
    console.log("outer: " + this.firstName + " " + this.lastName);
    var print = function (role) {
      console.log(
        "inner: " + this.firstName + " " + this.lastName + ". I am a " + role
      );
    }.bind(this, "Developer");
    print();
  },
};

person.get();


/* 📘 Topic: call() Method in JavaScript

Used to call a function immediately and set the value of this manually.


🧠 Key Points:

Calls the function right away.
var s you choose what this should be.

Passes arguments one by one.


💡 Tip:
Use call() when you want to run a function instantly with a custom this.

📘 Difference Between call() and bind()

| Feature                | `call()`                     | `bind()`                       |
| ---------------------- | ---------------------------- | ------------------------------ |
| Runs immediately       | ✅ Yes                        | ❌ No                           |
| Returns a new function | ❌ No                         | ✅ Yes                          |
| Arguments passed as    | Separate values              | Separate values                |
| When to use            | When you want to **run now** | When you want to **run later** |

💡 Shortcut to Remember:

🗣️ call() = “Call now!”
⏳ bind() = “Bind now, call later!”


*/


var person = {
  firstName: "Nandhakumar",
  lastName: "Perumal",

  get: function () {
    console.log("outer: " + this.firstName + " " + this.lastName);
    var print = function (role) {
      console.log(
        "inner: " + this.firstName + " " + this.lastName + ". I am a " + role
      );
    }.call(this, "Developer");
    
  },
};

person.get();


/*

📘 Topic: apply() Method in JavaScript

Used to call a function immediately and set the value of this manually.
It is similar to call(), but arguments are given as an array.

functionName.apply(thisValue, [arg1, arg2, ...])


🧠 Key Points:

Calls the function right away.
var s you choose what this refers to.

Arguments are passed inside an array.

Useful when you already have arguments in an array form.


💡 Difference Between call() and apply()

| Feature              | `call()`        | `apply()`       |
| -------------------- | --------------- | --------------- |
| Runs immediately     | ✅ Yes           | ✅ Yes           |
| Arguments            | Separate values | Inside an array |
| Returns new function | ❌ No            | ❌ No            |

💬 Shortcut to Remember:

🗣️ call() = Call now with values
📦 apply() = Call now with array


 */
let  person = {
  firstName: "Nandhakumar",
  lastName: "Perumal",

  get: function () {
    console.log("outer: " + this.firstName + " " + this.lastName);
  let print = function (role,type) {
      console.log(
        "inner: " + this.firstName + " " + this.lastName + ". I am a " + role + " in " + type
      );
    }.apply(this, ["Developer" , "React"]);
    
  },
};

person.get();


// in arrow function  
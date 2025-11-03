/*📘 Topic: let, const, and var in JavaScript

Used to declare variables in JavaScript. Each works differently in scope, reassigning, and hoisting.

🧠 Key Differences:
| Keyword   | Scope          | Can Reassign? | Can Redeclare? | Hoisted?                                |
| --------- | -------------- | ------------- | -------------- | --------------------------------------- |
| **var**   | Function Scope | ✅ Yes         | ✅ Yes          | ✅ Yes (undefined before use)            |
| **let**   | Block Scope    | ✅ Yes         | ❌ No           | ⚠️ Yes (but not usable before declared) |
| **const** | Block Scope    | ❌ No          | ❌ No           | ⚠️ Yes (but not usable before declared) |

var a = 10;
let b = 20;
const c = 30;

a = 15; // ✅ allowed
b = 25; // ✅ allowed
// c = 35; ❌ Error - cannot change const

{
  var x = 1;
  let y = 2;
  const z = 3;
}

console.log(x); // ✅ 1
// console.log(y); ❌ Error (block scope)
// console.log(z); ❌ Error (block scope)

💡 Tips:

Use let for variables that change.

Use const for values that stay the same.

Avoid var — it’s old and can cause bugs due to its function scope.


*/



const varName = {name:"Nandha"}

function name (){
   const varName = {name:"kumar"}
    console.log(varName)
}

name()
console.log(varName);

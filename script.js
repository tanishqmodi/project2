console.log("Hello World");
let x = prompt("Enter Any Number: ");

y = parseInt(x);

let h1 = document.createElement("h1");

h1.innerText = `${y} is the number you entered.`;

let body = document.querySelector("body");

body.append(h1);

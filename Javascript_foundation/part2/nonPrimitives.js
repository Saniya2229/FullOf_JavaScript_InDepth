const username = {
  "first Name": "Lily",
  isLoggedIn: true,
};

username.firstName = "July";
username.lastname = "foo";

// console.log(username["first Name"]);
// console.log(username.lastname);
// console.log(typeof username);

const today = new Date();
// console.log(today.toLocaleString());

// Array

const anotherUser = ["Lily", true];

console.log(anotherUser[0]);

// type conversion

console.log(1 + "1"); // 11
console.log("1" + 1); // 11
console.log("1" + "1"); //11

let isValue = true;
console.log(isValue + 1); // 2
console.log(Number(isValue)); //1

let isanothervalue = "2abc";
console.log(typeof Number(isanothervalue));
console.log(Number(null)); //0

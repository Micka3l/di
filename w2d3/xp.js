// exercise 1
let colors = ["white", "blue", "green"];
let numb = ["my 1st choice is ", "my 2nd choice is ", "my 3rd choice is "]

for (let i = 0; i < colors.length; i++) {
    console.log(numb[i]+colors[i])
    
}

// exercise 2
let people = ["Greg", "Mary", "Devon", "James"];
people.shift();
people.splice(2, 1, "Jason");
people.push("Mickael");

for (let i = 0; i < people.length; i++) {
    if (i === 2) {
        break;
    }
    console.log(people[i]);
}

// exercise 2 6)
// const name = people.slice(1, 3);

people.indexOf("Mary")
console.log(people.indexOf("Mary"));

people.indexOf("Foo");
console.log(people.indexOf("Foo"));
// return -1 because he didnt found it

let last = people[people.length - 1];
console.log(last)

// exercise 3
let number = prompt("Put a new number");
// let i = number;

while (number < 10) {
    number += "The number is" + number;
    number++  
    number = prompt("Put a new number"); 
}

// exercise 4
let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }
 

  fname = prompt("what is your name");

  if (fname == guestList.length) {
      console.log(`Hi! I'm [fname], and I'm from [country]`)
  } 
  else {
      console.log("Hi! I'm a guest.")
}

// for (let i = 0; i < guestList.length; i++) {
//     console.log(fname[i]+guestList[i])
    
// }

// exercise 5


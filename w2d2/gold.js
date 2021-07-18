// // exercise 1
// let ask = prompt("Which language do you speak ?");
// let a = "french";
// let b = "english";
// let c = "hebrew";
// ask = ask.toLowerCase();

// switch (ask) {
//     case a:
//         console.log("Bonjour");
//         break;
//     case b:
//         console.log("Hello");
//         break;
//     case c:
//         console.log("Shalom");
//         break;
//     default:
//         console.log("01110011 01101111 01110010 01110010 01111001");
//         break;
// }

// // exercise 2
// let grade = prompt("What is your grade ?");

// if (grade > 90) {
//     console.log("A");
// } else if (grade > 80 && grade <= 90) {
//     console.log("B");
// } else if (grade >= 70 && grade <=80) {
//     console.log("C");
// } else {
//     console.log("D");
// }

// exercise 3

let verb = prompt("Write a string, it must be a verb");
verb = verb.length();

if (verb >= verb.length() && verb != "ing") {
    console.log(verb.includes("ing"));    
} else if (verb >= verb.length() && verb == "ing") {
    console.log(verb.includes("ly"));
} else {
    
}
// // exercise 1
// let x = 5;
// let y = 2;

// if (x > y){
//     console.log("x is the biggest number")
// } 
// else {
    
// }

// // exercise 2
// let newDog = "Chihuahua";
// let pet = newDog.length;
// console.log(newDog.toUpperCase());
// console.log(newDog.toLowerCase());
// console.log(pet);
// console.log(newDog);

// if (newDog === "Chihuahua"){
//     console.log("I love Chihuahua, it's my favorite dog breed")
// } 
// else {
//     console.log("I dont care, I prefer cats")
// }

// // exercise 3
// let numb = prompt("choose a number");

// if (numb % 2 == 0){
//     console.log ("x is an even number")
// } 
// else {
//     console.log("x is an odd number")
// }

// exercise 4
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
let len = users.length;

if (len == 0){
    console.log("no one is online")
} 
else if (len == 1) {
    console.log("name_user is online")
} 
else if (len == 2) {
    console.log("name_user1 and name_user2 are online")
} 
else {
    console.log(`${users[0]}, ${users[1]} and ${len-2} more are online`)
}
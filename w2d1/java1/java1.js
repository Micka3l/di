let addressNumber = 5;
let addressStreet = "Ben Yehuda";
let country = "Tel Aviv";

let globalAddress = `I live in ${addressStreet} ${addressNumber}, in ${country}`;
console.log(globalAddress);

let birthYear = 1988;
let futureYear = 2022;
let age = futureYear - birthYear;

console.log(birthYear);
console.log(futureYear);
console.log(age);

console.log(`I will be  ${age}  in  ${futureYear}`);

let pets = ["cat", "dog", "fish", "rabbit", "cow"];
console.log("dog");
pets.splice(3,1,"horse");
console.log(pets.length);
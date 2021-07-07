// // // part 1

// function infoAboutMe() {
//     console.log("I'm Mickael i have 32 years old and video games")
// }
// infoAboutMe()

// // part 2 and 3

// function infoAboutPerson(personName, personAge, personFavoriteColor, personHobbies) {
//     for (let i = 0; i = infoAboutPerson.length; i++) {
//         console.log(personName, personHobbies);
//         break;
        
//     }
//     // while (infoAboutPerson = personHobbies) {
//     //     console.log(personName, personHobbies)
//     //     break;        
//     // }
//     console.log(`Your name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`)
// }

// infoAboutPerson("David", 45, "blue", ["tennis", "painting"])
// infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"])
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

// exercise 2

// let age = prompt("what is your age ?")
// function checkDriverAge(age) {
//     if (age < 18) {
//         alert("Sorry, you are too young to drive this car. Powering off")
//         return
//         } 
//     else if (age > 18) {
//             alert("You are old enough to drive, Powering On. Enjoy the ride!")
//         return
//         } 
//     else (age == 18) 
//         alert("Congratulations on your first year of driving. Enjoy the ride!")
//     }   
    
//     checkDriverAge(20)
//     checkDriverAge(18)
//     checkDriverAge(15)

// exercise 3

// function checkNumber() {
//     for (let i = 0; i <= 100; i++) {
                
    
//     if(i % 2 == 0) {
//         console.log(`The ${i} is even.`);
//     }
//     else {
//         console.log(`The ${i} is odd.`);
//     }
//     }
// }

// checkNumber()

// exercise 4

// let sum = 0;
// let outcome = " ";

// function isDivisible() {
//     for (let i = 0; i <= 500; i++) {
//         if (i % 23 == 0) {
//         sum += i
//         outcome += (i + " ")
//         }
//     } return sum               
// }
// isDivisible(); 
// console.log("Sum:" + (sum));
// console.log("Outcome:" + (outcome));

// exercise 5 

let amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}
let user = prompt("wich item ?")
function  checkBasket() {
}

for (let x in amazonBasket) {
    console.log(x)
    console.log(amazonBasket)   
}
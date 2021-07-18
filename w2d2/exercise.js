// let age = prompt("How old are you ?");
// if (age < 18) {
// 	alert("Sorry, you are too young to drive this car. Powering off")	
// } else if (age == 18) {
// 	alert("Congratulations on your first year of driving. Enjoy the ride!")
// } else {
// 	alert("Powering On. Enjoy the ride!")
// }

// let userCart = {
// 	username : "John",
// 	password: 1234,
// 	isUserSignedIn : true,
// 	cart : {
// 		apple : 2,
// 		banana : 1,
// 		pear : 5
// 	},
// 	prices : {
// 		apple : 0.5,
// 		banana : 0.8,
// 		pear : 0.2
// 	}
// };

// userCart["username"] = "Josh";
// console.log(userCart);
// console.log(userCart["cart"]["pear"]);
// console.log(userCart["prices"]["pear"]);
// let numberPear = userCart["cart"]["pear"];
// let pricePerPear = userCart["prices"]["pear"];
// let totalPricePear = numberPear * pricePerPear;
// alert(`The pears cost ${totalPricePear} shekels to ${userCart["username"]}`);
// userCart["prices"]["pear"] *= 1.17;
// let userchoice = prompt("what fruits").toLowerCase;
// console.log(userchoice);
// let userPriceFruit = userCart["prices"][userchoice];
// console.log(userPriceFruit);

// userCart["lastname"] = "Smith";
// console.log(userCart);

// if (userCart ["isUserSignedIn"]) {
//     console.log(userCart ["username"], userCart ["password"])
// } else {
//     alert("you need to sign in")
// }


// if (userCart ["username"] == "John" && userCart ["password"] == 1234){
//     console.log("you are sign in")
// } else if (userCart ["username"] == "John" || userCart ["password"] == 1234){
//     console.log("One credential is false")
// } else {
//     alert("you need to sign in")
// }

// let userCart = {
// 	username : "John",
// 	password: 6666,
// 	isUserSignedIn : true,
// 	cart : {
// 		apple : 2,
// 		banana : 1,
// 		pear : 5
// 	},
// 	prices : {
// 		apple : 0.5,
// 		banana : 0.8646466363,
// 		pear : 0.2
// 	}
// };
// // First Exercise
// // 1. If the user is SignedIn - show him his name and password
// // 2. If not - alert the user "you need to sign in"
// //checking if userCart["isUserSignedIn"] is false
// // if (!userCart["isUserSignedIn"]) {
// // 	console.log()
// // } else {
// // 	console.log
// // }
// // no need for the "== true" 
// // if (userCart["isUserSignedIn"] == true) {
// // 	console.log()
// // } else {
// // 	console.log
// // }
// if (userCart["isUserSignedIn"]) {
// 	console.log(userCart["username"],userCart["password"])
// } else {
// 	alert("You need to sign in")
// };
// // Second Exercise - Try to change the password to 123456 for the 2nd instruction
// // 1. If the user is John AND his password is 1234 - alert him "You are signed in"
// // 2. If the user is John OR his password is 1234 - alert him "One credential is false"
// // 3. Else,alert the user "you need to sign in"
// if (userCart["username"] == "John" && userCart["password"] == 1234){
// 	alert("You are signed in")
// } else if (userCart["username"] == "John" || userCart["password"] == 1234) {
// 	alert("One credential is false")
// } else {
// 	alert("You need to sign in")
// };



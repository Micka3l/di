// exercise 1
function calcul(myAge=32) {
    let mum = myAge*2;
    let dad = mum *1.2;
    console.log(`My mum's age is ${mum}`)
    console.log(`My dad's age is ${dad}`)
}
calcul()

// exercise 2
function age(myAge2) {
    let m = myAge2*2;
    return  m  
}
let age2 = age(20);
console.log(age2);
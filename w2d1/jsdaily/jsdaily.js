let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.splice(0,1);
fruits.sort();
fruits.push("Kiwi");
delete fruits[1];
fruits.reverse();

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(fruits);
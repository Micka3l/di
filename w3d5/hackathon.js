let login = [
    {user: `Mickael`, pass:`1234`},
    {user: `Luffy`, pass: `4321`},
    {user: `Zoro`, pass: `1243`}
]

let user = document.getElementById("form");
user.addEventListener("submit", getValue);

function getValue(event) {
    event.preventDefault()
    for (let i = 0; i < user.length-1; i++) {
        if (user.elements[i].value!="submit") {
            return (user.elements[i].value);
        } 
    }  
}

const obj = {};
for (const item of login) {
    obj[item.user] = item
}
const output = Object.values(obj);
console.log(output);

function filled() {
    let x = document.forms["form"]["uname"].value;
    if (x == "") {
        alert("Username must be filled out");
        return false;
    }
}

// function display() {
//     let x = document.getElementById("sign").method;
//     document.getElementById("myArea").innerHTML = x;
// }


// let textArea = document.getElementById("myArea2")
// let inputVal = document.getElementById("myInput").value
let button = document.getElementById("btn");
button.addEventListener(onclick, getInputValue)

function getInputValue() {
    
}

// function getInputValue(event) {
//     // event.preventDefault();
//     let textArea = document.createElement("textarea");
//     let inputVal = document.getElementById("myInput").value;
//     textArea.appendChild(inputVal);
//     document.body.appendChild(textArea);
// }

// function getInputValue(event) {
    // document.getElementById("message").innerHTML = textArea;
    // textArea.appendChild(getInputValue());
    // document.body.appendChild(inputVal);
// }
 
// document.getElementById("message").innerHTML = getInputValue(inputVal);
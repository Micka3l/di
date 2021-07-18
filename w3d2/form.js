let first = document.getElementById("form1");
first.addEventListener("submit", getValue);

function getValue(event) {
    event.preventDefault()
    for (let i = 0; i < first.length-1; i++) {
       if (first.elements[i].value!="submit") {
           console.log(first.elements[i].value);
       }
        
    }
}
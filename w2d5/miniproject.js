function playTheGame() {
    let confirmation = confirm("Do you want play the game ?");
    let number = [min = 0, max = 10];
    // var NaN = number
    if (confirmation == false) {
        alert("No problem, Goodbye")
    }   
    else if (confirmation == true) { 
    let playTheGame = prompt("Enter a number between 0 and 10")
            if (number != number) {
                alert("Sorry Not a number, Goodbye") 
            } 
            else if (number > 10 || number < 0)  {
                alert("Sorry it’s not a good number, Goodbye")
            }
            
            else {
                // return alert("Sorry not a good number, Goodbye")
                
            }
    }
    else {
        
    }
}
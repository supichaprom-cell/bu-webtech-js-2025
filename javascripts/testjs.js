let userInput = prompt("Input integer number");
 
 
let number = parseInt(userInput);
 
 
if (isNaN(number)) {
    alert("Please input a valid integer number");
} else {
    if (number === 0) {
        alert("zero integer number");
    } 
    else if (number % 2 === 0) {
        alert("even integer number");
    } 
    else {
        alert("odd integer number");
    }
}
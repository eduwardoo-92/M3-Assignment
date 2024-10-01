/*Usage: Use simple conditional statements
Create an application that accepts two integers within 
two separate prompts. Then, display only the larger of 
the two within the browser window. Don’t 
forget to handle the fact that the two could be equal.
*/

let num1 = prompt("Enter your first number: ")
let num2 = prompt("Enter your second number: ")
if (num1 > num2){
    document.write("The largest number is " + num1)
}else if (num2 > num1) {
    document.write("The largest number is" + num2)
} else {
    document.write("Both numbers are the same. " )
}

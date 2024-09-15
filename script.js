let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");

if(input1.trim() === "" || input2.trim() === "" || isNaN(input1) || isNaN(input2)){
    alert("Invalid input. Please enter a valid number");
}
else{
    let sum = Number(input1) + Number(input2);
    alert("The sum of "+input1+" and "+input2+" is "+sum);
}
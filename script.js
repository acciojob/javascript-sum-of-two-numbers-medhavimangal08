let input1 = Number(prompt("Enter the first number:"));
let input2 = Number(prompt("Enter the second number:"));
let input3=input1+input2;
if(typeof input1!="number" || typeof input3!="number" ||input1==""||input2==""){
	alert("Invalid input. Please enter a valid number")
}
else{
	alert("The sum of "+input1+" "+"and "+input2+" is "+input3)
}

// Write your code here and print the output using alert function

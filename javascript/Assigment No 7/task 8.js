num = (prompt("Enter  Number"));
if (eval(num) % 3 == 0){
    alert("Your Number "+num +" is divisible by 3");
    document.write("<h1 style='color:green'>Your Number "+num +" is divisible by 3</h1>");
}
else{
    alert("Your Number "+num +" is not divisible by 3");
    document.write("<h1 style='color:red'>Your Number "+num +" is not divisible by 3</h1>");

}
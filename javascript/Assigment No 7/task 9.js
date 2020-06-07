num = (prompt("Enter  Number"));
if (eval(num) % 2 == 0) {
    alert("Your Number " + num + " is Even Number");
    document.write("<h1 style='color:green'>Your Number " + num + " is Even Number</h1>");
}
else {
    alert("Your Number " + num + " is odd Number");
    document.write("<h1 style='color:red'>Your Number " + num + " is odd Number</h1>");

}
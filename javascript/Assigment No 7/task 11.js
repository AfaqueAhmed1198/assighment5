n1 = eval(prompt("Enter First Number :"));
n2 = eval(prompt("Enter Second Number :"));
op = prompt("(+ , - , * , /, % ) \n SELECT OPERATOR ");
if (op == "+"){
    document.write("<h1 style='color:green'>You Select Addition Operation</h1>");
    document.write("<h1 style='color:red'>Result of "+n1+" "+op+" "+ n2 + ": "+ eval(n1+op+n2)+"</h1>");
}
else if (op == "-"){
    document.write("<h1 style='color:green'>You Select Subtraction Operation</h1>");
    document.write("<h1 style='color:red'>Result of "+n1+" "+op+" "+ n2 + ": "+ eval(n1+op+n2)+"</h1>");
}
else if (op == "*"){
    document.write("<h1 style='color:green'>You Select Multiplication Operation</h1>");
    document.write("<h1 style='color:red'>Result of "+n1+" "+op+" "+ n2 + ": "+ eval(n1+op+n2)+"</h1>");
}
else if (op == "/"){
    document.write("<h1 style='color:green'>You Select Division Operation</h1>");
    document.write("<h1 style='color:red'>Result of "+n1+" "+op+" "+ n2 + ": "+ eval(n1+op+n2)+"</h1>");
}
else if (op == "%"){
    document.write("<h1 style='color:green'>You Select Moldule Operator</h1>");
    document.write("<h1 style='color:red'>Result of "+n1+" "+op+" "+ n2 + ": "+ eval(n1+op+n2)+"</h1>");
}
else{
    document.write("<h1 style='color:green'>You Select Incorrect Operator</h1>");
    
}
var a = prompt("Enter Character :");

b = a.charCodeAt(0);

if (a.length == 1){
    
if (b>=65 && b<=90){
    document.write("<h1 style='color:green'>CHAR : "+a+"<br>ASCII VALUE :"+b+"</h1>");
    document.write("<h1 style='color:green'>You Enter Capital Alphabet </h1>");
}
else if (b>=97 && b<=122){
    document.write("<h1 style='color:green'>CHAR : "+a+"<br>ASCII VALUE :"+b+"</h1>");
    document.write("<h1 style='color:green'>You Enter Small Alphabet </h1>");

}
else if (b>=49 && b<=57){
    document.write("<h1 style='color:green'>CHAR : "+a+"<br>ASCII VALUE :"+b+"</h1>");
    document.write("<h1 style='color:green'>You Enter Digit </h1>");

}
else if(b>=0 && b<=47){
    document.write("<h1 style='color:green'>CHAR : "+a+"<br>ASCII VALUE :"+b+"</h1>");
    document.write("<h1 style='color:green'>You Enter Special Character </h1>");
}
else{
    
    document.write("<h1 style='color:green'>You Enter Unknow Charcter </h1> ");

}
}
else{
    document.write("<h1 style='color:green'>The Length Of Character Is Greater Than One</h1>");
}


a = eval(prompt("Enter First Integer Number :"));
b = eval(prompt("Enter Second Integer Number :"));

document.write("<h1 style='color:green'>First Value  : "+a+"<br>Second  VALUE :"+b+"</h1>");

if (a > b){
   
    document.write("<h1 style='color:green'>The Value Of A is Greater Than B</h1>");

}
 else if (b > a){
    document.write("<h1 style='color:green'>The Value Of B is Greater Than A</h1>");
 }
else if (b == a){
    document.write("<h1 style='color:green'>A and B Both Equal</h1>");
 }

t = eval(prompt("Enter Temperature :"));
if (t>=40){
    alert("It is too Hot Outside");
    document.write("<h1 style='color:lightblue'>It is too Hot Outside</h1>");
}
else if(t >=30){
    alert("The Weather today is Normal");
    document.write("<h1 style='color:lightblue'>The Weather today is Normal</h1>");
}
else if (t >=20){
    alert("Today's Weather is cool");
    document.write("<h1 style='color:lightblue'>Today's Weather is cool</h1>");
}
else if(t >=10){
    alert("OMG Today's Weather is so cool")
    document.write("<h1 style='color:lightblue'>OMG Today's Weather is so cool</h1>");

}
else{
    alert("OMG Today's Weather is so cool");
    document.write("<h1 style='color:lightblue'>OMG Today's Weather is so cool</h1>");

}
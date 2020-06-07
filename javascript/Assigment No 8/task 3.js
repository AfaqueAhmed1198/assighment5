num = prompt("Enter Integer Number :");
if (num == 0){
    document.write("<h1 style='color:blue'>YOUR INPUT NUMBER EQUAL TO ZERO</h1>");
}
else if (num> 0){
    document.write("<h1 style='color:blue'>YOUR INPUT NUMBER "+num +"  IS POSITIVE NUMBER </h1>");

}
else if (num <0){
    document.write("<h1 style='color:blue'>YOUR INPUT NUMBER "+num +" IS NEGATIVE NUMBER </h1>");
}
else{
    document.write("<h1 style='color:blue'>YOUR INPUT NUMBER "+num +" IS Not EQUAL ZERO OR NOT POSTIVE NUMBER OR NOT NEGATIVE NUMBER </h1>");

}
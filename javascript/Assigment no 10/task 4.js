var fruits=["apple","banana","mango","orange","strawberry"];
document.write("<br><font color='red' size='6'>Array : ["+ fruits+" ] <br></font>");

for (i=0;i<fruits.length;i++){ 
    document.write("<font color='blue' size='6'> "+fruits[i] +" <br></font>");
}

for (i=0;i<fruits.length;i++){ 
    document.write("<br><font color='green' size='6'> Element at index "+ i+" is "+ fruits[i] +"</font>");
}
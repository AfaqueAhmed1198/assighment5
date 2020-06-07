document.write("<br><font color='red' size='6'>Counting : <br></font>");
for(i=1;i<=15;i++){
    document.write("<font color='blue' size='6'> "+i +",</font>");
}

document.write("<br><br><font color='red' size='6'>Reverse Counting : <br></font>");
for(i=10;i>=1;i--){
    document.write("<font color='blue' size='6'> "+i +",</font>");
}

document.write("<br><br><font color='red' size='6'>Even : <br></font>");
for(i=0;i<=20;i++){
    if(i %2 ==0){
    document.write("<font color='blue' size='6'> "+i +",</font>");
}}

document.write("<br><br><font color='red' size='6'>Odd : <br></font>");
for(i=0;i<=20;i++){
    if(i %2 !=0){
    document.write("<font color='blue' size='6'> "+i +",</font>");
}}

document.write("<br><br><font color='red' size='6'>Series : <br></font>");
for(i=2;i<=20;i=i+2){
    
    document.write("<font color='blue' size='6'> "+i +"k,</font>");
}



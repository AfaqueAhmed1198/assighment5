num = eval(prompt("Enter a number to show its multiplication table : "));
rng =eval(prompt("Enter Length multiplication table :"));
for (i=1;i<=rng;i++){
    if(i==1){
        document.write("<font color='red' size='7'>Multiplication table of :"+ num+" <h1></font><font color='blue' size='7'>Length Of Table :"+rng+"<br>");
        document.write("<br><font color='green' size='6'>"+num+"*"+i+"="+num*i+"</font>");

    }
    else{
        document.write("<br><font color='green' size='6'>"+num+"*"+i+"="+num*i+"</font>");
    }

}
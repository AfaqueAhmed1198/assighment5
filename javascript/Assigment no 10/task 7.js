var A =[24,53,78,91,12];
lg =A[0];

document.write("<br><font color='red' size='6'>Array Element  : ["+ A+"] <br></font>");
for (i=0;i<A.length;i++){
    if(lg<A[i]){
        lg=A[i]
    }
}

document.write("<br><font color='blue' size='6'>The Largest Number Is  : "+lg +"<br></font>");
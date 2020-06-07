A=["cake","apple pie","cookie","chip","patties"];

inp =prompt("Welcome To ABC Bakery .What do you want to order sir/ma'am?");
document.write("<br><font color='red' size='6'>Present Items In Bakery  : <br></font>");
for (i=0;i<A.length;i++){
    document.write("<font color='blue' size='6'>"+A[i]+"</font><br>");
}

document.write("<br><font color='red' size='6'>You Search  : "+inp+"<br></font>");

a=0
for (i=0;i<=A.length;i++){
    if(A[i] ==inp.toLowerCase()){
        document.write("<br><font color='green' size='6'> "+inp+" is avaible at index "+i+" in our bakery</font>");
        a=1
    }


}
if (a==0){
    document.write("<br><font color='orange' size='6'> we are sorry."+inp+" is not available in our bakery </font>");

}

var a=2,b=1;
document.write("<br>Value Of a and b is :"+a+','+b);
a = --a;
document.write("<br>Result Of --a :"+ a+"");
b = --b;
c = a - b;
document.write("<br>Result of  --a - --b : " + c+"");
b = ++b;
d =  c + b;
document.write("<br>Result of  --a - --b + ++b : "+ d+"");
b = b--;
e = d + b;
document.write("<br>Result of --a - --b + ++b + b-- :"+e+"");
document.write("<br>******************************************************************</h>");
document.write("<br> After Execution All Equation value of a :" + a+"");
document.write("<br> After Execution All Equation Value of b :" + b+"");

document.write("<br> After Execution All Equation Result :" + e);
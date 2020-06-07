document.write("<H1 style='color:red;font-size:80px'>Mark Sheet</h1>");
tm=eval(prompt("Enter Total Marks :"));
obmark=eval(prompt("Enter Obtainer Marks :"));
per=(obmark/tm)*100;
document.write("<br>Total Marks : "+tm);
document.write("<br>Marks Obtained : "+obmark);
document.write("<br>Percentage : "+per);

m1=eval(prompt("Enter English Subject Marks :"));
m2=eval(prompt("Enter Math Subject Marks :"));
m3=eval(prompt("Enter Urdu Subject Marks :"));
document.write("<center><table border='1'>");
document.write("<tr><th><font color='green;' size='5'>Student</font></th><th><font color='green' size='5'>Total Marks</font></th><th><font color='green' size='5'>Obtained Marks</font></th><th><font color='green' size='5'>Percentage</th></tr></font>");

document.write("<tr>");
document.write("<td align='center'><font color='blue' size='5' >English</td></font>");
document.write("<td align='center'><font color='blue' size='5' >100</td>");
document.write("<td align='center'><font color='blue' size='5' >"+m1+"</td>");
document.write("<td align='center'><font color='blue' size='5' >"+(m1/100)*100+"%</td></tr>");

document.write("<tr>");
document.write("<td  ><font color='blue' size='5'>Math</td>");
document.write("<td  align='center'><font color='blue' size='5' >100</td>");
document.write("<td  align='center'><font color='blue' size='5' >"+m2+"</td>");
document.write("<td align='center'><font color='blue' size='5' >"+(m2/100)*100+"%</td></tr>");

document.write("<tr>");
document.write("<td><font color='blue' size='5' align='center'>Urdu</td>");
document.write("<td  align='center'><font color='blue' size='5'>100</td>");
document.write("<td  align='center'><font color='blue' size='5' >"+m3+"</td>");
document.write("<td  align='center'><font color='blue' size='5' >"+(m3/100)*100+"%</td></tr>");

document.write("<tr>");
document.write("<td></td>");
document.write("<td><font color='blue' size='5' style='margin-left:70px'>"+300+"</td>");
document.write("<td><font color='blue' size='5' style='margin-left:90px' >"+ eval(m1+m2+m3) +"</td>");
document.write("<td><font color='blue' size='5' style='margin-left:80px' >"+(eval(m1+m2+m3)/300)*100+"%</td></tr></center>");
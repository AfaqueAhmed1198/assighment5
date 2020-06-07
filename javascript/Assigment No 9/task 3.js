var color =["red","black","blue"]
document.write("<font size='6' color='green' style='font-weight:bold'>Original Array :["+color+"]</font>")
val = prompt("Enter Which Color Added At beginning")
color.unshift(val)

document.write("<font size='6' color='#9E0B0B' style='font-weight:bold'><br><br>Added One Color At Beginning <br> Added Color Name : " +val+"<br>Added New Color Now Array Updated : ["+color+"]</font><br>")

val = prompt("Enter Which Color Added At End")
color.push(val)

document.write("<br><br><font size='6' color='#F71366 ' style='font-weight:bold'>Added One Color At End <br> Added Color Name : " +val+"<br>Added New Color Now Array Updated : ["+color+"]</font><br>")

val =prompt("Add More Two Color At beginning")
val1 =prompt("Add More Two Color At beginning")
color.unshift(val,val1)

document.write("<br><br><font size='6' color='#F004FB ' style='font-weight:bold'>Added Two Color At Begining <br> Added Color Names : " +val+" "+val1+"<br>Added New Colors Now Array Updated : ["+color+"]</font><br>")

val = color.shift()
document.write("<br><br><font size='6' color='#35FB04 ' style='font-weight:bold'>Remove First Color From Array<br> Remove First Color From Array  : " +val+"<br>Delete First Color Now Array Updated : ["+color+"]</font><br>")

val = color.pop()
document.write("<br><br><font size='6' color='#F76410' style='font-weight:bold'>Remove Last Color From Array<br> Remove Last Color From Array  : " +val+"<br>Delete Last Color Now Array Updated : ["+color+"]</font><br>")

val = prompt("Enter Index To Add new Color :")
val1 = prompt("Enter How Many Color  Delete :")
val2=prompt("Enter Value To Add New Color :")
color.splice(val,val1,val2)
document.write("<br><br><font size='6' color='#02CCFD ' style='font-weight:bold'>Add New Color Specific Position <br> Add New Color Index  : " +val+"<br> How Many Color Delete : "+val1+"<br>Add New Color :"+val2 +"<br> Now Array Updated : ["+color+"]</font>")

val = prompt("Enter Index To Start  Delete Color :")
val1 = prompt("Enter Index To END  Delete Color :")
color.splice(val,val1)
document.write("<br><br><font size='6' color='#0714E9 ' style='font-weight:bold'>Add Remove Color Specific Position <br> Start Index  Delete Color : " +val+"<br> End Index  Delete Color: "+val1+"<br>  Now Array Updated : ["+color+"]</font>")


document.write("<font size='6' color='#9E0f0B' style='font-weight:bold'><br><br>NOW REMAINING ARRAY IS : ["+color+"]</font>")
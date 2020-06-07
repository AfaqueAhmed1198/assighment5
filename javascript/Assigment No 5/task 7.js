const p1 = 650;
const p2 = 100;
var shp = 100;
q1 = eval(prompt("Enter Quantity Of Item 1 is :"));
q2 = eval(prompt("Enter Quantity Of Item 1 is :"));
t1 = p1 * q1;
t2 = p2 * q2;
total = t1 + t2 + shp;
document.write("Shoping Cart ");
document.write("Price Of item 1 is : " + p1 );
document.write("Quantity Of item 1 is : " + q1 );
document.write("Price Of item 2 is : " + p2 );
document.write("Quantity Of item 2 is : " + q2 );
document.write("Shipping charges : " + shp );
document.write("<br><h1 style='color:brown;'>Total Cost of your order is  : " + total );


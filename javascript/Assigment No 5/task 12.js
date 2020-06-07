var a = prompt("Enter Favourite Snack :");
var age = eval(prompt("Enter Current Age :"));
var maxage = eval(prompt("Enter Maximum Age :"));
var snpd = eval(prompt("Enter Amount Of Snacks Per day :"));
tage=maxage-age;
need = tage*snpd;

document.write("<font color='blue'><h1 style='color:red;font-size:80px'>The Lifetime Suly Calculator </h1>");
document.write("Favourite Snacks :"+a);
document.write("<br>Calculate Age  :"+age);
document.write("<br>Estimated Maximum Age  :"+maxage);
document.write("<br>Amount of snacks per day  :"+snpd);
document.write("<br>You Will need  :"+need+" "+a+" To last you Until The Rie old age of "+ maxage);

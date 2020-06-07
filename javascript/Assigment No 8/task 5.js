const psd = "Afaque"
a = prompt("Enter Password : ")
if (a == "")
{
    document.write("<h1 style='color:blue'>Please Enter Your  Password </h1>");
}
else{
    if (a === psd){
        document.write("<h1 style='color:green'>You Enter Correct Password </h1>");
    }
    else{
        document.write("<h1 style='color:purple'>You Enter InCorrect Password </h1>");
    }
}
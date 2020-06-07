obmark = eval(prompt("Enter Obtained Marks :"));
tmak = 300;
per = obmark / tmak * 100;
document.write("Marks Sheet");
document.write("<br>Total Mark : " + tmak );
document.write("<br>Obtained Mark : " + obmark );
document.write("<br>Percentage : " + per );

if (per >= 80) {
    document.write("<br>Grade : A-one");
    document.write("<br>Remark : Excellent");
}
else if (per >= 70) {
    document.write("<br>Grade : A");
    document.write("<br>Remark : Good");

}
else if (per >= 60) {
    document.write("<br>Grade : B");
    document.write("<br>Remark : You need to Improve");

}
else {
    document.write("<br>Grade : F");
    document.write("<br>Remark : Sorry");

}
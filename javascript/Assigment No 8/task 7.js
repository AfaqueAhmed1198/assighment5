var time;
time = prompt("Enter Time In 24 Hours Clock Format :")''
if (time >= 0000 && time <1200){
    document.write("Good Morning");
}
else if (time >= 1200 && time< 1700){
    document.write("Good Afternoon");
}
else if (time >= 1700 && time <2100){
    document.write("Good Evening");
}
else if (time >= 2100 && time<=2359){
    document.write("Good Night");
}

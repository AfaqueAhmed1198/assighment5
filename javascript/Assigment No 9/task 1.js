var std = [];
var std2 = new Array(100);
var str = ["mon","tue","wed","thur","fri","sat","sun"];
var num =[1,2,3,4,5,6];
var boolean=[true,false]
var marray=["Afaque","new",true,1,2,4.5,"ahmed"];
var edupk =["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"];
for (i= 0 ;i<edupk.length;i++){
    if (i == 0){
        document.write("<font size='7' color='red' style='font-weight:bold'> QUALIFICATION :</font><br>");
    }
    document.write("<font size='6' color='blue' style='font-weight:bold'>"+(i+1)+")  "+edupk[i]+"<br></font>");
}
 
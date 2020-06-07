a = prompt("Enter Charcter :");

if(a.length == 1){
if (a.toLowerCase() == "a" || a.toLowerCase() == "e" || a.toLowerCase() == "i" || a.toLowerCase() == "o" || a.toLowerCase() == "u"){
    document.write("<h1 style='color:green'>Your Enter Character  Is Vowel  </h1>");
} 
else{
    document.write("<h1 style='color:green'>Your Enter Character  Is Not a Vowel  </h1>");
}}
else{
    document.write("<h1 style='color:green'>Your Enter Character Length Greater Than One </h1>");

}

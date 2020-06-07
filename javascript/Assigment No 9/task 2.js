stdname = ["Afaque","Ahmed"];
stdscore = [320,230,480];
marray = [];
tmark = 500;

for (i=0;i<stdname.length;i++){
    per = (stdscore[i]/tmark)*100
    
    document.write("<font size='6' color='red' style='font-weight:bold'>Score Of "+stdname[i].charAt(0).toUpperCase() + stdname[i].slice(1).toLowerCase()+" is "+stdscore[i]+"."+"Percentage : "+per+"%</font><br>");
}

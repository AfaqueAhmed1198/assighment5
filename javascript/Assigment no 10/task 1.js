var myarray=new Array(3);  

for (i=0; i <=2; i++)  {        
myarray[i]=new Array(3) ;
}


myarray[0][0]=0 ;       
myarray[0][1]=1  ;      
myarray[0][2]=2 ; 
myarray[0][3]=3 ;       
myarray[1][0]= 1  ;     
myarray[1][1]=0   ;    
myarray[1][2]=1    ;    
myarray[1][3]=2  ;
myarray[2][0]=2 ;       
myarray[2][1]=1  ;      
myarray[2][2]=0 ;
myarray[2][3]=1 ;  

 


document.write("<font color='red' size='7'> 2D MATRICES<h1></font><font color='blue' size='7'>");

for (i=0;i<myarray.length;i++){{
    document.write(myarray[i].join(" "))}
    document.write("<br>");
}
document.write("</font>");
const hr= document.getElementById("hour");
const min= document.getElementById("minute");
const sec= document.getElementById("second");
const ampmel= document.getElementById("ampm");
const clock=()=>{
    let h= new Date().getHours();
    let m= new Date().getMinutes();
    let s= new Date().getSeconds();
    let a= "am";
    if(h>12){ h=h-12; a="pm";}
    h= h<10?"0"+h : h;
    m= m<10?"0"+m : m;
    s= s<10?"0"+s : s;
    hr.innerText= h;
    min.innerText= m;
    sec.innerText= s;
    ampmel.innerText=a;
    setTimeout(()=>{clock()},1000)
    }
clock();
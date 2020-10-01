var htime = document.getElementById("hour");
var mtime = document.getElementById("munite");
var stime = document.getElementById("second");





setInterval(() => {
  

d = new Date();

let H = d.getHours();
let M = d.getMinutes();
let S = d.getSeconds();


var hr =30*H + M/2;
var  m =6*M;
var s = 6*S;

htime.style.transform =`rotate(${hr}deg)`;
mtime.style.transform =`rotate(${m}deg)`;
stime.style.transform =`rotate(${s}deg)`;


},1000 );

let btn=()=>{

    let time =document.querySelector(".input1");
    let date =document.querySelector(".input3");
    let span1=document.querySelector("#t");
    let span2=document.querySelector("#d");

    // sidediv work

if (time.style.width !='8rem') {
    time.style.width="8rem"
}else{
    time.style.width="0";
}
if (date.style.width !='8rem') {
    date.style.width="8rem"
}else{
    date.style.width="0";
}

if(span1.style.display !='block'){
span1.style.display="block";
}else{
    span1.style.display="none";
}
if(span2.style.display !='block'){
span2.style.display="block";
}else{
    span2.style.display="none";
}




setInterval(() => {
    
d=new Date();
let h=d.getHours();
let m=d.getMinutes();
let s=d.getSeconds();
//  console.log(`${h}:${m}:${s}`);

span1.innerHTML=`${h}:${m}:${s}`;


},1000);

 let   Newdate=new Date();

 let ddate=Newdate.getDate();
 let m=Newdate.getMonth();
 let y=Newdate.getFullYear();

span2.innerHTML=`${ddate}/${m}/${y}`;

// console.log(`${ddate}/${m}/${y}`);

}

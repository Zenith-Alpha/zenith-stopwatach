let x=document.getElementById("tim")
let a;
let b;
let c;
let min="00";
let sec="00";
let ms="00";
function start(){
   clearInterval(a)
   a=setInterval(stay,10)
}
function stop(){
   clearInterval(a)
}
function reset(){
   clearInterval(a)
   min="00";
   sec="00";
   ms="00";
   x.textContent=min+":"+sec+":"+ms
}
function stay(){
   ms++;
   if(ms<=9){
      x.textContent=min+":"+sec+":"+"0"+ms
   }
   if(ms>9){
      x.textContent=min+":"+sec+":"+ms
   }
   if(ms>99){
      ms="00";
      sec++
   }
   if(sec<=9){
      x.textContent=min+":"+"0"+sec+":"+ms
   }
   if(sec>9){
      x.textContent=min+":"+sec+":"+ms
   }
   if(sec>59){
      sec="00"
      min++
   }
   if(min<=9){
      x.textcontent="0"+ min+":"+sec+":"+ms
   }
}
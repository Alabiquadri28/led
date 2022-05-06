let sec=document.getElementById('no')
let min=document.getElementById('la')
let hou=document.getElementById('ka')
let day=document.getElementById('fa')
let far=document.getElementById('yo')
let sar=document.getElementById('ko')
far.classList.add('re')
sar.classList.add('re')
let se=60
let mi=60
let hoy=24
let da=243
let mad=0

sec.innerHTML = se
min.innerHTML= mi
hou.innerHTML=hoy
day.innerHTML=da

setInterval(function(){
    sec.innerHTML--
    if(sec.innerHTML < 10){
        sec.innerHTML= sec.innerHTML   
    }
   if(sec.innerHTML < 1){
       min.innerHTML--
       sec.innerHTML=se
   }
   if(min.innerHTML < 10){
    min.innerHTML=min.innerHTML
    far.classList.remove('re')
   }
   if(min.innerHTML < 1){
    far.classList.add('re')
   }
   if(min.innerHTML < 1){
       hou.innerHTML--
       min.innerHTML= mi
   }
   if(hou.innerHTML < 10){
       hou.innerHTML= hou.innerHTML
       sar.classList.remove('re')
   }
   if(hou.innerHTML < 1){
    sar.classList.add('re')

   }
   if(hou.innerHTML < 1){
       day.innerHTML--
       hou.innerHTML=hoy
   }
   if(day.innerHTML < 10){
     day.innerHTML= day.innerHTML

   }
   if(day.innerHTML==0){
       day.innerHTML='Happy New Year!'
   }
},1000)
const hourHand=document.querySelector(".hour-hand"),minuteHand=document.querySelector(".minute-hand"),secondHand=document.querySelector(".second-hand");function getCurrentTime(){const e=new Date,t=e.getHours()/12*360+90,n=e.getMinutes()/60*360+90,o=e.getSeconds()/60*360+90;hourHand.style.transform=`rotate(${t}deg)`,minuteHand.style.transform=`rotate(${n}deg)`,secondHand.style.transform=`rotate(${o}deg)`}!function(){const e=document.querySelector(".clock-face");for(let t=0;t<60;t++){const n=document.createElement("div");n.classList.add("lines"),n.style.transform=`rotate(${6*t}deg)`,e.appendChild(n)}}(),setInterval(getCurrentTime,1e3);
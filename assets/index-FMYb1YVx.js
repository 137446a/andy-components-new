import{d,r as p,a as v,o as m,f as u,u as l}from"./index-tg8HYgly.js";const k=d({__name:"index",setup(_){let a=p([{title:"购物",start:"2021-11-11 10:00:00",end:"2021-11-11 12:00:00",editable:!0},{title:"学习",start:"2021-11-15 08:00:00",end:"2021-11-15 16:00:00"}]),r=e=>{let t={start:`${e.dateStr} 12:00:00`,end:`${e.dateStr} 13:00:00`,title:"吃饭"};a.value.push(t),console.log(e)},o=e=>{console.log(e)},s=e=>{let t=document.createElement("div"),n=e.timeText.split(" - "),c=n[0].replace("上午","").replace("下午","").replace("时",""),i=n[1].replace("上午","").replace("下午","").replace("时","");return t.innerHTML=`
        <img src="src/assets/logo.png" style="width:20px;height:20px;">
         <div>开始时间: ${c}</div>
         <div>结束时间: ${i}</div>
         <div>标题: ${e.event._def.title}</div>
        `,{domNodes:[t]}};return(e,t)=>{const n=v("m-calendar");return m(),u(n,{events:l(a),eventContent:l(s),onDateClick:l(r),onEventClick:l(o)},null,8,["events","eventContent","onDateClick","onEventClick"])}}});export{k as default};

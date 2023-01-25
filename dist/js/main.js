let c=document.getElementById("canvas-1"),ctx=c.getContext("2d"),mouse=(c.width=window.innerWidth,c.height=window.innerHeight,{x:void 0,y:void 0}),maxRad=(window.addEventListener("mousemove",function(t){mouse.x=t.x,mouse.y=t.y}),window.addEventListener("touchmove",function(t){mouse.x=t.touches[0].clientX,mouse.y=t.touches[0].clientY}),window.addEventListener("resize",function(){c.width=window.innerWidth,c.height=window.innerHeight,init()}),50),colors=["#348888","#22BABB","#9EF8EE","#FA7F08","#F24405"];class Circle{constructor(t,i,e,h,s,n){this.x=t,this.y=i,this.dx=e,this.dy=h;let r=this.rad=s;this.color=n,this.draw=function(){ctx.beginPath(),ctx.arc(this.x,this.y,this.rad,0,2*Math.PI),ctx.stroke(),ctx.fillStyle=this.color,ctx.fill()},this.update=function(){(this.x+this.rad>innerWidth||this.x-this.rad<0)&&(this.dx=-this.dx),(this.y+this.rad>c.height||this.y-this.rad<0)&&(this.dy=-this.dy),this.x=this.x+this.dx,this.y=this.y+this.dy,this.draw(),mouse.x-this.x<50&&-50<mouse.x-this.x&&mouse.y-this.y<50&&-50<mouse.y-this.y?this.rad<maxRad&&this.rad++:this.rad>r&&this.rad--}}}let circleArr=[];function init(){circleArr=[];for(let t=0;t<500;t++){var i=9*Math.random()+1,e=Math.random()*(c.width-2*i)+i,h=Math.random()*(c.height-2*i)+i,s=Math.random()-.5,n=Math.random()-.5,r=colors[Math.floor(5*Math.random())];circleArr.push(new Circle(e,h,s,n,i,r))}}function animate(){requestAnimationFrame(animate),ctx.clearRect(0,0,c.width,c.height);for(let t=0;t<circleArr.length;t++)circleArr[t].update()}init(),animate();
//# sourceMappingURL=main.js.map
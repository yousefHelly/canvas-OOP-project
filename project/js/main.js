let c = document.getElementById('canvas-1'),
    ctx = c.getContext('2d');
    c.width = window.innerWidth,
    c.height = window.innerHeight;
    let mouse = {
        x:undefined,
        y:undefined
    }
    //add interactivity to mouse
    window.addEventListener('mousemove',function(e){
        mouse.x = e.x;
        mouse.y = e.y;
    })
    //add interactivity to touch screens
    window.addEventListener('touchmove',function(e){
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
    })
    window.addEventListener('resize',function(){
        c.width = window.innerWidth;
        c.height = window.innerHeight;
        init();
    })
    let maxRad = 50;
    let colors = ['#348888','#22BABB','#9EF8EE','#FA7F08','#F24405'];
    class Circle {
    constructor(x, y, dx, dy, rad, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.rad = rad;
        let minRad = rad;
        this.color = color;
        this.draw = function () {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fillStyle = this.color;
            ctx.fill();
        };
        this.update = function () {
            if (this.x + this.rad > innerWidth || this.x - this.rad < 0)
                this.dx = -this.dx;
            if (this.y + this.rad > c.height || this.y - this.rad < 0)
                this.dy = -this.dy;
            this.x = this.x + this.dx;
            this.y = this.y + this.dy;
            this.draw();
            //interactivity
            if(mouse.x - this.x<50 && mouse.x-this.x>-50 && mouse.y - this.y<50 && mouse.y - this.y>-50){
                if(this.rad<maxRad){
                    this.rad++
                }
            }
            else if(this.rad>minRad){
                this.rad--;
            }
        };
    }
}
let circleArr = [];
    function init (){
        circleArr = [];
        for(let i = 0; i<500; i++){
                let rad = Math.random()*9 + 1;
                let x = Math.random()*(c.width - rad*2) + rad,
                    y = Math.random()*(c.height - rad*2) + rad,
                    dx= (Math.random()-0.5),
                    dy= (Math.random()-0.5),
                    color =colors[Math.floor(Math.random()*5)];
                circleArr.push(new Circle(x, y, dx, dy, rad, color))
        }
    }
    function animate(){
        requestAnimationFrame(animate);
        ctx.clearRect(0,0,c.width,c.height)
        for(let i = 0; i<circleArr.length;i++){
            circleArr[i].update();
        }
    }
init()
animate();

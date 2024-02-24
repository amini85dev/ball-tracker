let canvas = document.querySelector('canvas')

canvas.width = window.innerWidth 
canvas.height = window.innerHeight 




let c = canvas.getContext('2d')

class Ball{
    constructor(x,y){
        this.baser = 10;
        this.r = this.baser;
        this.x =x || randommath( 0 + this.r , window.innerWidth - this.r);
        this.y =y || randommath(0 +this.r , window.innerHeight - this.r);
        this.vx = (Math.random() - 0.5);
        this.vy = (Math.random() - 0.5);
        this.draw()
    }
    draw(){
        c.beginPath()
        c.arc(this.x , this.y , this.r , 0 , 2 * Math.PI)
        c.fillStyle = 'red';
        c.fill()
    }
    update(){
        if( this.x + this.r > window.innerWidth || this.x - this.r < 0){
            this.vx = -this.vx
        }
        if( this.y + this.r > window.innerHeight || this.y - this.r < 0){
            this.vy = -this.vy
        }
        this.x += this.vx
        this.y += this.vy
        
        this.draw()
    }
}

let balls = []
for(let i = 0 ; i < 70 ; i++){
    balls.push(new Ball())
}

function animaite(){
    c.clearRect(0 , 0 , window.innerWidth , window.innerHeight)
    
    balls.forEach( ball => {ball.update()})
    
    requestAnimationFrame(animaite)
}
window.addEventListener('click' , (e)=>{
    for(let i = 0 ; i < 3 ; i++){
    balls.push(new Ball(e.clientX,e.clientY))
    }
})
window.addEventListener("mousemove" , function(e){
    balls.forEach(ball=>{
        let distance =Math.sqrt( Math.pow(e.clientX - ball.x,2) +  Math.pow(e.clientY - ball.y,2) )
        if(distance < 100 && ball.r < ball.baser * 2){
            ball.r += 2
        }else if(ball.r > ball.baser){
            ball.r -= 2
        }
    })
})
window.addEventListener('resize' , function(){
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})
animaite()

function randommath(min , max){
    return Math.floor(Math.random() * (max - min ) + min)
}










// let ball = document.querySelector('#ball')
// let offset = 10;
// function animait(){
//     ball.style.left = offset + 'px'
//     offset += 3
//     requestAnimationFrame(animait)
// }
// animait()


// let canvas = document.querySelector('canvas')
// canvas.width = window.innerWidth
// canvas.height = window.innerHeight

// let c = canvas.getContext('2d')







// draw a circle


// for( let i = 0 ; i<1000 ; i++){
    // x = Math.random()* window.innerWidth
    // y = Math.random()* window.innerHeight
    // c.beginPath()
// c.arc(x,y,50, 0 * Math.PI, 2 * Math.PI)
// c.fillStyle = 'red'
// c.strokeStyle = 'blue'
// c.fill()
// c.stroke()
// }
//c.clearRect( 0 , 0 ,  window.innerWidth,window.innerHeight)
 

// c.beginPath()
// c.lineTo(50 , 300)
// c.lineTo(300 , 100)
// c.lineTo(400 , 300) 
// c.closePath()
// c.strokeStyle = '8e44ad'
// c.stroke()
// c.fillStyle = 'red'
//c.fill()
// c.beginPath()
// c.lineTo(600, 200)
// c.lineTo(800,300)
// c.stroke()




// c.font = '30px verdana'
// c.fillText("Hello world" ,10 , 55)

// c.translate(100,100)
//  c.fillStyle = '#27ae60'
// c.fillRect(100 , 0 , 100 , 100)
//  c.fillStyle = '#3498db'
// c.fillRect(300 , 100 , 100 , 100)
// c.fillStyle = '#8e44ad'
// c.fillRect(500 , 0 , 100 , 100)








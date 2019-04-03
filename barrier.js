var w = window.innerWidth;
var h = window.innerHeight;
var barrier = new barrier();
var barrierW = 120;
var barrierH = 40;



function barrier(){ //object
    this.x = w;
    this.y = 0;
    this.gravity = 2;//the force of gravity
    this.lift = -10; //opposing force
    this.velocity = 0; //initial speed

    this.show = function(){
        fill(color("white"));
        rect(this.x, this.y, barrierW, barrierH);
    }
    
    this.update = function() { //barrier running
        this.velocity += this.gravity; //gravity applied horizontally
        this.x -= this.velocity;
        this.velocity *= 0.8; //resistance
       
        if (this.x < 0){ //barrier hits left side
            this.x = w; //return to original position
            this.y = random(h);
            this.gravity = random(2,5);
            barrierH = random(50,100);
            barrierW = random(50,200);
        }
    }
}//object ends here



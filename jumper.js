var w = window.innerWidth;
var h = window.innerHeight;
var jumper = new jumper();

function jumper(){ //object
    this.x = 50;
    this.y = 0;
    this.gravity = 0.5;//the force of gravity
    this.lift = -10; //opposing force
    this.velocity = 0; //initial speed

    this.show = function(){
        fill(color("red"));
        ellipse(this.x, this.y, 50, 50);
    }
    this.up = function(){ //not running continuously
        this.velocity += this.lift; //jumping function
    }
    this.update = function() { //jump hits the floor
        this.velocity += this.gravity; //gravity applied when not jumping
        this.y += this.velocity;
        this.velocity *= 0.8; //resistance
        if (this.y > h){ //jumper hits the ground
            this.y = h;
            this.velocity = 0;
        }
        if (this.y < 0){ //jumper hits the ceiling
            this.y = 0;
            this.velocity = 0;
        }
    }
}//object ends here
function keyPressed(){
    if (keyCode === 32){
        jumper.up();
    } 
}

    



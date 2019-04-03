var w = window.innerWidth;
var h = window.innerHeight;
var platform = new platform();
function platform(){
    this.x = w/2;
    this.y = h/2;
    this.show = function(){
        fill(color("green"));
        rect(this.x, this.y, 50, 50);
    }
}
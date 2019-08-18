function Mouse(n){
    this.name = n;
    this.isDead = false;
}
Mouse.prototype.die = function(){
this.isDead = true;
}
module.exports = Mouse;

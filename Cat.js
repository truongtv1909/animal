function Cat(n){
this.name = n;
this.stomach = [];
}
Cat.prototype.eat = function(mouse){
this.stomach.push(mouse);
}
module.exports = Cat;
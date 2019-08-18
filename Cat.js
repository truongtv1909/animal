function Cat(n){
this.name = n;
this.stomach = [];
}
Cat.prototype.eat = function(mouse){
this.stomach.push(mouse);
};
Cat.prototype.say = function(){
console.log('My name is: '+this.name);
};
module.exports = Cat;
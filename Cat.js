var Mouse = require('./Mouse');

function Cat(n,w){
this.name = n;
this.weight =w;
this.stomach = [];
}
Cat.prototype.eat = function(animal){
    if(animal instanceof Mouse){
    this.stomach.push(animal); 
    }else{
        throw new Error('Cat can only eat mouse!....') ;
        
    }
};

Cat.prototype.say = function(){
console.log('My name is: '+this.name);
};
module.exports = Cat;
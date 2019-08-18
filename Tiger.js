var chak = require('chalk');
function Tiger(name){
   this.stomach = [] ;
   this.name = name;
}
Tiger.prototype.eat = function(e){
this.stomach.push(e);
};
Tiger.prototype.say = function(){
    console.log('Hi, I am Tiger. My name is: ' + chak.red(this.name));
}
module.exports = Tiger;

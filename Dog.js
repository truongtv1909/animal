function Dog(n,w){
    this.name = n;
    this.weight =w;
    this.stomach = [];
}
Dog.prototype.eat =function(){
    this.stomach.push(cat);
}
Dog.prototype.bark = function(){
    console.log("Gru gru.....")
}
module.exports = Dog;
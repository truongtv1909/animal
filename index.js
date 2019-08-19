var Tiger = require('./Tiger');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var mouse1 = new Mouse('chuot');
var cat1 = new Cat('tom',4);
var tiger1 = new Tiger('red tiger');

try{
    cat1.eat(mouse1);
}catch{
    console.log('Cat can not eating a '+tiger1.name);
}

console.log(cat1);
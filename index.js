var Tiger = require('./Tiger');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var mouse1 = new Mouse('chuot');
var cat1 = new Cat('tom');

cat1.eat(mouse1);
var tiger1 = new Tiger('red tiger');
tiger1.eat(cat1);

// tiger1.say()
// console.log(tiger1);
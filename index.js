var Class = require("./lib/Class");

var Person = new Class;
Person.prototype.init = function(){
  console.log("test2");
};

var person = new Person;
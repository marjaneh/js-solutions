'use strict'

//Using Constructor functions to create javascript object
function Cat(){
    this.name = 'Fluffy'
    this.color = 'White'
}

var cat =  new Cat();
console.log(cat);


//How to create javascript object using ES6 classes
class Cat {
    constructor(name, color){
        this.name =name;
        this.color = color;
    }

    speak(){
        console.log('Mewww');
    }
}

var cat =  new Cat('Fluffy', 'White');
cat.speak();
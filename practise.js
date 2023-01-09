
// object in js

let person = {
    fname: 'Rohit',
    lname: 'Bhadane',
    age: 34
}

person.sayHello = function(){
    console.log('THis is good');
}

person.greet = function(){
    console.log('Now i am greeting');
}

person.walk = function(){
    console.log('I can walk now');
}

person.sayHello();
person.greet();
person.walk();
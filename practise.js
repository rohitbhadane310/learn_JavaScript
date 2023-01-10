
// new keywords

let person = new Object;

person.name = "Rohit";
person.age = 34;

// console.log(person);
// console.log(person.age);

for(key in person){
    console.log(person[key]);
}
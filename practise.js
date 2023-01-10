
// object constructor

function Student (first , last , ag , cla){
    this.firstName = first,
    this.lastName = last,
    this.age = ag,
    this.class = cla
}

let student1 = new Student("Rohit" , "Bhadane" , 23 , 5);

console.log(student1);
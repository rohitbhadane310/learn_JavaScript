
// object in js

let person = {
     fname: 'Rohit',
     lname: 'Bhadane',
     age: 23
};

for(let key in person)
{
    console.log(key + ":" + person[key]);
}
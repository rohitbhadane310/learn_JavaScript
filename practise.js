
// callback function 
function sayHello(){
  console.log("Hello");
}

function sayHi(){
  console.log("Hi...");
}

function add(num1 , num2 , callback)
{
    console.log(num1 + num2);
    callback();
}

let a = 10;
let b = 29;

add(a , b , sayHello);
add(a , b , sayHi);


add(23 , 12 , function(){
  console.log("bye....");
})




// asynchronous javascript

setTimeout(myfunction , 3000);

function myfunction(){
  console.log('hi..');
}


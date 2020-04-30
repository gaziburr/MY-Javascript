// primitive
var a = 23;
var b = a;
a = 20;
console.log(a);//20
console.log(b);//23
// objects
var obj1 = {
    name: 'gazibur ',
    age: 21,
    city: 'guwahati'

}
var obj2 = obj1;
obj2.city = 'tezpur'
console.log(obj1.city)//tejpur
console.log(obj2.city)//tejpur
    // functions
var age = 27;
var obj = {
    name: 'Azizul',
    city: 'salapather'
};

function change(a, b) {
    a = 30;
    b.city = 'Dhing'
}
change(age, obj)
console.log(age)//27
console.log(obj.city)//Dhing

    //Summary:Primitive has remain unchanged (27)and  this shows us when we pass a primitive into a function a simple copy is created, we can change it how many times we need it will never effect the variable on the outside because it is primitive
    // But when we passed an object Its not really passed the object that we passed but the reference to the object;   aggain ,we do not passed an object but only the reference to the object which points to the object. so when we changed a object inside of a function it is still reflected outside of the function   ** because this can leads to an unexpected AND strange debuggable results mr. GAZIBUR RAHMAN:
    //here is another Example:--
/////////////////////////////

// Lecture: Primitives vs objects

// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);//46
console.log(b);//23



// Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);//30
console.log(obj2.age);//30

// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);//73
console.log(obj.city);//San Francisco



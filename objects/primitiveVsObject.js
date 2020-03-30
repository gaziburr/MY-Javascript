// primitive
var a = 23;
var b = a;
a = 20;
console.log(a);
console.log(b);
// objects
var obj1 = {
    name: 'gazibur ',
    age: 21,
    city: 'guwahati'

}
var obj2 = obj1;
obj2.city = 'tezpur'
console.log(obj1.city)
console.log(obj2.city)
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
console.log(age)
console.log(obj.city)
    //Summary:Primitive has remain unchanged (27)and  this shows us when we pass a primitive into a function a simple copy is created, we can change it how many times we need it will never effect the variable on the outside because it is primitive
    // But when we passed an object Its not really passed the object that we passed but the reference to the object;   aggain ,we do not passed an object but only the reference to the object which points to the object. so when we changed a object inside of a function it is still reflected outside of the function   ** because this can leads to an unexpected AND strange debuggable results mr. GAZIBUR RAHMAN:
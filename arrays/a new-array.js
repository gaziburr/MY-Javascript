// initialize an array
var names = ['Gazibur', 'Junaid', 'Azizul', 'Remim', 'Iqbal'];
var years = new Array(1990, 1969, 1948);
console.log(names[2]);
console.log(names.length);
// muted array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// differents data types
var John = ['John', 'Smith', 1990, 'teacher', false, 'designer'];
John.push('blue');
John.unshift('Mr');
John.pop();
console.log(John);
John.indexOf(1990);
console.log(John.indexOf(1990))




var isDesigner = John.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner) 
var Gazibur = {
    firstName: 'Gazibur',
    lastName: ' Rahman',
    birthYear: 1999,
    family: ['Mofiz uddin', 'Johura maya',
        'jayeda', 'Asmina', 'Halima', 'Jiabur', 'Motibur', 'Hifjur', 'Azizul', 'Gazibur '
    ],
    Job: 'student',
    isMarried: false
};
console.log(Gazibur.firstName);
console.log(Gazibur['lastName']);
var x = 'birthYear';
console.log(Gazibur[x]);
Gazibur.job = 'Coder';
Gazibur['isMarried'] = true
console.log(Gazibur);
//new object syntax
var Junaid = new Object();
Junaid.firstName = 'Junaid';
Junaid.birthYear = 2001;
Junaid.lastName = 'Mustafa';
console.log(Junaid)
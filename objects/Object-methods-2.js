var Gazibur = {
    firstName: 'Gazibur',
    lastName: ' Rahman',
    birthYear: 1999,
    family: ['Mofiz uddin', 'Johura maya',
        'jayeda', 'Asmina', 'Halima', 'Jiabur', 'Motibur', 'Hifjur', 'Azizul', 'Gazibur '
    ],
    Job: 'student',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear
        return this.age
    }
};
Gazibur.calcAge();
console.log(Gazibur.calcAge());
console.log(Gazibur)
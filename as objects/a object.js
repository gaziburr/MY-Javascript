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

//example:-
/*****************************
* Objects and methods
*/
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);

//example:--
let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}
restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))
    // all are understood by me........thank
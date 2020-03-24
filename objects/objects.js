let myBook = {
        title: '1984',
        author: 'George Orwell',
        pageCount: 326
    }
    // in above  comma(,)is most important
console.log(`${myBook.title} by ${myBook.author}`)
myBook.title = 'animal farm'
console.log(`${myBook.title} by ${myBook.author}`)
    // challange area
let personOne = {
    title: 'junaid mustafa',
    father: 'anuwar hussain',
    mother: 'jayeda khatun',
    myAge: 20,
    location: 'assam'
}
let personTow = {
    title: 'gazibur rahman',
    father: 'mofiz uddin',
    mother: 'johura khatun',
    myAge: 20,
    location: 'assam'

}
personTow.myAge = 21 //important

let summary = function(person) {
    console.log(`${person.title} father's name ${person.father} mother's name ${person.mother} and age ${person.myAge} and location ${person.location}`)
}
summary(personOne)
summary(personTow)
let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}
let otherBook = {
    title: 'A peoples history',
    author: 'Gazibur rahman',
    pageCount: 723
}
let getSummary = function(book) {
    return {
        summary: `${book.title} by ${book.author}`,

        pageCountSummary: `${book.title} and ${book.pageCount} pages long`
    }
}
let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)
console.log(bookSummary.pageCountSummary)

// chanllange area bro
let convertFahrengeit = function(fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5 / 9),
        celcius: (fahrenheit - 32) * (5 / 9)
    }
}

temp = convertFahrengeit(74)
console.log(temp)








let oneBook = {
    title: 'oneTwo',
    author: 'junaid mustafa',
    pageCount: 673
}
let twoBook = {
    title: 'threeFour',
    author: 'gazibur rahman',
    pageCount: 478
}
console.log(oneBook.author.toUpperCase)
let getsummary = function(book) {
    return {
        MyBookSummary: `name ${book.title} , and author ${book.author}  ,and also page is ${book.pageCount}`,
        otherBookSummary: `name ${book.title} , and author ${book.author}  ,and also page is ${book.pageCount}`,


    }
}

getsummary(oneBook)
getsummary(twoBook)

console.log(getsummary(oneBook).MyBookSummary)
console.log(getsummary(twoBook).otherBookSummary)
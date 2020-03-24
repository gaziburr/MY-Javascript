// DOM - DOCUMENT OBJECT MODEL
// query and remove elements

const paragraph = document.querySelector('h1');
console.log(paragraph)
paragraph.remove()

// query All and remove Elements
const ps = document.querySelectorAll('p')
ps.forEach(function(p) {
    // p.remove()
})

//how we can read text values
ps.forEach(function(p) {
    p.textContent = 'my name is gazibur rahman*****'
    console.log(p.textContent)
})
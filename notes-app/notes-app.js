// Try all comments one by one if possible please! I am gazibur rahman haha ha** 
//this data is from notes.js 
const notes = [{
        title: 'my next trip',
        body: 'I would like to go spain'
    }, {
        title: 'Habits to work on ',
        body: 'exersice, Eating  a bit better.'
    }, {
        title: 'office modification',
        body: 'Get a new seat'
    }]
    // here is how to query and remove  first Elements
const heading = document.querySelector('h2')
heading.remove()
    //here is how to query all and remove Elements
const paragraph = document.querySelectorAll('p')
paragraph.forEach(function(paragraph) {
        if (paragraph.textContent.includes('the')) {
            paragraph.remove()
        }
    })
    // how add DOM elements with javascrip
    //here is how to add an element
const newParagraph = document.createElement('p');
newParagraph.textContent = 'this is a new element from javascript'
document.querySelector('body').appendChild(newParagraph)
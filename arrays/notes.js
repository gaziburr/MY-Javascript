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

const sortNotes = function(notes) {
    notes.sort(function(a, b) {
        if (a.title < b.title) {
            return -1
        } else if (b.title < a.title) {
            return 1
        } else {
            return 0
        }

    })
}
const findNote = function(notes, noteTitle) {
    return notes.find(function(note, index) {
        return note.title === noteTitle
    })
}
const findNotes = function(notes, query) {
    return notes.filter(function(note, index) {
        const isTitleMatch = note.title.includes(query)
        const isBodyatch = note.body.includes(query)
        return isTitleMatch || isBodyMatch
    })
}
sortNotes(notes)
console.log(notes)
//this data is from todo.js 
const todos = [{
    text: 'order cat food',
    completed: false
}, {
    text: 'clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'do work',
    completed: false
}, {
    text: 'exercise',
    -

    completed: true
}]

const incompleteTodos = todos.filter(function(todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left.`
document.querySelector('body').appendChild(summary)

todos.forEach(function(todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('body').appendChild(p)

    })
    // you have 2 todos left(p elements)
    // Add a p for  each todo above (use text value)
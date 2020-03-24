const todos = [{
            text: 'order cat food',
            completed: false
        },
        {
            text: 'clean kitchen',
            completed: true
        },
        {
            text: 'Buy food',
            completed: true
        },
        {
            text: 'do work',
            completed: false
        },
        {
            text: 'exercise',
            completed: true
        }
    ]
    // console.log(`You have ${todos.length} todos`)
    // console.log(`todo: ${todos[]}`):
    // console.log(`todo: ${todos[todos.length - 2]}`)

// create an array with five todos
// You have x todos
// // Print the first and second to last items -> todo:walk the dog
const sortTodos = function(todos) {
    todos.sort(function(a, b) {
        if (!a.tcompleted && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}
const deleteTodo = function(todos, todoText) {
    const index = todos.findIndex(function(todo) {
        return todo.text.toLowercase() === todoText.toLowercase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}
const getThingsToDo = function(todos) {
    return todos.filter(function(todos) {
        return !todo.completed
    })
}
sortTodos(todos)
console.log(todos)
    /* try all methods please below */
    // todos.splice(2, 1)
    // todos.push('buy cofee')
    // todos.shift()
    //indexOf()
    // todos.pop()
    // todos.unshift()
    // console.log(`You have ${todos.length} todos!`)
    // todos.forEach(function(todo, index + 1) {
    //     const num = count + 1
    //     console.log(`${num}.${todo}`)
    // })
    // console.log(todos)
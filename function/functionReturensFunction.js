// This is called first class function try yourself//mr Gazibur Rahman
function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ' , can you please explain that what UX design is?');
        } else if (job === 'teacher') {
            console.log('hello what subject do you teach mr:' + name + '?')
        } else {
            console.log('hello' + name + 'what do you do?')
        }
    }
}
var teacherQuestion = interviewQuestion('teacher')
var designerQuestion = interviewQuestion('designer')
teacherQuestion('Gazibur')
designerQuestion('Junaid')
designerQuestion('nargis')
interviewQuestion('teacher')('nargis') // It is also work Because when  interviewQuestion(job))is return a function, then returned function will called with next arguement. in this case gazibur...
    //It is Recomended that try your won fuction and do some experiments with new concept first class function
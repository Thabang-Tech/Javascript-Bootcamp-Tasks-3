// Asynchronous Programming
// fake studentDatabase

const studentDatabase = {
    profiles: [
        { id: 1998, firstName: 'Mahlatse', lastName: 'Sarithi',email: 'mahlatse@gmail.com', course: 'Java', age: 28},

        { id: 1999, firstName: 'Frankie', lastName: 'SMosehla', email: 'frankie@gmail.com', course: 'Python', age: 27},

        { id: 1997, firstName: 'Sabelo', lastName: 'Gumede', email: 'sabelo@gmail.com', course: 'Html', age: 29},

        { id: 2000, firstName: 'Thabang', lastName: 'Matlou', email: 'thabang@gmail.com', course: 'CSS', age: 25},

        { id: 1995, firstName: 'Dlozi', lastName: 'Mthethwa', email: 'dlozi@gmail.com', course: 'CPP',age: 27}
    ] 
}


//Question 1: Synchronous JavaScript

function demoSynchronousExecution(){
    console.log('Step-1 - The function is starting')
    console.log('Step-2 - The process is in action')
    console.log('Step-3 - The function reached the final stage')
}

demoSynchronousExecution();

//Question 2: Using setTimeout()

function displayStudentsAfterDelay() {
    setTimeout(() => {
        studentDatabase.profiles.forEach(student => {
            console.log(`ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Email: ${student.email}, Course: ${student.course}, Age: ${student.age}`);
        });

    }, 3000);
}

displayStudentsAfterDelay();
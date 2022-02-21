
function Academy(name, students = [], subjects = [], start, end){
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.start = start;
    this.end = end;

    this.numberOfClasses = this.subjects.length * 10;

    this.printStudents = function () {
        console.log('Students:')
        for(let student of this.students){
            console.log(student)
        }
    };
 
    this.printSubjects = function () {
        console.log('Subjects:');
        for (let subject of this.subjects){
            console.log(subject)
        }
    }

}

let academyDetails = new Academy('Front-End Developer', ['Martin', 'Alek', 'Angela', 'Martina'], ['Javascript', 'HTML', 'CSS', 'Advanced JavaScript'], '01.10.2021', '20.10.2022');
console.log(academyDetails);

academyDetails.printStudents();
academyDetails.printSubjects();



function Subject(title, numberOfClasses = 10, isElective = true){

    this.title = title;
    this.numberOfClasses = numberOfClasses;
    this.isElective = isElective;

    this.academy = academyDetails.name;
    this.students = academyDetails.students;

    this.overrideClasses = function (number){
        number < 3   ?
            console.log('You have enetered a small number') :
            this.numberOfClasses = number
            console.log(number)
        } 

    }

let newSubject = new Subject('Advanced JavaScript');
console.log(newSubject);

let newNumber = newSubject.overrideClasses(15);


function Student(firstName, lastName, age, completedSubjects = []){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = completedSubjects;
    this.academy = null;
    this.currentSubject = null;

    this.startAcademy = function(studentAcademy){
        studentAcademy !== academyDetails.name ?
            console.log('Enter valid academy') :
            this.academy = studentAcademy;
            academyDetails.students += "," + this.firstName;
    }


    this.startSubject = function(subject){
        if(academyDetails.subjects.includes(subject) && this.currentSubject === null){
           this.currentSubject = subject;
           newSubject.students += ',' + this.firstName;
        }
        else if(this.currentSubject !== null){
            this.completedSubjects += "," + this.currentSubject;  
            this.currentSubject = subject; 
        }
        else {
            this.currentSubject = null;
            console.log('ERROR')        
        }
    }
}


let newStudent = new Student('Miki', 'Gjorgjievski', 32, ['Javascript', 'HTML'] )
let newAcademyProperty = newStudent.startAcademy('Front-End Developer');

let newSubjectProperty = newStudent.startSubject('Advanced JavaScript')

console.log(newStudent);

'use strict'

// Create Student and Teacher classes
// Student
// learn()
// question(teacher) -> calls the teachers answer method
// Teacher
// teach(student) -> calls the students learn method
// answer()

class Student {
  learn(){ 
    console.log('Everything!');
  }
  /** Teacher class */
  question(teacher) {
    teacher.answer();
  }

}
class Teacher {
  teach(student){
    student.learn();
  }

  answer() {
    console.log('The correct answer');
  }
}
let teacher = new Teacher;
let student = new Student;
student.question(teacher);
teacher.teach(student);

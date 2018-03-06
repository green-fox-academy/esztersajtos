'use stict'

class Person {
  name: string;
  age: number;
  gender: string;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female') {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}`);
  }
  getGoal() {
    console.log('My goal is: Live for the moment!');
  }
}

class Student extends Person{
  name: string;
  age: number;
  gender: string;
  previousOrganization: string;
  skippedDays: number = 0;;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', previousOrganization: string = 'The School of Life') {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
  }

  getGoal() {
    console.log('Be a junior software developer.');
  }
  introduce(){
    console.log(`Hi, I'm ${this.name} a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
  }
  skipDays(numberOfDays: number) {
    this.skippedDays += numberOfDays;
  }
}

class Mentor extends Person {
  name: string;
  age: number;
  gender: string;
  level: string;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', level: string = 'intermediate' ) {
    super(name, age, gender);
    this,level = level;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
  }
  getGoal() {
    console.log('Educate brilliant junior software developers.');
  }
}

class Sponsor extends Person{
  name: string;
  age: number;
  gender: string;
  company: string;
  hiredStudents: number;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', company: string = 'Google', hiredStudents: number = 0) {
    super(gender, age, gender);
    this.company = company;
    this.hiredStudents = hiredStudents;
  }
  introduce() {
    console.log(`Hi, i'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
  }
  getGoal() {
    console.log('Hire brilliant junior software developers.');
  }
  hire() {
    this.hiredStudents ++;
  }
}

let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}
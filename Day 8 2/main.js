// function Student(name, grade){
//     this.name = name;
//     this.grade = grade;
// }
// const identity = new Student('Edem', 'grade4');



//First Assignment
class NewStudent{
  #name 
  #age 
  #grade
  #gpa 
  #courses
  constructor(name, age, grade, gpa, courses){
      this.#name=name;
      this.#age=age;
      this.#grade=grade;
      this.#gpa=gpa;
      this.#courses = courses
  }
  calculateGpa(newGpa){
      if(newGpa>0){
          this.gpa=newGpa;
      }else{
          console.log('Are you a student?')
      }
  }
  setCourses(newCourses){
    if(newCourses.length>5){
      this.courses = newCourses
    }else{
      console.log('The minimum charcters must be more that 5')
    }
  }
  setName(newName){
    if(newName.length>5){
        this.age=newName;
    }else{
        console.log('6 minimum characters are required')
    }
}
  setAge(newAge){
      if(newAge>0){
          this.age=newAge;
      }else{
          console.log('The age is invalid')
      }
  }
getName(){
  return this.name
}
getCourses(){
  return this.courses
}
  getAge(){
      return this.age
  }
};
const firstStudent = new NewStudent('Edem', 0, 78, 3.20,'Bu');
const secondStudent = new NewStudent('Aheto', 16, 9, 3.30, "Agric");

console.log(firstStudent)
console.log(secondStudent)










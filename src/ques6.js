class Person{
    constructor(firstName,lastName,age,gender)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.gender=gender;
    }
    description() {
       console.log(`Name: ${this.firstName} ${this.lastName} Age:${this.age} Gender:${this.gender}`);
        
    }

}

class Student extends Person{

    constructor(firstName,lastName,age,gender,course,college)
    {
        super(firstName,lastName,age,gender);
        this.course=course;
        this.college=college;
    
    }
    static courseChange(course){
        return this.course=course;
    }

    static collegeChange(college){
        return this.college=college;
    }

    description() {
        console.log(`Name: ${this.firstName} ${this.lastName} Age:${this.age} Gender:${this.gender} studying ${this.course} in ${this.college}`);
         
     }
}

class PhdStudent extends Student{
    constructor(firstName,lastName,age,gender,course,college,subject){
        super(firstName,lastName,age,gender,course,college);
        this.subject=subject;
    }

    static subjectChange(subject){
        return this.subject=subject;
    }
     
    description() {
        console.log(`Name: ${this.firstName} ${this.lastName} Age:${this.age} Gender:${this.gender}
         studying ${this.course} in ${this.college} and teaching ${this.subject}`);
         
     }
}

let person=new Person("Akshita","Tandon",24,"Female");
person.description();
let student=new Student("Nisha","Nagarkoti",22,"Female","MCA","LBSIM");
student.description();
let phdStudent=new PhdStudent("Drishti","Talwar",25,"Female","PHD in computer","DU","Data Structures");
phdStudent.description();
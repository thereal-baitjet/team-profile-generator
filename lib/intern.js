const Employee = require('lib/employee.js');

class Intern extends Employee {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }
  
    getSchool() {
        return this.school;
    }
  
    getRole() {
        return "Intern"
    }
    }

    const intern = new Intern('billy', 1, 'billyfoo@gmail.com', 'Rutgers');
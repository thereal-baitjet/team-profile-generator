const Employee = require('lib/employee.js');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber
  }

  getRole() {
    return "Manager"
}
}

const manager = new Manager('billy', 1, 'billyfoo@gmail.com', 'Rutgers');
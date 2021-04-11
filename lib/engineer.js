const Employee = require('lib/employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }
  
    getGithub() {
      return this.github;
    }
  
    getRole() {
        return "Engineer"
    }
    }

    const engineer = new Engineer('Juan', 2, 'baitjet@gmail.com', 'https://github.com/thereal-baitjet');
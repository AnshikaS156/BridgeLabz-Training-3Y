// Q6: Prototype Chain - Person -> Faculty -> Professor

function Person(name) {
    this.name = name;
}

Person.prototype.introduce = function () {
    console.log(`Person: ${this.name}`);
};

function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function () {
    console.log(`Department: ${this.department}`);
};

function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showSubject = function () {
    console.log(`Subject: ${this.subject}`);
};

const professor = new Professor("Dr. Mehta", "Computer Science", "JavaScript");

// Professor's own method and methods inherited through Faculty and Person.
professor.showSubject();
professor.showDepartment();
professor.introduce();

// Verify the chain.
console.log(professor instanceof Professor); // true
console.log(professor instanceof Faculty);   // true
console.log(professor instanceof Person);    // true

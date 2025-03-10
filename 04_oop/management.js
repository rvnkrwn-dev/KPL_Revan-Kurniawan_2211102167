// Class Person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Class Employee (Inheritance)
class Employee extends Person {
    constructor(name, age, jobTitle, salary) {
        super(name, age);
        this.jobTitle = jobTitle;
        this.salary = salary;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name}, I am ${this.age} years old, and I work as a ${this.jobTitle}.`);
    }
}

// Class Manager (Polymorphism & Encapsulation)
class Manager extends Employee {
    #bonus;
    
    constructor(name, age, jobTitle, salary, bonus) {
        super(name, age, jobTitle, salary);
        this.#bonus = bonus;
    }

    getTotalSalary() {
        return this.salary + this.#bonus;
    }

    introduce() {
        console.log(`Hi, I am ${this.name}, a ${this.jobTitle}. My total salary including bonus is $${this.getTotalSalary()}.`);
    }
}

// Class Department (Abstraction)
class Department {
    constructor(name) {
        if (this.constructor === Department) {
            throw new Error("Cannot instantiate abstract class Department");
        }
        this.name = name;
    }

    getDepartmentInfo() {
        throw new Error("Method 'getDepartmentInfo()' must be implemented");
    }
}

class ITDepartment extends Department {
    getDepartmentInfo() {
        return `This is the ${this.name} department, responsible for IT infrastructure.`;
    }
}

// Example

const employee1 = new Employee("Alice", 25, "Software Engineer", 5000);
employee1.introduce();

const manager1 = new Manager("Bob", 40, "CTO", 10000, 5000);
manager1.introduce();

const itDept = new ITDepartment("IT");
console.log(itDept.getDepartmentInfo());
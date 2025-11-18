// This is a simple employee data management system using basic JavaScript concepts.
// We will create employee objects, store them in an array, perform calculations, and log outputs to the console.

// Step 1: Create 3 employee objects with the required properties
let employee1 = {
    name: "Ahmed Ali",
    age: 30,
    jobTitle: "Software Engineer",
    isManager: true,
    address: {
        country: "Egypt",
        city: "Cairo"
    },
    skills: ["JavaScript", "Python", "React", "Node.js"],
    salary: [5000, 5500, 6000]  // Salaries for last 3 months
};

let employee2 = {
    name: "Sara Mohamed",
    age: 28,
    jobTitle: "Designer",
    isManager: false,
    address: {
        country: "Egypt",
        city: "Alexandria"
    },
    skills: ["Photoshop", "Illustrator", "Figma", "Sketch"],
    salary: [4000, 4200, 4500]  // Salaries for last 3 months
};

let employee3 = {
    name: "Omar Hassan",
    age: 35,
    jobTitle: "Manager",
    isManager: true,
    address: {
        country: "Egypt",
        city: "Giza"
    },
    skills: ["Leadership", "Project Management", "Communication", "Strategy"],
    salary: [7000, 7500, 8000]  // Salaries for last 3 months
};

// Step 2: Create an array called allEmployees containing the three employee objects
let allEmployees = [employee1, employee2, employee3];

// Step 3: Calculations
// Calculate average salary for each employee
let avgSalary1 = (employee1.salary[0] + employee1.salary[1] + employee1.salary[2]) / 3;
let avgSalary2 = (employee2.salary[0] + employee2.salary[1] + employee2.salary[2]) / 3;
let avgSalary3 = (employee3.salary[0] + employee3.salary[1] + employee3.salary[2]) / 3;

// Calculate total salary for the first employee over the first two months
let totalSalaryEmployee1TwoMonths = employee1.salary[0] + employee1.salary[1];

// Calculate total company salary (sum of all salaries across all employees and months)
let totalCompanySalary = 
    employee1.salary[0] + employee1.salary[1] + employee1.salary[2] +
    employee2.salary[0] + employee2.salary[1] + employee2.salary[2] +
    employee3.salary[0] + employee3.salary[1] + employee3.salary[2];

// Step 4: Console Output for each employee
console.log(employee1.name + " works as a " + employee1.jobTitle + ".");
console.log(employee1.isManager ? "Yes, he is a manager." : "No, he is not a manager.");
console.log("He has " + employee1.skills.length + " skills.");
console.log("His average salary is " + avgSalary1 + ".");

console.log(employee2.name + " works as a " + employee2.jobTitle + ".");
console.log(employee2.isManager ? "Yes, she is a manager." : "No, she is not a manager.");
console.log("She has " + employee2.skills.length + " skills.");
console.log("Her average salary is " + avgSalary2 + ".");

console.log(employee3.name + " works as a " + employee3.jobTitle + ".");
console.log(employee3.isManager ? "Yes, he is a manager." : "No, he is not a manager.");
console.log("He has " + employee3.skills.length + " skills.");
console.log("His average salary is " + avgSalary3 + ".");

// Print total salary for the first employee over two months
console.log("Total salary for the first employee over two months is " + totalSalaryEmployee1TwoMonths + ".");

// Print total company salary
console.log("Total company salary is " + totalCompanySalary + ".");

// Print data types for each property in employee1 using typeof
console.log("Data types for employee1 properties:");
console.log("name is " + typeof employee1.name);
console.log("age is " + typeof employee1.age);
console.log("jobTitle is " + typeof employee1.jobTitle);
console.log("isManager is " + typeof employee1.isManager);
console.log("address is " + typeof employee1.address);
console.log("skills is " + typeof employee1.skills);
console.log("salary is " + typeof employee1.salary);

// Bonus Challenge: Print the sentence for each employee using array indexing (with a loop for efficiency)
for (let i = 0; i < allEmployees.length; i++) {
    let emp = allEmployees[i];
    let avgSal = (emp.salary[0] + emp.salary[1] + emp.salary[2]) / 3;  // Recalculate average for each
    console.log("Hi, My Name Is " + emp.name + " And I Am " + emp.age + " Years Old I Work As A " + emp.jobTitle + " My Salary Is " + avgSal + " I Live In " + emp.address.city + " " + emp.address.country + " And I Am A Manager " + emp.isManager + " My Skills Is " + emp.skills.length + ".");
}

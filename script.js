// ===============================
// EMPLOYEE DATA (3 OBJECTS)
// ===============================

var employee1 = {
  name: "Ahmed Saleh",
  age: 29,
  jobTitle: "Front-End Developer",
  isManager: false,
  address: {
    country: "Saudi Arabia",
    city: "Riyadh"
  },
  skills: ["HTML", "CSS", "JavaScript", "React"],
  salary: [6000, 6200, 6100]
};

var employee2 = {
  name: "Sara Ali",
  age: 34,
  jobTitle: "Project Manager",
  isManager: true,
  address: {
    country: "UAE",
    city: "Dubai"
  },
  skills: ["Leadership", "Communication", "Planning", "Problem-Solving"],
  salary: [9000, 9200, 9100]
};

var employee3 = {
  name: "Omar Khalid",
  age: 26,
  jobTitle: "UI/UX Designer",
  isManager: false,
  address: {
    country: "Egypt",
    city: "Cairo"
  },
  skills: ["Figma", "Sketch", "Wireframing", "Illustration"],
  salary: [5000, 5200, 5100]
};

// ===============================
// ARRAY OF EMPLOYEES
// ===============================
var allEmployees = [employee1, employee2, employee3];

// ===============================
// CALCULATIONS
// ===============================

// Average salaries
var avgSalary1 = (employee1.salary[0] + employee1.salary[1] + employee1.salary[2]) / 3;
var avgSalary2 = (employee2.salary[0] + employee2.salary[1] + employee2.salary[2]) / 3;
var avgSalary3 = (employee3.salary[0] + employee3.salary[1] + employee3.salary[2]) / 3;

// First employee total salary of first two months
var firstTwoMonthsTotal = employee1.salary[0] + employee1.salary[1];

// Total company salary (sum of all salaries)
var totalCompanySalary =
  employee1.salary[0] + employee1.salary[1] + employee1.salary[2] +
  employee2.salary[0] + employee2.salary[1] + employee2.salary[2] +
  employee3.salary[0] + employee3.salary[1] + employee3.salary[2];

// ===============================
// CONSOLE OUTPUTS
// ===============================

// --- Employee 1 ---
console.log(employee1.name + " works as a " + employee1.jobTitle + ".");
console.log(employee1.isManager ? "Yes, he is a manager." : "No, he is not a manager.");
console.log("He has " + employee1.skills.length + " skills.");
console.log("His average salary is " + avgSalary1 + ".");

// --- Employee 2 ---
console.log(employee2.name + " works as a " + employee2.jobTitle + ".");
console.log(employee2.isManager ? "Yes, she is a manager." : "No, she is not a manager.");
console.log("She has " + employee2.skills.length + " skills.");
console.log("Her average salary is " + avgSalary2 + ".");

// --- Employee 3 ---
console.log(employee3.name + " works as a " + employee3.jobTitle + ".");
console.log(employee3.isManager ? "Yes, he is a manager." : "No, he is not a manager.");
console.log("He has " + employee3.skills.length + " skills.");
console.log("His average salary is " + avgSalary3 + ".");

// Extra calculations outputs
console.log("Total salary for the first employee over two months is: " + firstTwoMonthsTotal);
console.log("Total company salary is: " + totalCompanySalary);

// ===============================
// TYPEOF FOR employee1 PROPERTIES
// ===============================

console.log("name is " + typeof employee1.name);
console.log("age is " + typeof employee1.age);
console.log("jobTitle is " + typeof employee1.jobTitle);
console.log("isManager is " + typeof employee1.isManager);
console.log("address is " + typeof employee1.address);
console.log("skills is " + typeof employee1.skills);
console.log("salary is " + typeof employee1.salary);

// ===============================
// BONUS: Print structured sentence for each employee
// ===============================

for (var i = 0; i < allEmployees.length; i++) {
  var emp = allEmployees[i];

  var avg =
    (emp.salary[0] + emp.salary[1] + emp.salary[2]) / 3;

  console.log(
    "Hi, My Name Is " + emp.name +
    " And I Am " + emp.age + " Years Old" +
    " I Work As A " + emp.jobTitle +
    " My Salary Is " + avg +
    " I Live In " + emp.address.city + " " + emp.address.country +
    " And I Am A Manager " + emp.isManager +
    " My Skills Is " + emp.skills.length + "."
  );
}

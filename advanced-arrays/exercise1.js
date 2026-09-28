const employees = [
    {
        name: "John",
        salary: 5000
    },
    {
        name: "Sam",
        salary: 8000
    },
    {
        name: "Mary",
        salary: 6000
    }
];
// Find:

// Employees earning above 6000
// Employee named Sam
// Total salary
// List of employee names

const earn = employees.filter(sal => sal.salary > 6000);
console.log("Employees earning above 6000 -> ", earn);

const nam = employees.find(n => n.name === "Sam");
console.log("Employees named Sam -> ", nam);

const total = employees.reduce(
    (acc, emp) => acc + emp.salary, 0); 
console.log("Total salary -> ", total);

const emp = employees.map(n => n.name);
console.log(emp);

//  acc → accumulator (running total), starts at 0
// emp → current employee object in each iteration
// emp.salary → accesses the salary property on the object
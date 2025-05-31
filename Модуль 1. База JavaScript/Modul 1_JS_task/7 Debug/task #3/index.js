const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
debugger;
// let totalJuniorDevelopersSalary = salaryOfJuniorDeveloper * numberOfJuniorDevelopers * taxPercentage;
let totalJuniorDevelopersSalary = 0;
console.log(totalJuniorDevelopersSalary);
                debugger;
for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
   const salaryWithTax = salaryOfJuniorDeveloper-(salaryOfJuniorDeveloper*taxPercentage/100);
   totalJuniorDevelopersSalary += salaryWithTax;
}
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);
debugger;
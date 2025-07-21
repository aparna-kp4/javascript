// const num = 5;
// let factorial = 1;

// for (let i = 1; i <= num; i++) {
//     factorial *= i;
// }

// console.log(`Factorial of ${num} is ${factorial}`);

// <<<<<<<<<<<<<<<<<<<<<<<<<using for loop>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let fruits=["apple","banana","cherry"];
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }


// <<<<<<<<<<<<<<<<<<using foreach>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let fruits=["apple","banana","cherry"];
// fruits.forEach(fruits=>console.log(fruits));


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<Write a program to print only fruits with more than 5 letters using a loop



// let fruits=["apple","banana","cherry"];
// for(let i=0;i<fruits.length;i++){
//     if(fruits[i].length>5)
//     console.log(fruits[i]);
// }


// let employees=[
//     {name:"Aparna",age:20},
//     {name:"thuthu",age:28},
    

// ];
// console.log(employees[0].name);


let employees = [
    { name: "Aparna", age: 20},
    { name: "Thuthu", age: 4},
    { name: "arunima", age: 18},
    { name: "laila", age: 24}
];

// // Find the youngest employee
// let youngest = employees[0]; // assume the first employee is youngest initially

// for (let i = 1; i < employees.length; i++) {
//     if (employees[i].age < youngest.age) {
//         youngest = employees[i];
//     }
// }


// console.log( youngest.name, youngest.age);


let employee=[
    {name: "ridhi", age: 4},
    {name: "thuthu", age: 20},
    {name: "thuthuru", age: 28},
];
let young=employee[0];
for (let i=0;i<employee.length;i++){
    if (employee[i].age < young.age){
        young=employee[i];
        
    }
}
console.log(young);

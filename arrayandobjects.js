// ........................................Arrays


// let fruits=["apple","banana","orange"];
// console.log(fruits);


// // .........................................Accesing Array Element


// let fruits=["apple","banana","orange"];
// console.log(fruits[0]);
// console.log(fruits[2]);


// ...........................................upadating Array Element


// let fruits=["apple","banana","orange"];
// fruits[1]="blueberry"
// console.log(fruits);


// ............................................array methods (push,pop,shift,unshift,slice,)

// ...........................................adding and removing elements


// ...........................................push [add to the end]

// let fruits=["apple","banana"];
// fruits.push("orange");
// console.log(fruits);

// .............................................pop [removes from the end]


// let fruits=["apple","banana","orange"];
// fruits.pop("orange");
// console.log(fruits);

// ............................................unshift[adds to the begging]


// let fruits=["apple","banana"];
// fruits.unshift("orange");
// console.log(fruits);

// ..............................................shift[removing from the beggings]


// let fruits=["apple","banana"];
// fruits.shift("apple");
// console.log(fruits);


// extracting and modifying parts of arrys

// .........................slice[extracts a section]


// let fruits=["apple","banana"];
// let slicedFruits=fruits.slice(0,2);
// console.log(slicedFruits);


// // ...........................splice[removes/replaces/adds]


// let fruits=["apple","banana","cherry","lemon"];
// let splicedFruits=fruits.splice(0,2);
// console.log(fruits);



// ..............................for and each

// ...................using for loop

// let fruits=["apple","banana","cherry","lemon"];
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }


// .......................using for each


let fruits=["apple","banana","cherry","lemon"];
fruits.forEach(fruit =>console.log(fruit));


// ........................objects

// let person = {
//     name: "aparna",
//     age: 25,
//     isStudent: true
// };
// console.log(person);


// Accessing Properties:


// let person={
//     name:"aparna"
// }
// console.log(person.name);



// let person={
//     age:20
// }
// console.log(person["age"]);  


// updating properties

// let person={

// }
// person.age = 26;
// console.log(person.age);  


// // .....................................nested objects and array

// let employee = {
//     name: "thuthu",
//     address: {
//         city: "england",
//         zip: 10001
//     }
// };
// console.log(employee.address.city);



// ..............................................objects in array


// let employees = [
//     { name: "Aparna", age: 20 },
//     { name: "thuthu", age: 4 }
// ];
// console.log(employees[1].name);

//............................................. map

// let numbers = [1, 2, 3];
// let squared = numbers.map(num => num * num);
// console.log(squared);


// .............................................filter

// let numbers = [1,2,3];
// let evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);



//................................................... reduce

// let numbers = [1,2,3]
// let sum = numbers.reduce((total, num) => total + num, 0);
// console.log(sum);





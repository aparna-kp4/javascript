// ..............................................setTimeout it can print an specific time

// console.log("Start");
// setTimeout(()=>console.log("Middle"),5000);
// console.log("End");

// ..............................................setinterval can be used to runs a function repetadly at fixed intervalsa


// setInterval(()=>{
//     console.log("This runs every 2 seconds");
// },2000);



//................................................ creating Promise

// const myPromise = new Promise((resolve, reject) => {
//     const success = true;
//     if (success) {
//         resolve("Task completed suceessfully");
//     } else {
//         reject("Task failed");
//     }
// });
// myPromise
//     .then(message => console.log(message))
//     .catch(error => console.error(error));


// using fetch API fetch lets make HTTP requests like getting data from a server


// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(Response => Response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error("Error:", error));


// error HANDLINg

// try {
//     let result = 10 / 0;
//     console.log("Result:", result);
// } catch (error) {
//     console.error("An error occurred:", Error.message);
// } finally {
//     console.log("Execution finished.");
// }


// ................................................example

// function divide(a,b){
//     if(b===0){
//         throw new Error("Cannot divide by zero");
//     }
//     return a/b;
// }
// try{
//     console.log(divide(10,0));
// }catch(error){
//     console.error(error.message);
// }
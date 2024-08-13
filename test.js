/*
Q1
Number , Strings , BigInt , Boolean , Undefined , Null

Q2
In let we can reassigned and redclared
hoisting is availabe in this
the scope is globle

In var we can reassigned but cant redeclare
hoisting is not available in this
the scope is blocked

In const we cant reassigned and redeclared
hoisting is not available in this
the scope is blocked


Q3
This two are logical operator
== is use to compare data value
=== is use to compare both data value and data types

Q6
This two are premitive data types
When variable is declared but not assigned we get undefined
When objet is kept empty we get null

Q7
We can use the properties of objets by using this

Q9
It have two argument resolve and reject
Promises are used to comunicate with the database
When it is successfully executed then it gives resovle and when not it gives as reject

Q10
JS is synchronou language it mean the code is executed line by line
Asynchronou mean code is not executed line by line
we use asynch and await keyword for execution

Q13
Event loop is the execution of a function 
There call stack, web api , call back queue

Q14
try -catch error is use to handle the error
if any error is occred it does not show to client and only to the terminal
where developer work on that error to solve it
*/


//-----------------------------------------------------------Code

// const products = [
//   { name: "Laptop", Category: "Electronics", price: 1000 },
//   { name: "shirt", Category: "Clothing", price: 50 },
//   { name: "Phone", Category: "Electronics", price: 500 },
//   { name: "Shoe", Category: "Clothing", price: 80 },
// ];
// const arr = [];

// filterAndTransform = (products, Category) => {
//   products.forEach((e) => {
//     if (e.Category === Category) {
//       arr.push([e.name, e.price]);
//     }
//     console.log(arr);
//   });
// };

// // const output = filterAndTransform(products , "Electronics");
// // console.log(output);

// const orders = [
//   { orderid: 1, tableNumber: 2, amount: 30 },
//   { orderid: 2, tableNumber: 1, amount: 20 },
//   { orderid: 3, tableNumber: 2, amount: 50 },
//   { orderid: 4, tableNumber: 3, amount: 40 },
//   { orderid: 5, tableNumber: 2, amount: 10 },
// ];


// function sumByTable(orders) {
//    for(let order of orders) {
// const obj = {};
//     const {tableNumber , amount } = orders
//      if(obj[tableNumber]) {
//       obj[tableNumber] += amount;
//      } else {
//         obj[tableNumber] = amount
//      }
//     }
//     // return obj;
// }

// const output = sumByTable(orders);
// // console.log(output);



// const students = [
//     {name: "Alice" , subject: ["Math" , "Science"]},
//     {name: "Bob" , subject: ["English" , "Science"]},
//     {name: "Charlie" , subject: ["Math" , "History"]},
//     {name: "David" , subject: ["Science" , "History"]}

// ]


// count = (students) => {
//     const objs = {}
//           students.forEach((e) => {
//             e.subject.forEach((el) => {
//                   if (objs[el] === el) {
//                     objs[el]++
//                   } else {
//                     objs[el] = 1;
//                   }
                  
//             })
//           })
//           return objs
// }

// // console.log(
// //     count(students)
// // );

// const inventory = [
//     {name : "Laptop" , quantity: 5, price: 1000},
//     {name : "shirt" , quantity: 0, price: 50},
//     {name : "phone" , quantity:10, price: 500},
//     {name : "shoes" , quantity: 3, price: 80}
// ]
// function inventoryValue(inventory) {
//     var total = 0;

//       inventory.forEach((e) => {
//         total = total + (e.quantity * e.price);
//         // console.log(total);
//       })
//       return total;
// }

// // console.log(inventoryValue(inventory));


// //Q 6 

// const transactions = [
//     {userId: 1, amount: 50, data:"2023-01-01"},
//     {userId: 2, amount: 50, data:"2023-01-01"},
//     {userId: 1, amount: 50, data:"2023-01-01"},
//     {userId: 2, amount: 50, data:"2023-01-01"},
//     {userId: 2, amount: 50, data:"2023-01-01"},
// ];

// // function topSenders(transactions) {
// //     const userMap = new Map();
// //     transactions.forEach(({}))
// // }

// const employees = [
//     {name : "john" , department : "Engineering" , salary : 1000} ,
//     {name : "jane" , department : "marketing" , salary : 1500} ,
//     {name : "jim" , department : "Engineering" , salary : 500} ,
//     {name : "jack" , department : "HR" , salary : 800} ,

// ]
// function getHighEarning(employees , minSalary) {
//     const arr = [];
//     employees.forEach((e) => {
//             if (e.salary > minSalary) {
//                 arr.push(e.name);
//                 // console.log(arr);
//             }
//     })
//     return arr;
// }

// // console.log( getHighEarning(employees , 800) );


// const books = [{title: "Book A",author: "Author 1",genres:["Fiction","Mystery"]},
//               {title: "Book B",author: "Author 2",genres:["Nonfiction","History"]},
//               {title: "Book C",author: "Author 3",genres:["Fiction","History"]},
//               {title: "Book D",author: "Author 4",genres:["Mystery","Thriller"]}];
// function countGenres(books) {
//     const objss = {}
//     books.forEach((e) => {
//         e.genres.forEach((el)=> {
//             if (objss[el]) {
//              objss[el]++
//             } else {
//                 objss[el] = 1;
//             }
//         })
//     })
//     return objss;
// }

// // console.log(countGenres(books));

// const sale1 = [
//     {productId : 1 , productName : "Product A" , amount : 100} ,
//     {productId : 2 , productName : "Product A" , amount : 150} ,
// ];

// const sale2 = [
//     {productId : 1 , productName : "Product A" , amount : 200} ,
//     {productId : 3 , productName : "Product A" , amount : 300} ,
// ]

// function mergeAndSum(sale1,sale2){
//     var output = []; 
//     const objsss = {};

//     output = [...sale1 , sale2];
//     // console.log(output);
//     output.forEach((e) => {
//         if (objsss[e]) {
//             objsss[e.amount] +=  objsss[e.amount]
//         } else {
//             objsss[e] = e;
//         }
//     })
//     return objsss
// }
 
// console.log(mergeAndSum(sale1,sale2));


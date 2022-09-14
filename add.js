// let arguments = process.argv ;

// function add(a,b){
//     return a+b;
// }
// let a = parseInt(arguments[2]);
// let b = parseInt(arguments[3]);
// console.log(add(a,b));

//----------------------------------------------------------------------------------------

let first_no = process.env.first;
let second_no = process.env.second;

function add(a,b){
    return a+b;
}
console.log(add(parseInt(first_no),parseInt(second_no)));
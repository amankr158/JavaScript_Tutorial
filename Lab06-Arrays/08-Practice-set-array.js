//Practice set of array:
//1) Create an array of numbers and take i/p from the user  to add 
//numbers to this array

let a1=[1,2,3,4,5]
let a = prompt("Enter a number: ")         //prommpt will not work in vscode use in chrome
a = parseInt(a)
a1.push(a)
console.log(a1)

//2) keep adding numbers in an array until 0 is added to an array
let a2=[1,2,3,4,5]
let a3
do{
    a3 = prompt("Enter a number: ")         //prommpt will not work in vscode use in chrome
    a3 = parseInt(a3)
    a2.push(a3)
}while (a3!=0)
console.log(a2)
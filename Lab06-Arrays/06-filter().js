//filter(): filters an array with values that passes a text. returns a new array

let a1=[45,23,21,0,3,5]

let a2= a1.filter((a)=>{
    return a<10
})
console.log(a2)
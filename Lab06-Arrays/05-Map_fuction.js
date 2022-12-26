//map(): creates a new array by performing some operation on each array elements
//syntax: array.map((value, index, array)=>{
//    code
//})

//Ex: pepforming addition on each array elements:
let arr=[45,23,21]
let a= arr.map((value)=>{
    return value+1
})
console.log(a)

//Finding value+index+array of aaray elements:
let b= arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value+1
})
console.log(b)
//splice: modifies original array & returns deleted items of array
//syntax:  array.splice(position_to_add_ele, no_of_ele_to_deleted, ele_tobe_added)
const num=[1,2,3,4,5]
num.splice(2,1,101,102)
console.log(num)

//slice
let arr1= num.slice(2)
console.log(arr1)

//Array.from()=used to create a new array from any object
let name="Aman"
let arr2= Array.from(name)
console.log(arr2)
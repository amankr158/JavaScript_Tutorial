//printing array
let arr=[1,2,3,4,5,6]

for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}

//foreach
//squaring
arr.forEach((element)=>{
    console.log(element*element)
})

//for..in
for (let i of arr){
    console.log(i)
}
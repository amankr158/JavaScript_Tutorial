const changeBodyRed=()=>{
    document.body.firstElementChild.style.background="red"
}

let b = document.body
console.log(b)
console.log("First child of B is ", b.firstChild)
console.log("First ELement child of B is ", b.firstElementChild)
console.log("Next element sibling" ,b.nextElementSibling)
let First= document.getElementById("First")

//getAttribute
console.log(First.getAttribute("class"))

//hasAttribute
console.log(First.hasAttribute("class"))     //returns true becz it has class atttr
console.log(First.getAttribute("style"))     //returns false becz it doesnt have style attr

//setAttribute
//First.setAttribute("hidden",true)
console.log(First.getAttribute("hidden"))     //returns true becz it doesnt have style attr

//remove attribute: used to remove attribute
First.removeAttribute("class")

//elem.attributes: list all the attributes usedd
console.log(First.attributes)
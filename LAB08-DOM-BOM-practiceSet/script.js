//Q1) Write a program and take ip from user using prompt and alert if he can drive or not
//Q2 : in Q1 use confirm to ask user if he wants to see the prompt again
//Q3: If entered a negative or age >100 then throw error
const candrive=(age)=>{
    if(age>18)
        return true;
    else
        return false;
}

let runAgain = true;
while(runAgain){
    let age= prompt("Enter your age")
    age=parseInt(age)

    if(age<=0 || age>100){
        console.error("Please enter a valid age:");
        break;
    }

    if(candrive(age))
        alert("You can drive")
    else
        alert(`You cant drive as your age is : ${age}`)


    runAgain = confirm("Do you want to Play again? ")
}
//in Q1 use confirm to ask user if he wants to see the prompt again

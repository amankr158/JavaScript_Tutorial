//Q4: WAP to change url to google.com when user enter number > 4

let num= prompt("Enter your number")
num = parseInt(num)


if(num>4){
    location.href = "https://google.com"
}
else{
    alert("Your number is "+num)
}


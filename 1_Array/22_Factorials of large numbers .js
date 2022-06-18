//Factorial
let n = 10
let fact = (n)=>
{
let fact = 1
while(n >0)
{
    fact = fact * (n)
    n--
}
return fact
}
let res = fact(n)
console.log(res)
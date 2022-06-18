let arr = [4 ,2, 0, 1, 6]
let SubarraySumZero =(arr) =>
{
//code goes here
const sumSet = new Set()
console.log(sumSet)
let sum = 0
for(let i = 0 ;i <= arr.length ; i ++)
{
    
    sum += arr[i]
    console.log(sum)
    console.log(sumSet)
    
    if(sum === 0 || sumSet.has(sum))
    return true
    sumSet.add(sum)
}
return false

}
let res = SubarraySumZero(arr)
console.log(res)




 
// Driver code
 
// const arr =  [-3, 2, 3, 1, 6];
// if (subArrayExists(arr))
//     console.log("Found a subarray with 0 sum");
// else
//     console.log("No Such Sub Array Exists!");
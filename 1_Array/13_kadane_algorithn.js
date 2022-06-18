//kadane algorithm
arr = [-1,-2,-3,-4]
let kadane = (arr) =>
{
    let currSum = 0
    let maxSum = arr[0]
    for(let i = 0 ; i < arr.length ; i ++)
    {
       currSum = currSum + arr[i]
        if(currSum > maxSum)
        {
            maxSum = currSum
        }
        if(currSum < 0)
        {
            currSum = 0
        }
    }
    return maxSum
}
let res = kadane(arr)
console.log(res)





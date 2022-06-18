let arr = [2, 3, 4, 5, -1, 0]
//let arr = [6, -3, -10, 0, 2]

// Output: 180
// Explanation: Subarray with maximum product
// is [6, -3, -10] which gives product as 180.

// Arr[] = {2, 3, 4, 5, -1, 0}
// Output: 120
// Explanation: Subarray with maximum product
// is [2, 3, 4, 5] which gives product as 120.
//kadanes algorithm(subarray problem)

let maxProdSubarray =(arr) =>
{
//write code here
let maxProd = arr[0]
let currProd = 1
for(let i = 0 ; i <arr.length ; i ++)
    {
        currProd = currProd * arr[i]
        if(currProd > maxProd)
        {
            maxProd = currProd
        }
        //console.log(currProd)
    }
    return maxProd

}
let res = maxProdSubarray(arr)
console.log(res)
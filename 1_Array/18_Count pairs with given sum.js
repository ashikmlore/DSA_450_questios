// Input:
// N = 4, K = 6
// arr[] = {1, 5, 7, 1}
// Output: 2
// Explanation: 
// arr[0] + arr[1] = 1 + 5 = 6 
// and arr[1] + arr[3] = 5 + 1 = 6.

// METHOD 1
let arr = [1, 5, 7, 1]
let sum = 6
let count = 0
let CountPairsWithSum = (arr,sum) =>
{
    for(let i = 0 ; i < arr.length ; i ++)
    {
        for(j = i + 1 ; j < arr.length ; j ++)
            {
                if(arr[i] + arr[j] == sum)
                {
                    count ++
                }
            }
    }
    return count
}
let res = CountPairsWithSum(arr,sum)
console.log(res)

//METHOD 2
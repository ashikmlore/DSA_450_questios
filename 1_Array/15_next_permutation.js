//Next Permutation
arr = [1,2,3]
//arr =[3,2,1]
//arr =[1,1,5]
let nextPermutation = (arr) =>
{
    let peak
    
    //first find the peak number from right side
    for(let i = arr.length ; i >= 0 ; i -- )
    {   
        if(i == 0)
        {
            peak = 0
        }
        if(arr[i] > arr[i - 1])
        {
            peak = i
            break
        }
    }
    
    // find the largest number from right which is left to peak and swap
    for(let j = arr.length -1 ; j> 0 ; j --)
    {
     
        if(arr[j] > arr[peak - 1])
        {
            let temp = arr[j]
            arr[j] = arr[peak - 1]
            arr[peak - 1] = temp
            break
        }
    }
   
    //reverse all the numberes to the right of peak
    let start = peak
    let end = arr.length - 1
    while(start < end)
    {
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    start ++
    end --
    }
    return arr



}
let res = nextPermutation(arr)
console.log(res)
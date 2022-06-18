//Count Inversions


// 1 METHOD
let arr = [2, 4, 1, 3, 5]
let countInversion = (arr) =>
{
    let i,j
    for(i = 0 ; i < arr.length ; i ++)
    {
        for(j = i + 1 ; j < arr.length ; j ++)
        {
            if(arr[j] < arr[i])
                {
                    console.log([arr[i],arr[j]])
                } 
        }
    }
   
}
let res = countInversion(arr)
console.log(res)

// 2 METHOD
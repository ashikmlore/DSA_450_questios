//let arr = [1, 2, 3, -4, -1, 4]
let arr = [-5, -2, 5, 2, 4, 7, 1, 8, -8]


let RearrangeArray = (arr) =>
{
    //first arrange positive to left side and negative to right side
    let i = 0
    let j = arr.length - 1
    let k = 0
    while(i < j)
    {
      if(arr[i] > 0)
        {
            i++
           // console.log(i)
        }
        if(arr[j] < 0)
        {
            j --
           // console.log(`j = ${j}`)
        }
        if(arr[i] < 0 && arr[j] >= 0)
        {
           // console.log(arr[i],arr[j])
            //swap
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            //console.log(arr)
            
            i ++
            j --
           // console.log(i,j)
        }
        
    }
    console.log(arr)
    while(i <= arr.length - 1)
    {
        let temp = arr[i]
            arr[i] = arr[k]
            arr[k] = temp
            k = k + 2
            i++
    }
    return arr
    
}
let res = RearrangeArray(arr)
console.log(res)
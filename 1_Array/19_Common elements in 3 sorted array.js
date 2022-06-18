A = [1, 5, 10, 20, 40, 80]
B = [6, 7, 20, 80, 100]
C = [3, 4, 15, 20, 30, 70, 80, 120]

let key_value = (array) =>
{
    let count ={}
    for(let i of array)
    {
        count[i] = (count[i] || 0) + 1 
    }
    return count
}

let CommonElements = (a,b,c) =>
{
    
    arr1 = key_value(a)
    arr2 = key_value(b)
    arr3 = key_value(c)
    console.log(arr1)

}
let res = CommonElements(A,B,C)
console.log(res)
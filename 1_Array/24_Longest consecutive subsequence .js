let arr = [2,6,1,9,4,5,3]
let findLongestConseqSubseq =(arr) =>
{   
// create a set 
let S = new Set()
let length = 0

//Hash all array elements
for(let i =0 ;i<arr.length ;i++)
{
    S.add(arr[i])
}
console.log(S)
//iterate through array to find left neighbour,if do not exist start the seq and find nxt cons nos in d set and set length 
for(let i=0 ; i<arr.length ; i++)
{
    if(!S.has(arr[i] - 1))
    {
        let j = arr[i]
        while(S.has(j))
        {
            j ++
        }
        length  = Math.max(length, j - arr[i])
    }
}
return length

}

let res = findLongestConseqSubseq(arr)
console.log(res)

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

let prices = [1,6,4,3,1]
let BuySellStock = (prices) =>
{
    let day 
    let low_price
    let high_price = 0
    let start = prices[day]
    for(let i = 0 ; i < prices.length ; i ++)
    {
        if(prices[i] < prices[i + 1] )
        {
            low_price = Math.min(prices[i])
            day = i + 1
            break
        }
    }
    for(let j = day ; j < prices.length ;j ++)
    {   //console.log(j)
        if(prices[j] > high_price)
        {
            high_price = prices[j]
        }
        
    }
   // console.log(high_price)
    return high_price - low_price

}
let res = BuySellStock(prices)
console.log(res)
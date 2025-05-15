//
function maxProfit(prices: number[]): number {
    let maxProfit: number = 0;
    let low = Infinity;
    for (let i = 0; i < prices.length; i++){
        if (prices[i] < low){
            low = prices[i];
        for(let j = i + 1; j < prices.length; j++){
            let difference: number = prices[j]-prices[i];
            if (difference > maxProfit){
                maxProfit = difference;
                //console.log('maxProfit:', maxProfit)
            }
        }
    }
    }
    return maxProfit;
};
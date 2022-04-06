// Create a function that converts US dollars (USD) to Chinese 
// Yuan (CNY) . The input is the amount of USD as an integer, 
// and the output should be a string that states the amount of 
// Yuan followed by 'Chinese Yuan'

function usdcny(usd) {
 let cny = usd * 6.75;
 return `${cny.toFixed(2)} Chinese Yuan`;   
}

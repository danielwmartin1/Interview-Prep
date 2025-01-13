import * as exp from "constants";
import readline from 'readline';

function maxProfit(prices) {
  if (!Array.isArray(prices) || prices.some(price => typeof price !== 'number' || price < 0)) {
    console.error("Invalid input: prices should be an array of non-negative numbers.");
    return null;
  }

  let minPrice = Infinity; // Track the minimum price encountered
  let maxProfit = 0;       // Track the maximum profit
  
  for (let price of prices) {
      console.debug(`Current price: ${price}, Min price: ${minPrice}, Max profit: ${maxProfit}`);
      if (price < minPrice) {
          minPrice = price; // Update the minimum price
          console.debug(`Updated min price to: ${minPrice}`);
      } else if (price - minPrice > maxProfit) {
          maxProfit = price - minPrice; // Update the maximum profit
          console.debug(`Updated max profit to: ${maxProfit}`);
      }
  }
  
  return maxProfit;
}

function getValidPrices(callback) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Enter an array of non-negative numbers separated by commas: ", (input) => {
    let prices;
    try {
      prices = JSON.parse(`[${input}]`);
      if (Array.isArray(prices) && prices.every(price => typeof price === 'number' && price >= 0)) {
        callback(prices);
      } else {
        console.error("Invalid input. Please enter an array of non-negative numbers.");
        rl.close();
        getValidPrices(callback);
      }
    } catch (e) {
      console.error("Invalid input. Please enter an array of non-negative numbers.");
      rl.close();
      getValidPrices(callback);
    }
  });
}

getValidPrices((prices) => {
  const profit = maxProfit(prices);
  console.log(`Maximum profit: ${profit}`);
});

export default maxProfit;
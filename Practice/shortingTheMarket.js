import rl from 'readline';
import * as exp from 'constants';

const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

function shortingTheMarket(prices) {
  if (!Array.isArray(prices) || prices.some(price => typeof price !== 'number' || price < 0)) {
    console.error("Invalid input: prices should be an array of non-negative numbers.");
    return null;
  }

  let maxPrice = -Infinity; // Track the maximum price encountered
  let shortingTheMarket = 0;        // Track the maximum profit
  
  for (let price of prices) {
      console.debug(`Current price: ${price}, Max price: ${maxPrice}, Max profit: ${shortingTheMarket}`);
      if (price > maxPrice) {
          maxPrice = price; // Update the maximum price
          console.debug(`Updated max price to: ${maxPrice}`);
      } else if (maxPrice - price > shortingTheMarket) {
          shortingTheMarket = maxPrice - price; // Update the maximum profit
          console.debug(`Updated max profit to: ${shortingTheMarket}`);
          console.debug(`Shorting opportunity: Buy at ${price} and sell at ${maxPrice} for a profit of ${shortingTheMarket}`);
      }
  }
  
  return shortingTheMarket;
}

function promptUser() {
  readline.question('Enter prices as a comma-separated list of non-negative numbers: ', input => {
    const prices = input.split(',').map(Number);
    if (prices.some(isNaN) || prices.some(price => price < 0)) {
      console.error("Invalid input. Please try again.");
      promptUser(); // Prompt again if input is invalid
    } else {
      console.debug(`User input prices: ${prices}`);
      const profit = shortingTheMarket(prices);
      console.log(`Maximum profit: ${profit}`);
      readline.close();
    }
  });
}

promptUser();

export default shortingTheMarket;
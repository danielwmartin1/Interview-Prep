var canCompleteCircuit = function(gas, cost) {
    let totalGas = 0;
    let totalCost = 0;
    let tank = 0;
    let start = 0;

    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        tank += gas[i] - cost[i];

        if (tank < 0) {
            start = i + 1;
            tank = 0;
        }
    }

    return totalGas >= totalCost ? start : -1;
};

// Example usage:
console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2])); // Output: 3
console.log(canCompleteCircuit([2,3,4], [3,4,3])); // Output: -1
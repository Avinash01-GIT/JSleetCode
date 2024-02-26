var canCompleteCircuit = function(gas, cost) {
    let totalGas = 0;
    let currentGas = 0;
    let start = 0;

    for(let i = 0; i < gas.length; i++){
      currentGas += gas[i] - cost[i];
      totalGas += gas[i] - cost[i];
      if(currentGas < 0){
        currentGas = 0;
        start = i+1;
      }
    }
    if(totalGas < 0) return -1;
    return start;
};

const gas = [1, 2, 3, 4, 5];
const cost = [3, 4, 5, 1, 2];
console.log(canCompleteCircuit(gas, cost));
//define total gas tank, the current Tank size, and the staritng index

function canCompleteCircuit(gas: number[], cost: number[]): number {
    let totalTank: number = 0;
    let currTank: number = 0;
    let startIndex: number = 0;
//iterate through gas array add gas - cost at i to total tank
//current valeu of the tank will equal the same thing
    for (let i = 0; i < gas.length; i++) {
        totalTank += gas[i] - cost[i];
        currTank += gas[i] - cost[i];
//check if the amount of the current tank is less than zero if it is the starting index is the next value in the gass array and you would restart the current tank value.
        if (currTank < 0) {
            startIndex = i + 1;
            currTank = 0;
        }
    }
    return totalTank >= 0 ? startIndex : -1;
}
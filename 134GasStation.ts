function canCompleteCircuit(gas: number[], cost: number[]): number {
    let totalTank: number = 0;
    let currTank: number = 0;
    let startIndex: number = 0;

    for (let i = 0; i < gas.length; i++) {
        totalTank += gas[i] - cost[i];
        currTank += gas[i] - cost[i];

        if (currTank < 0) {
            startIndex = i + 1;
            currTank = 0;
        }
    }
    return totalTank >= 0 ? startIndex : -1;
}
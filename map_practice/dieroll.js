function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

let dieCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

while (Math.max(...Object.values(dieCounts)) < 10) {
    let roll = rollDie();
    dieCounts[roll]++;
}

let maxReached = Object.keys(dieCounts).reduce((a, b) => dieCounts[a] > dieCounts[b] ? a : b);
let minReached = Object.keys(dieCounts).reduce((a, b) => dieCounts[a] < dieCounts[b] ? a : b);

console.log("Die roll counts:", dieCounts);
console.log(`Number that reached maximum times: ${maxReached} (${dieCounts[maxReached]} times)`);
console.log(`Number that appeared minimum times: ${minReached} (${dieCounts[minReached]} times)`);

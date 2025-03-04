// Function to simulate gambling until broke or goal is reached
function gambleTillGoal() {
    let balance = 100; // Initial money
    const goal = 200;  // Winning goal
    let bets = 0;       // Total bets made
    let wins = 0;       // Count of wins

    while (balance > 0 && balance < goal) {
        bets++; // Increment bets count
        let betResult = Math.random() < 0.5 ? "Lose" : "Win"; // 50% chance of winning

        if (betResult === "Win") {
            balance++; // Win ₹1
            wins++;
        } else {
            balance--; // Lose ₹1
        }
    }

    console.log(`Total Bets: ${bets}`);
    console.log(`Total Wins: ${wins}`);
    console.log(`Final Balance: ₹${balance}`);
    console.log(balance === 200 ? "Goal Reached! Gambler Won!" : "Game Over! Gambler is Broke!");
}

// Running the gambling simulation
gambleTillGoal();
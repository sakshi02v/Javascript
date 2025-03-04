// Function to simulate a coin flip until one side wins 11 times
function flipCoinUntilWin() {
    let headsCount = 0;
    let tailsCount = 0;

    while (headsCount < 11 && tailsCount < 11) {
        let flip = Math.random() < 0.5 ? "Heads" : "Tails";

        if (flip === "Heads") {
            headsCount++;
        } else {
            tailsCount++;
        }

        console.log(`Flip: ${flip} | Heads: ${headsCount} | Tails: ${tailsCount}`);
    }

    console.log(`\nGame Over! ${headsCount === 11 ? "Heads" : "Tails"} wins!`);
}

// Running the coin flip function
flipCoinUntilWin();
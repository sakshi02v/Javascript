const args = process.argv.slice(2);

if (args.length !== 2) {
    process.exit(1);
}

const day = parseInt(args[0], 10);
const month = parseInt(args[1], 10);


const isInSpringRange = (month === 3 && day >= 20) || (month === 4) || (month === 5) || (month === 6 && day <= 20);
console.log(isInSpringRange);
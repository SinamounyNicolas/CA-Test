
// function callArgs () {
//     const args = process.argv.slice(2)
//     console.log(args);
// }

// callArgs()

for(let i = 0; i < process.argv.length; ++i) {
    console.log(`${process.argv[i]}`);
}

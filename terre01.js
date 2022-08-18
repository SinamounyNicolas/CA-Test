
const filePath = process.argv[1]; // retrieve the path and the class according to the requested index
const programName = filePath.split("/").pop();  // split allows you to specify a separator, pop retrieve the last information from the table and display it
console.log(programName);
const fs = require('fs');
var content;
// First I want to read the file
function processFile() {
  console.log(content);
  console.log('Loading the Webpage now');
}

fs.readFile('input.txt', function read(err, data) {
  if (err) {
    throw err;
  }
  content = data;
  // Invoke the next step here however you like
  console.log(content); // Put all of the code here (not the best solution)
  processFile(); // Or put the next step in a function and invoke it
});

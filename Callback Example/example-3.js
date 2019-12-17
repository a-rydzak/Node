var fs = require('fs');
function getter() {
  fs.readFile('input.txt', function(err, data) {
    if (err) return console.error(err);
    let content = data.toString();
    console.log(content);
    console.log('This is after the content loads');
  });
}
getter();

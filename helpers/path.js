const path = require('path');

// path to file that shows where our application is running.
// works on all OS and gets root directory as start
module.exports = path.dirname(process.mainModule.filename);

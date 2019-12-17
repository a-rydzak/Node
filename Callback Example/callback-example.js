var fs = require("fs");

function getter(cb){
	fs.readFile('input.txt', function (err, data) {
	   if (err) return console.error(err);
	   cb(data.toString());
	});
}

getter(bb8 =>{ 
	console.log(bb8)
	console.log("Webpage Loaded with data");
})

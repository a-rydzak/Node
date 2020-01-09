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


// ------------------------------------find the numbers and return
const strr = '1.33TY,1,2,3,4,5,A';

const new_str = strr.split(',');

const filterme = arry => {
  return arry.filter(elem => !isNaN(parseInt(elem)));
};

const numberMe = arry => arry.map(item => parseInt(item));

const uniques = arry => new Set(arry);

const arrayMe = set => Array.from(set);

console.log(arrayMe(uniques(numberMe(filterme(new_str)))));

// ------------------reducer
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// ----Object freeze, seal

let profile = {name:"Andrew"}

Object.defineProperty(profile, "age", {value:33, writable:false})
//freezes all object mods
Object.freeze()

//seals some object so you cant add more properties but can manipulate the ones in place
Object.seal()
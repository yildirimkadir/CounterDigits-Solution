//Versuch-1

const lowEnd = 10
const highEnd = 20
const digit = 1;
let list = [];
for (let i = lowEnd; i <= highEnd; i++) {
    list.push(i);
};
let count = 0;

for (let x of list) {
   let kalan = x % 10;
   let n = Math.floor(x / 10);
    if (kalan == n && kalan == digit) {
        count+=2;
    } 
    else if(n == digit || kalan == digit) {
        count +=1;
    } 

};

console.log(list);
console.log(count );


// Solution ;

function countDigits(digit, low, high) { 
    let arr = [];
    let count = 0;
    if(digit < 10 && digit >=0 && low < high &&  digit <= high) {
        for(let i = low; i <= high; i++) {
            arr.push(i);
        }
        arr.forEach((x) => String(x).split("").forEach((y) => y === String(digit) && count++));
        return count;
    } 

    return-1;
}

/* *** Tests *** */
let desc = "reverse range";
let inputDigit = 1;
let inputLow = 3;
let inputHigh = 2;
let actual = countDigits(inputDigit, inputLow, inputHigh);
let expected = -1;
assertEqual(actual, expected, desc);

desc = "digit gt 9";
inputDigit = 10;
inputLow = 2;
inputHigh = 3;
actual = countDigits(inputDigit, inputLow, inputHigh);
expected = -1;
assertEqual(actual, expected, desc);

desc = "no match";
inputDigit = 2;
inputLow = 5;
inputHigh = 10;
actual = countDigits(inputDigit, inputLow, inputHigh);
expected = 0;
assertEqual(actual, expected, desc);

desc = "3_30_39";
inputDigit = 3;
inputLow = 30;
inputHigh = 39;
actual = countDigits(inputDigit, inputLow, inputHigh);
expected = 11;
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
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
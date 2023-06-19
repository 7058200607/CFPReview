function PowerOfTwo() 
{
const prompt =require('prompt-sync')();
var range =parseInt(prompt("Enter the range:"));
let arr =[];
let num =1;
for (let i=1;i<=range;i++){
arr.push(num);
num*=2;
}
console.log(arr);
let index =prompt("Enter a index:");
let result =arr.slice(index);
console.log(result);
}
PowerOfTwo();
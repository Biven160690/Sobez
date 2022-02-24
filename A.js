
function solve(input) { 
  let arr = input.split(",").sort((a, b) => a - b);
  let set = new Set(arr);
  let arrNum = Array.from(set, (item) => +item);
  let onArr = [];
  let twArr = [];
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] - arrNum[i - 1] > 1) {
      onArr.push(twArr);
      twArr = [];
      twArr.push(arrNum[i]);
    } else {
      twArr.push(arrNum[i]);
    }
  }

  if (twArr.length > 0) {
    onArr.push(twArr);
  }

  let pages = onArr.map((item) => {
    if (item.length > 2) {
      item.splice(1, item.length - 2, "-");
      return item.join("");
    } else {
      return item.join(",");
    }
  });
  return pages.flat().join(",");
} 

const fs = require('fs') 

const input = fs.readFileSync(0,  'utf-8') 
console.log(solve(input))
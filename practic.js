function sss(c) {
  let s = String(c).split("");
  let sum = 1;
  if (s.length > 0) {
      console.log(s.length !== 1)
    for (let i = 0; i < s.length; i++) {
      sum *= s[i];
    }
    s = String(sum).split("");
  }
  return s;
}

console.log(sss(155));

//   let d = s.split("");
//   let realDigits = d.map(Number)

//   if(true) {
//    realDigits.forEach((item) => item * 5)
// //    console.log(d)
//   }
// //   console.log(d)
//   return realDigits;

// let r = [1, 5]
//   r.forEach((item) =>
//   item * 2
// )
//  console.log(r)
// var num = 123456;
// var digits = num.toString().split('');
// var realDigits = digits.map(Number)
// console.log(digits);
// console.log(realDigits);

// let a = [1, 2 , 4, 6]
// for (let i = 0; i < a.length; i ++){
// // let b = a.map( (item) => item * a[i])
// var c = 0;
// c+=a[i]
// }
// console.log(c)
// var arr = ["3","2","5","6"];
// function arraySum(array){
//      var sum = 1;
//      for(var i = 0; i < array.length; i++){
//          sum *= array[i]; }
//      console.log(sum); }
//      arraySum(arr)

let getId = x => document.getElementById(x);
let total = 20;

function check(x) {
  if(x<10){
   x= "0"+x;
   return x;
  } 
  
  else return x;
 }


let hours = Math.floor(total / 3600);
let minutes = Math.floor(total % 3600 / 60);
let seconds = Math.floor(total % 3600 % 60);
 
hours = check(hours);
minutes = check(minutes);
seconds = check(seconds);
 
getId('timer').innerHTML = hours + ':' + minutes + ':' +seconds;

function start() {
  let hours = Math.floor(total / 3600);
  let minutes = Math.floor(total % 3600 / 60);
  let seconds = Math.floor(total % 3600 % 60);
 
  hours = check(hours);
  minutes = check(minutes);
  seconds = check(seconds);
 
  getId('timer').innerHTML = hours + ':' + minutes + ':' +seconds;
 
  if(total == 0){ 
   getId('timer').innerHTML+= '<br>' + 'Time expired';
   return;
  }
  total--;
}

getId('set').addEventListener('click', function(){
 let total = +prompt('Insert desired countdown');
});
let timer;
getId('start').addEventListener('click', function(){
  timer = setInterval(start,1000);
 
 if(total == 0){ 
   clearInterval(timer);
  }
});

getId('stop').addEventListener('click', function(){
  clearInterval(timer);
}); 
const coin = document.querySelector('#coin');
const button = document.querySelector('#flip');
const status = document.querySelector('#status');

function deferFn(callback, ms){
  setTimeout(callback, ms);
}

function processResult(result) {
  status.innerText = result.toUpperCase();
}

function flipCoin(){
  coin.setAttribute('class', '');
  const random = Math.random();
  const result = random < 0.5 ? 'heads' : 'tails';
  deferFn(function(){
    coin.setAttribute('class', 'animate-' + result);
    deferFn(processResult.bind(null, result), 2900);
  }, 100);
}

button.addEventListener('click', flipCoin)

let start=document.querySelector('status');
let make=document.querySelector('Make');
let win=document.querySelector('Wins');
let loose=document.querySelector('Loose');


console.log(start);


if( start==make)
{
  win=win+1;
}
if(start!=make)
{
  loose=loose+1;
}
    

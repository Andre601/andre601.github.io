import { CountUp } from './countup.min.js';

window.onload = function(){
    var countUp = new CountUp('counter', 30000, {suffix: '+'});
    countUp.start();
}
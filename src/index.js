require('./main.css');
import bar from './bar';
bar.bae();
bar.nofy('this is a nofy function');

class Form{
    constructor(){
        x='this is a form main.js class'
    }
    gonnalog(){
        console.log(x)
    }
}
var x='this is a main.js log';
console.log(x)

let somes = new Form();
somes.gonnalog();

function greet(name, greetText = "have a nice day") {
    console.log(name + " is a great guy");
    console.log(greetText + " " + name);
}
function sum(a, b, c) {
    let d = a + b + c;
    return d;
}


let he = 'sam';
let his = 'sharma';
let greetText = 'good morning';

greet(he);
greet(his, greetText);

// let val = sum(1,2,3);
// console.log(val)
console.log(sum(1, 2, 3));
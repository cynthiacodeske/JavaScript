//if statements

let age = 18;

if (age >= 18) {
    console.log ("You are eligible to VOTE");
} else {
    console.log ("You are NOT eligible to VOTE")
}

let cash = 11;

// write a JavaScript program that checks for someone's account and tells them they're broke if they have less than $10.
if (cash >= 11) {
    console.log ("Not broke")
} else {
    console.log ("broke")
}

//Grade-classifier
let score = 50

if (score >= 90 && score <= 100) {
    console.log ("A");

} else if (score >= 80 && score <= 89) {
    console.log ("B");

} else if (score >= 70 && score <= 79) {
    console.log ("C");

} else if (score >= 60 && score <= 69) {
    console.log ("D");

} else if (score >= 0 && score <= 60) {
    console.log ("F");

} else {
    console.log ("INVALID SCORE")
}
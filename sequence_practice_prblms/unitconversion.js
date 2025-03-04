
// Unit inches to feet conversion

let inches = 42; // Convert this to feets
let inchesInOneFeet = 12;

console.log("42 inches equals = ",(inches/inchesInOneFeet)," feet");

// Calculate are of rectangular plots in meters given length in feets
let length = 60;
let width = 40;

let feetsInOneMeter = 3.28084;

length /= feetsInOneMeter;  // length to meters
width /= feetsInOneMeter; // width to merters

// Calculate area
let area = length*width;
console.log("The are of rectangle in meters with length and breadt of ",length," * ",width," is ",area," meter square");

// area of 25 such plots will be 
console.log("The area of 25 such plots will be: ",(25*area)," meter square");

                                // BMI CALCULATOR
let yourWeight = 45; // Weight in kilograms
let yourHeightInMeters = 5.95; // Height in meters

// formula: weight / (height * height)
let BMI = yourWeight / (yourHeightInMeters * yourHeightInMeters);

// Printing the BMI
console.log("BMI is " + BMI);

// Checking the BMI value
if (BMI < 18.5) {
    console.log('You are underweight'); // If BMI is less than 18.5, the person is underweight
} else if (BMI < 24.9) {
    console.log('You have a normal weight'); // If BMI is between 18.5 and 24.9, the person has a normal weight
} else if (BMI < 29.9) {
    console.log('You are overweight'); // If BMI is between 25 and 29.9, the person is overweight
} 


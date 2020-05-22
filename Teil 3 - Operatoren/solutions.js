let i = 4;

// Quiz #1
console.log(3 * i++);

// Quiz #2
i = 4;
console.log(3 * (++i - i * 4));

// Quiz #3
console.log(true && (!true || 4 > 3));

// Aufgabe #1
const fahrenheit = prompt("Gib die Temperatur in °F ein:");
const celsius = (fahrenheit - 32) * 5 / 9;
alert("Die Temperatur entspricht " + celsius + " °C.");

// Aufgabe #2
const height = prompt("Geben Sie Ihre Größe in cm ein:");
const weight = prompt("Geben Sie Ihr Gewicht in kg ein:");
const bmi = weight / (height / 100)**2;
alert("Ihr BMI beträgt " + bmi);

// Aufgabe #3
const number = prompt("Bitte geben Sie eine Ganzzahl ein:");
const output = (number % 2 == 0) 
    ? "Die Zahl ist gerade" 
    : "Die Zahl ist ungerade";
alert(output);
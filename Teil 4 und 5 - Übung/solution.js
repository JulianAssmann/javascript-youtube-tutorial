// Aufgabe 1
alert('--- Aufgabe 1 ---');

const num1 = parseFloat(prompt('Bitte gib eine Zahl ein:'));
const num2 = parseFloat(prompt('Bitte gib eine Zahl ein:'));

if (num1 > num2) {
    alert('Die erste Zahl ist größer als die zweite.');
} else if (num1 < num2) {
    alert('Die zweite Zahl ist größer als die erste.');
} else {
    alert('Beide Zahlen sind gleich groß');
}

// Aufgabe 2
alert('\n--- Aufgabe 2 ---');

const arr = [5, 2, 9, 7, 3, 1];

let elementCount = parseInt(prompt(`Das Array hat die Elemente ${arr}. Wie viele Elemente wollen Sie aufaddieren?`));
if (elementCount < 1) {
    alert('Mindestens ein Element muss aufaddiert werden.');
} else {
    if (elementCount > arr.length) 
        elementCount = arr.length;

    let sum = 0;
    for (let i = 0; i < elementCount; i++) {
        sum += arr[i];
    }

    alert(`Die Summe der ersten ${elementCount} Elemente beträgt ${sum}.`);
}

// Aufgabe 3
alert('\n--- Aufgabe 3 ---');

let previous = 1;
let current = 1;
console.log(previous);
while (current <= 1000) {
    console.log(current);
    result = previous + current;
    previous = current;
    current = result;
}

/// Aufgabe 4
alert('\n--- Aufgabe 4 ---');

const input = parseInt(prompt('Bitte geben Sie eine natürliche Zahl größer 1 ein:'));

if (input > 1) {
    let isPrime = true;
    for (let check = 2; check < input; check++) {
        if (input % check == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime)
        alert(`${input} ist eine Primzahl.`);
    else
        alert(`${input} ist keine Primzahl.`);
} else {
    alert('Ungültige Eingabe!');
}
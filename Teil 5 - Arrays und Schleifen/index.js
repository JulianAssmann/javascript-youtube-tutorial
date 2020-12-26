// Erstelle Array mit 4 Namen
let names = [ 'Max', 'James', 'Marie', 'Lena' ];
console.log('names:', names);
console.log('names.length: ', names.length);

// Füge Namen hinten an
names.push('Rudolf');
console.log('Nach names.push(\'Rudolf\': ', names);

// Andere Datentypen funktionieren auch
names[0] = true;
names.push(1);

// Das Array passt die Größe automatisch an
names[11] = '42';

// While-Schleife: Alle Vielfachen von 3 zwischen 0 und 100
console.log('\nWhile-Schleife');
let i = 0;
while (i <= 100) {
    console.log(i);
    i += 3;
}

// Setze names wieder auf ein sinnvolles Array zurück, damit die folgenden Beispiele verständlicher sind.
names = [ 'Max', 'James', 'Marie', 'Lena', 'Rudolf' ];

// While-Schleife: Array names rückwärts durchlaufen
console.log('\nWhile-Schleife zum Durchlaufen des Arrays');
i = names.length;
while (i > 0) {
    console.log(i, names[i]);
    i--;
}

// Do-while-Schleifen werden mindestens einmal ausgeführt, auch wenn die Schleifenbedingung von Anfang an falsch ist.
console.log('\nDo-while-Schleife');
do {
    console.log('Do-while');
} while (false);

// For-Schleife zum Durchlaufen des Arrays names
console.log('\nFor-Schleife');
for (let i = 0; i < names.length; i++) {
    let name = names[i];
    console.log(i, name);
    
    // name ist eine lokale Kopie des jeweiligen Array-Elements, 
    // eine Änderung hiervon wirkt sich nicht auf das originale Array-Element aus.
    name = 'Test';
}
console.log(names);

// For-of-Schleife zum Einfachen Durchlaufen des Arrays.
console.log('\nFor-of-Schleife');
for (let name of names) {
    console.log(name);
    // name ist eine lokale Kopie des jeweiligen Array-Elements, 
    // eine Änderung hiervon wirkt sich nicht auf das originale Array-Element aus.
    name = 'Test';
}
console.log(names);
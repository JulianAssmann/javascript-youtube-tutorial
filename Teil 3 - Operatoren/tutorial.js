let a = 5;
let b = 3;
let c = 2;

// Ergebniszuweisung an eine neue Variable
let res = a + b;
console.log('res =', res);

// Rechenoperationen
console.log('a + b =', a + b);      // Addition
console.log('a - b =', a - b);      // Subtraktion
console.log('a * b =', a * b);      // Multiplikation
console.log('a / b =', a / b);      // Division
console.log('a % b =', a % b);      // Rest der Division
console.log('a**b =', a**b);        // Exponentiation
console.log('-a =', -a);            // Negation

// Operatorvorrang
console.log('a * b + c =', a * b + c);
console.log('a * (b + c) =', a * (b + c));

console.log('a * b**c =', a + b**c);
console.log('(a * b)**c=', (a + b)**c);

console.log('a + b % c =', a + b % c);
console.log('(a + b) % c =', (a + b) % c);

// + Operator bei Strings
let firstName = 'Max';
let lastName = 'Mustermann';
let fullName = firstName + ' ' + lastName;
console.log('fullName: ', fullName);

// Zusammengefasste Zuweisungsoperationen
console.log('a = ' + a + ', b = ' + b)
a += b
console.log('a += b => a = ' + a);
a -= b;
console.log('a -= b => a = ' + a);
a *= b;
console.log('a *= b => a = ' + a);
a /= b;
console.log('a /= b => a = ' + a);
a %= b;
console.log('a %= b => a = ' + a);
a **= b;
console.log('a **= b => a = ' + a);

// Inkrement
console.log('++a = ', ++a);
console.log('a++ =', a++);
console.log('a =', a);

// Dekrement
console.log('--a = ', --a);
console.log('a-- =', a--);
console.log('a =', a);

// Vergleichsoperatoren
let isEqual = a === b;
console.log('isEqual = (a === b) =', isEqual);

console.log(`'Hello World' === 'Hello World':`, 'Hello World' === 'Hello World');
console.log(`'Hello world' === 'Hello World':`, 'Hello world' === 'Hello World');
console.log('true === true:', true === true);
console.log('true === false:', true === false);

console.log('a > b:', a > b);
console.log('a < b:', a < b);

console.log('a < a:', a < a);
console.log('a <= a:', a <= a);
console.log('a > a:', a > a);
console.log('a >= a:', a >= a);

console.log('a === a:', a === a);
console.log('a === b:', a === b);
console.log('a !== a:', a !== a);
console.log('a !== b:', a !== b);

// Vorsicht bei Fließkommazahlen!
console.log('3.141 === 3.141:', 3.141 === 3.141);
console.log('0.1 * 0.2 === 0.02:', 0.1 * 0.2 === 0.02);
console.log('0.1 * 0.2:', 0.1 * 0.2);
console.log('0.1 + 0.2 === 0.3:', 0.1 + 0.2 === 0.3);
console.log('0.1 + 0.2:', 0.1 + 0.2);
console.log('0.1 === 0.1000000000000000055511151231257827021181583404541015625:', 0.1 === 0.1000000000000000055511151231257827021181583404541015625)

// Möglichkeit, Fließkommazahlen auf Gleichheit mit gewissem zulässigen Fehler zu überprüfen
let ergebnis = 0.1 + 0.2;
console.log('Math.abs(ergebnis - 0.3) < 0.000001:', Math.abs(ergebnis - 0.3) < 0.000001);
 
// Weird JS
console.log('"1" == true:', "1" == true);
console.log('"0" == false:', "0" == false);
console.log('22 == "22":', 22 == "22");
console.log("'2' + '2' - '2':",  );

// Logische Verknüpfungen
const victimDead = true;
const treacherous = true;
const cruel = false;
const baseMotives = false;

const isMurder = victimDead && (treacherous || cruel || baseMotives);
const isManslaughter = !isMurder && victimDead;

console.log('isMurder: ', isMurder);
console.log('isManslaughter: ', isMurder);

function rightSideTruthy() {
    console.log('truthy');
    return true;
}

// short circuit evaluation
console.log(false && rightSideTruthy());
console.log(false & rightSideFalsy());

console.log(true || rightSideTruthy());
console.log(true | rightSideTruthy());

console.log('true ^ true:', true ^ true);
console.log('true ^ false:', true ^ false);
console.log('false ^ true:', false ^ true);
console.log('false ^ false: ', false ^ false);

// Falsy-Werte: 
null
NaN
0
""
''
undefined

let res = null || '' || NaN || 23;
// let res = null && '' && NaN && 23;
console.log(res);

// Ternärer Operator
let age = 19;
let output = (age >= 18) 
    ? "Du darfst wählen gehen." 
    : "Du bist noch zu jung, um wählen zu dürfen.";
console.log(output);

// Nullish coalescing operator
let msg; // = "This is a message."
console.log(msg);
msg = msg ?? "Message was empty, now it's this.";
console.log(msg);
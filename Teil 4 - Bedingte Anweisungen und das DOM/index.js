const score = 40;

if (score >= 90) {
    console.log('1');
} else if (score >= 75) {
    console.log('2');
} else if (score >= 60) {
    console.log('3');
} else if (score >= 50) {
    console.log('4');
} else {
    console.log('Durchgefallen');
}

const product = 'Cashew';

switch (product) {
    case 'Apfel':
        console.log(product + ': 2€/kg');
        break;
    case 'Banane':
        console.log(product + ': 1,50€/kg');
        break;
    case 'Cashew':
        console.log('Lecker!');
    case 'Haselnuss':
        console.log(product + ': 12,50€/kg');
        break;
    default:
        console.log('Dieses Produkt führen wir leider nicht');
        break;
}
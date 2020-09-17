let passwordInput;
let messageText;
let setPasswordButton;

onload = function (event) {
    passwordInput = document.getElementById('passwordInput');
    messageText = document.getElementById('msg');
    console.log(messageText);
    setPasswordButton = document.getElementById('passwordButton');
}

function onPasswordChanged() {
    const password = passwordInput.value;
    let valid = false;
    let message = '';

    if (password === '') {
        message = '';
    } else if (password.length < 8) {
        message = 'Das Passwort muss mindestens 8 Zeichen lang sein';
    } else if (password.search(/[a-z]/) < 0) {
        message = 'Das Passwort muss mindestens einen Kleinbuchstaben enthalten';
    } else if (password.search(/[A-Z]/) < 0) {
        message = 'Das Passwort muss mindestens einen Großbuchstaben enthalten';
    } else if (password.search(/[0-9]/) < 0) {
        message = 'Das Passwort muss mindestens eine Zahl enthalten';
    } else if (password.search(/[#?!@$%^&*-]/) < 0) {
        message = 'Das Passwort muss mindestens ein Sonderzeichen enthalten';
    } else {
        message = 'Passwort OK';
        valid = true;
    }

    if (valid) {
        messageText.style.color = 'green';
        setPasswordButton.disabled = false;
    } else {
        messageText.style.color = 'red';
        setPasswordButton.disabled = true;
    }
    messageText.innerText = message;
}

function onButtonClick() {
    alert('Passwort gespeichert');
    messageText.innerText = '';
    passwordInput.value = '';
}
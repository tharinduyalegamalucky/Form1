const from = document.getElementsById('form');
const Username = document.getElementsById('Username');
const Email = document.getElementsById('Email');
const Age = document.getElementsById('Age');

from.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const ageValue = age.value.trim();
}
const userName = document.getElementById("input-password");
const passWord = document.getElementById("input-password");

const warning1 = document.getElementById("waarschuwing1");
const warning2 = document.getElementById("waarschuwing2");

userName.addEventListener('keyup', checkUsername);
passWord.addEventListener('keyup', checkPassword);

function checkUsername (e) {
    if (e.target.value.includes('@')) {
        warning1.textContent = "Gebruikersnaam mag geen @ bevatten";
        } else {
        warning1.textContent = '';
    }
}

function checkPassword (e) {
    if (e.target.value === '' || e.target.value.length > 6) {
        warning2.textContent = '';
    } else {
        warning2.textContent = "Wachtwoord is te kort, gebruik minimaal 6 tekens";
    }
}
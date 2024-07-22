function validatePassword() {
    var password = document.getElementById('password').value;
    var lowerCase = document.getElementById('lowercase');
    var upparCase = document.getElementById('upparcase');
    var number = document.getElementById('number');
    var special = document.getElementById('special');
    var length = document.getElementById('length');

    var hasLowerCase = false;
    var hasUpparCase = false;
    var hasNumber = false;
    var hasSpecial = false;
    var hasLength = password.length >= 8;

    for (var i = 0; i < password.length; i++) {
        var char = password[i];
        if (isLowerCase(char)) {
            hasLowerCase = true;
        } else if (isUpparCase(char)) {
            hasUpparCase = true;
        } else if (isNumber(char)) {
            hasNumber = true;
        } else if (isSpecial(char)) {
            hasSpecial = true;
        }
    }

    function isLowerCase(char) {
        return char >= 'a' && char <= 'z';
    }

    function isUpparCase(char) {
        return char >= 'A' && char <= 'Z';
    }

    function isNumber(char) {
        return char >= '0' && char <= '9';
    }

    function isSpecial(char) {
        const specialCharacters = "!@#$%^&*(),.?\":{}|<>";
        return specialCharacters.includes(char);
    }

    lowerCase.classList.toggle('valid', hasLowerCase);
    upparCase.classList.toggle('valid', hasUpparCase);
    number.classList.toggle('valid', hasNumber);
    special.classList.toggle('valid', hasSpecial);
    length.classList.toggle('valid', hasLength);
}

var eyeIcon = document.getElementById('eyeIcon');

eyeIcon.addEventListener('click', () => {
    if (password.type === 'password') {
        password.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        password.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
});
const forgotPasswordModal = document.getElementById('forgot-password-modal');
const forgotPasswordForm = document.getElementById('forgot-password-form');
const verificationCodeForm = document.getElementById('verification-code-form');
const codeInputs = verificationCodeForm.querySelectorAll('.code-inputs input');
const newPasswordForm = document.getElementById('new-password-form');
const loadingSpinner = document.getElementById('loading-spinner');
const passwordInput = document.getElementById('new-password-input');
const updatePasswordButton = document.getElementById('update-password-btn');
const successModal = document.getElementById('success-modal');
const successOk = document.getElementById('success-ok');
const modalOverlay = document.getElementById('modal-overlay');
const loginModal = document.getElementById('login-modal');
const reqUppercase = document.getElementById('req-uppercase');
const reqNumber = document.getElementById('req-number');
const reqSpecial = document.getElementById('req-special');
const reqLength = document.getElementById('req-length');

function validatePassword() {
    const password = passwordInput.value;
    let isValid = true;

    if (/[A-Z]/.test(password)) {
        reqUppercase.style.color = 'green';
    } else {
        reqUppercase.style.color = 'red';
        isValid = false;
    }

    if (/[0-9]/.test(password)) {
        reqNumber.style.color = 'green';
    } else {
        reqNumber.style.color = 'red';
        isValid = false;
    }

    if (/[@#$%&*]/.test(password)) {
        reqSpecial.style.color = 'green';
    } else {
        reqSpecial.style.color = 'red';
        isValid = false;
    }

    if (password.length >= 8) {
        reqLength.style.color = 'green';
    } else {
        reqLength.style.color = 'red';
        isValid = false;
    }

    return isValid;
}

passwordInput.addEventListener('input', validatePassword);

updatePasswordButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (passwordInput.value.trim() === '') {
        alert("Digite uma nova senha.");
        return;
    }

    const isValid = validatePassword();

    if (isValid) {
        successModal.style.display = 'flex';
    } else {
        alert("A senha não atende aos requisitos.");
        successModal.style.display = 'none';
    }
});

if (successOk) {
    successOk.addEventListener('click', () => {
        window.location.href = './login.html';
    });
}

function checkCodeComplete() {
    const allFilled = Array.from(codeInputs).every(input => input.value.length === 1);

    if (allFilled) {
        newPasswordForm.style.display = 'none';
        loadingSpinner.style.display = 'flex';

        setTimeout(() => {
            loadingSpinner.style.display = 'none';
            newPasswordForm.style.display = 'block';
            newPasswordForm.querySelector('input').focus();
        }, 3000);
    } else {
        loadingSpinner.style.display = 'none';
        newPasswordForm.style.display = 'none';
    }
}

codeInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        checkCodeComplete();
        if (input.value.length > 0 && index < codeInputs.length - 1) {
            codeInputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && input.value === '' && index > 0) {
            codeInputs[index - 1].focus();
        }
    });
});

forgotPasswordForm.addEventListener('submit', (e) => {
    e.preventDefault();
    forgotPasswordForm.style.display = 'none';
    verificationCodeForm.style.display = 'block';
    codeInputs[0].focus();
});

forgotBackLogin.addEventListener('click', (e) => {
    e.preventDefault();
    forgotPasswordModal.style.display = 'none';
    loginModal.style.display = 'block';
    if (modalOverlay) modalOverlay.style.display = 'none';
});
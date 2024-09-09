function redirect2() {
    window.location.href = 'login.html';
}

function createAccount() {
    const form = document.getElementById('signupForm');
    const errorMessage = document.getElementById('error_message');
    
    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const password = form.elements['password'].value.trim();
    const confirmPassword = form.elements['confirm_password'].value.trim();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;

    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        errorMessage.textContent = 'Preencha todos os campos.';
        errorMessage.style.display = 'block';
        return;
    }

    if (!emailRegex.test(email)) {
        errorMessage.textContent = 'Formato de e-mail inválido.';
        errorMessage.style.display = 'block';
        return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const emailExists = existingUsers.some(user => user.email === email);
    
    if (emailExists) {
        errorMessage.textContent = 'E-mail já cadastrado.';
        errorMessage.style.display = 'block';
        return;
    }
    
    if (password !== confirmPassword) {
        errorMessage.textContent = 'As senhas não conferem.';
        errorMessage.style.display = 'block';
        return;
    }

    if (!passwordRegex.test(password)) {
        errorMessage.textContent = 'A senha deve ter no mínimo 8 caracteres, incluindo pelo menos 1 letra maiúscula, 1 caractere especial e 1 número.';
        errorMessage.style.display = 'block';
        return;
    }
    
    errorMessage.style.display = 'none';
     
    const formData = {
        name: name,
        email: email,
        password: password
    };
    
    existingUsers.push(formData);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    
    
    const successModal = document.getElementById('successModal');
    successModal.style.display = 'block';
}

document.getElementById('closeModal').onclick = function() {
    const successModal = document.getElementById('successModal');
    successModal.style.display = 'none';
    window.location.href = 'user_data.html';
};

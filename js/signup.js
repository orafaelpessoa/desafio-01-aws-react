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
    
    
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        errorMessage.textContent = 'Preencha todos os campos.';
        errorMessage.style.display = 'block';
        return;
    }
    
    if (password !== confirmPassword) {
        errorMessage.textContent = 'As senhas não conferem.';
        errorMessage.style.display = 'block';
        return;
    }
    
    errorMessage.style.display = 'none';
     
    const formData = {
        name: name,
        email: email,
        password: password
    };
    
    localStorage.setItem('userData', JSON.stringify(formData));
    
    window.location.href = 'home.html';
}

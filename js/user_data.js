document.addEventListener('DOMContentLoaded', () => {

    const userData = JSON.parse(localStorage.getItem('users')) || [];
    
    const lastUser = userData[userData.length - 1];
    
    if (lastUser) {
        document.getElementById('userName').textContent = `Nome: ${lastUser.name}`;
        document.getElementById('userEmail').textContent = `E-mail: ${lastUser.email}`;
        document.getElementById('userPassword').textContent = `Senha: ${lastUser.password}`;
    } else {
        document.getElementById('userName').textContent = 'Nenhum dado de usuário encontrado.';
    }
    
    
    document.getElementById('loginButton').addEventListener('click', () => {
        window.location.href = 'pomo_login.html';
    });
});

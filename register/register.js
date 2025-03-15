// register/register.js
document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Example: Save user data (replace with backend API call)
    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user));
  
    alert('Registration successful! Redirecting to login...');
    window.location.href = '../login/login.html';
  });
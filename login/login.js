// login/login.js
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Example: Check credentials (replace with backend API call)
    if (email === 'user@example.com' && password === 'password123') {
      alert('Login successful! Redirecting to dashboard...');
      window.location.href = '../dashboard/dashboard.html';
    } else {
      alert('Invalid email or password. Please try again.');
    }
  });
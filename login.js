document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simple role assignment based on username for demonstration
  let userRole = 'guest';
  if (username === 'admin' && password === 'admin') {
    userRole = 'admin';
  } else if (username === 'user' && password === 'user') {
    userRole = 'user';
  }

  // Store the user role in localStorage for use on the dashboard page
  localStorage.setItem('userRole', userRole);

  // Redirect to dashboard page
  window.location.href = 'dashboard.html';
});

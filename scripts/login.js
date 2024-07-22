function showRegisterForm() {
  document.getElementById('login-form').classList.add('hidden');
  document.getElementById('register-form').classList.remove('hidden');
  document.getElementById('forgot-password-form').classList.add('hidden');
  clearMessages();
}

function showLoginForm() {
  document.getElementById('login-form').classList.remove('hidden');
  document.getElementById('register-form').classList.add('hidden');
  document.getElementById('forgot-password-form').classList.add('hidden');
  clearMessages();
}

function showForgotPasswordForm() {
  document.getElementById('login-form').classList.add('hidden');
  document.getElementById('register-form').classList.add('hidden');
  document.getElementById('forgot-password-form').classList.remove('hidden');
  clearMessages();
}

function clearMessages() {
  document.getElementById('login-message').textContent = '';
  document.getElementById('register-message').textContent = '';
  document.getElementById('forgot-message').textContent = '';
}

function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  const users = JSON.parse(localStorage.getItem('users')) || [];

  const user = users.find(user => user.email === email && user.password === password);
  if (user) {
      window.location.href = '/pages/welcome.html';
  } else {
      document.getElementById('login-message').textContent = 'Usuário não cadastrado ou senha incorreta.';
  }
}

function register() {
  const name = document.getElementById('register-name').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const users = JSON.parse(localStorage.getItem('users')) || [];

  if (password !== confirmPassword) {
      document.getElementById('register-message').textContent = 'Senhas não correspondem.';
      return;
  }

  if (!validateEmail(email)) {
      document.getElementById('register-message').textContent = 'Email inválido.';
      return;
  }

  const userExists = users.some(user => user.email === email || user.name === name);
  if (userExists) {
      document.getElementById('register-message').textContent = 'Usuário já cadastrado.';
      return;
  }

  users.push({ name, email, password });
  localStorage.setItem('users', JSON.stringify(users));
  document.getElementById('register-message').textContent = 'Cadastro realizado com sucesso!';
  showLoginForm();
}

function forgotPassword() {
  const email = document.getElementById('forgot-email').value;
  const users = JSON.parse(localStorage.getItem('users')) || [];

  const user = users.find(user => user.email === email);
  if (user) {
      document.getElementById('forgot-message').textContent = 'Email de recuperação enviado.';
  } else {
      document.getElementById('forgot-message').textContent = 'Email não cadastrado.';
  }
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

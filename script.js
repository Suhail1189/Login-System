var users = []; 
function showLogin() {
  document.getElementById("login-form").classList.remove("hidden");
  document.getElementById("register-form").classList.add("hidden");
}
function showRegister() {
  document.getElementById("register-form").classList.remove("hidden");
  document.getElementById("login-form").classList.add("hidden");
}
function showHome(username) {
  document.getElementById("home-page").classList.remove("hidden");
  document.getElementById("login-form").classList.add("hidden");
  document.getElementById("register-form").classList.add("hidden");
  document.getElementById("user-name").innerText = username;
}
function register() {
  var email = document.getElementById("reg-email").value;
  var password = document.getElementById("reg-password").value;
  if (!email.includes("@")) {
    alert("Invalid email address");
    return;
  }
  if (users.some(user => user.email === email)) {
    alert("Email is already registered. Please use another email.");
    return;
  }
  users.push({ email, password });
  alert("Registration successful! Please login.");
  showLogin();
}
function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var user = users.find(user => user.email === email);
  if (!user) {
    alert("All inputs is required.");
    return;
  }
  if (user.password !== password) {
    alert("Incorrect password. Please try again.");
    return;
  }
  alert("Login successful!");
  showHome(email);
}
function logout() {
  document.getElementById("home-page").classList.add("hidden");
  document.getElementById("login-form").classList.remove("hidden");
}

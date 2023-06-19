function registerUser() {
  // Retrieve form inputs
  var name = document.getElementById("nameInput").value;
  var email = document.getElementById("emailInput").value;
  var password = document.getElementById("passwordInput").value;

  // Perform validation
  if (!name || !email || !password) {
    alert("Please fill in all fields");
    return false;
  }

  // Perform registration logic here
  // ...

  alert("Registration successful!");
  return true;
}

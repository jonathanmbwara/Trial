// Function to toggle the visibility of country-specific options
function toggleCountryOptions(selectElement) {
  var countrySelection = document.getElementById("countrySelection");
  if (selectElement.value === "England") {
    countrySelection.style.display = "block";
  } else {
    countrySelection.style.display = "none";
  }
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the default form submission
  
  // Get the form inputs
  var emailInput = document.getElementById("emailInput").value;
  var passwordInput = document.getElementById("passwordInput").value;
  var countrySelect = document.getElementById("countrySelect").value;
  
  // Perform form validation
  if (!emailInput || !passwordInput || !countrySelect) {
    alert("Please fill in all the required fields.");
    return;
  }
  
  // Submit the form data to the server (you can customize this part according to your requirements)
  // ...
  
  // Clear the form inputs after submission
  document.getElementById("emailInput").value = "";
  document.getElementById("passwordInput").value = "";
  document.getElementById("countrySelect").value = "";
}

// Add event listener to the form submit event
var loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", handleFormSubmit);

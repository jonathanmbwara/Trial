// Login form validation function
const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', event => {
  // Get email input value
  const emailInput = event.target.elements['email'];
  if (!emailInput || !validateEmail(emailInput)) {
    alert('Invalid Email Address');
    event.preventDefault();
    return;
  }

  // Continue form submission once everything checks out
  event.proceed();
});

function validateEmail(inputValue) {
  let re = /^([\w\.\+\-]+@[\w\-]+\.[\w\-\.]+$)/;
  return re.test(String(inputValue));
}

// Weather API fetching logic
const weatherContainer = document.getElementById('weather-container');
const citiesList = ['Berlin','Paris','London'];
document.querySelector('.cities').addEventListener('change', evt => {
  const selectedOptionValue = evt.currentTarget.options[evt.selectedIndex].value;
  if (!selectedOptionValue) {
    return;
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&units=metric&appid=YOUR_API_KEY`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temperatureInCelsius = data.main.temp - 273.15;
      const fahrenheitTemperature = (temperatureInCelsius * 9 / 5) + 32;
      const div = document.createElement('div');
      div.innerText = `${chosenCity}, ${Math.floor(temperatureInCelsius)}°C (${fahrenheitTemperature}°F)`;
      weatherContainer.insertAdjacentHTML('beforeend', div);
    })
    .catch(err => {
      const errorDiv = document.createElement('p');
      errorDiv.innerText = 'Oops, Something went wrong';
      weatherContainer.insertAdjacentHTML('beforeend', errorDiv);
    });
});

// Change chosenCity variable based on user selection from dropdown menu
let chosenCity = null;
for (const citizenOfTheWorld of citizens) {
  citizenOfTheWorld.checked = false;
}
// Add an "animation" class to the `<div>` element that contains the weather information after it has been created
div.classList.add("animation");

// Create a CSS transition effect for the "animation" class
const cssTransitionEffect = `
  transform: translateX(0px);
  opacity: 0;
  transition: all 0.4s ease-out;
`;

// Once the `<div>` element has been inserted into the DOM, apply the CSS transition effect
window.requestAnimationFrame(() => {
  div.style.cssText += cssTransitionEffect;
});

// Show pop-up when Learn More button is clicked
const learnMoreButton = document.querySelector('.btn.btn-primary');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup-close');

learnMoreButton.addEventListener('click', () => {
  popup.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Add smooth scrolling to navigation links
const navLinks = document.querySelectorAll('#siteNav a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetSection = document.querySelector(e.target.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Add event listener to the form submit event
loginForm.addEventListener('submit', handleFormSubmit);

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


const form = document.querySelector("#loginForm");
form.onsubmit = e => {
  const emptyFields = Array.from(form).filter(field => field.value === "").length > 0;
  if (emptyFields.length > 1) {
    return false;
  } else {
    return true;
  }
};
const container = document.querySelector(".weather-container");
const cityNames = ["Berlin","Paris","London"];
const radios = document.querySelectorAll(".city-radio");
radios.forEach((r) => {
  r.addEventListener("click", () => {
    console.log(cityNames[Array.from(radios).indexOf(r)]);
  });
});
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityNames[0]}&appid=YOUR_API_KEY`)
  .then(response => response.json())
  .then(data => {
    const temp = Math.round(data["main"]["temp"] - 273.15);
    const tempFahrenheit = (temp * 9 / 5) + 32;
    const div = document.createElement("div");
    div.innerHTML = `${cityName}: ${temp}°C (${tempFahrenheit}°F)`;
    container.appendChild(div);
  })
  .catch(() => {
    const errorDiv = document.createElement("div");
    errorDiv.textContent = "Error";
    container.appendChild(errorDiv);
  });

  const imgElements = document.querySelectorAll("img");
  imgElements.foreach(imgEle)
  
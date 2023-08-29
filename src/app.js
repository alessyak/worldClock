function displayCityData(city, timezone) {
  let cityName = document.querySelector(`#${city}`);
  let date = cityName.querySelector(".date");
  let time = cityName.querySelector(".time");
  let timeZone = moment().tz(`${timezone}`);
  date.innerHTML = timeZone.format("MMMM Do YYYY");
  time.innerHTML = timeZone.format("h:mm:ss [<small>]A[</small>]");
}

function update() {
  displayCityData("toronto", "America/Toronto");
  displayCityData("almaty", "Asia/Almaty");
  displayCityData("newYork", "America/New_York");
  displayCityData("berlin", "Europe/Berlin");
  displayCityData("london", "Europe/London");
}

update();
setInterval(update, 1000);

function updateCityData(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let cities = document.querySelector("#cities");
  cities.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>`;
}

let cities = document.querySelector("#cityOption");
cities.addEventListener("change", updateCityData);

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
  displayCityData("newYork", "America/Toronto");
  displayCityData("berlin", "Europe/Berlin");
  displayCityData("london", "Europe/London");
}

update();
setInterval(update, 1000);

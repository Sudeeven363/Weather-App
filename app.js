async function showweather() {
  a = placename.value;

  placename.value = "";
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + a;
  placename.value;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "991ef8e8ddmshb2df63aa08fa4c7p1b78c8jsna056c714a19c",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    cityname.innerHTML = a.toLocaleUpperCase();
    temp.innerHTML = "Temperature : " + result.temp + " °C";
    humidity.innerHTML = "Humidity : " + result.humidity + " %";
    feelslike.innerHTML = "Feels like : " + result.feels_like + " °C";
    windspeed.innerHTML = "Wind Speed : "+ Math.trunc((result.wind_speed*3.6)) + " km/hr";

  } catch (error) {
    console.error(error);
  }
  
}

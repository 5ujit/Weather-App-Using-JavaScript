const API_KEY = "e896c47f9b1f1b64f8f45229691126e6"; 
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getWeather = async (city) => {
    weather.innerHTML = `<h2>Loading...</h2>`;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "401") {
            weather.innerHTML = `<h2>❌ Invalid API Key. Please update it.</h2>`;
            return;
        }

        if (data.cod === "404") {
            weather.innerHTML = `<h2>❌ City Not Found</h2>`;
            return;
        }

        showWeather(data);
    } catch (error) {
        weather.innerHTML = `<h2>⚠️ Error fetching weather data</h2>`;
        console.error("Fetch Error:", error);
    }
};

const showWeather = (data) => {
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4>${data.weather[0].main}</h4>
        </div>
    `;
};


// console.log(5=="5");//true 
// console.log(5==="5");//flse 

// let 
// const 
// var 


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const city = search.value.trim();

    if (city) {
        getWeather(city);
    } else {
        weather.innerHTML = `<h2>⚠️ Please enter a city name</h2>`;
    }
});

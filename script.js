const cities = {
    703446: 'Kyiv',
    1006984: 'London',
    5128581: 'New York City',
    709930: 'Dnipro',
    2735943: 'Porto',
}

//we receive select
function init() {
    const selectcity = document.createElement('select');
    let block = document.querySelector("#block");
    selectcity.id = 'City';

    for (let cityid in cities) {
        const opt = document.createElement('option');
        opt.value = cityid;
        opt.textContent = cities[cityid];
        selectcity.append(opt);
    }
    block.append(selectcity);
    getWeather(); //first launch
    block.onchange = getWeather; //event triggered
}
// we receive weather
function getWeather() {
    let cityId = document.querySelector('#City').value;
    fetch(`${param.url}weather?id=${cityId}&appid=${param.appid}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
}

function showWeather(data) {
    console.log(data);
    document.querySelector('.city-name').textContent = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    document.querySelector('.weather').textContent = data.weather[0]['description'];
    document.querySelector('.temp-max').innerHTML = Math.round(data.main.temp_max - 273) + '&deg;';
    document.querySelector('.temp-min').innerHTML = Math.round(data.main.temp_min - 273) + '&deg;';
}

init();

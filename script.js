let temprature = document.getElementById('temprature')
let city = document.getElementById('city')
let cityName = document.getElementById('cityName')
let min =document.getElementById('min')

let search =async () => {
    if(cityName.value=="") {
        alert('please enter a city name before search')
    } else {
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
    // let response = await fetch(url)
    // let data = await response.json()
    // temprature.textContent = data.main.temp
    // city.textContent = `${data.name} , ${data.sys.country}`

    let response = await fetch(url)
    let data = await response.json()
    temprature.textContent = data.main.temp
    city.textContent=`${data.name} , ${data.sys.country}`
    min.textContent=data.main.temp_min
    }
}
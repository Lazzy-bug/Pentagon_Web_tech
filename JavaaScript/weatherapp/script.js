let button =document.getElementById("btn")
let result = document.getElementById("result")
button.addEventListener("click",()=>{
    let input = document.getElementById("input").value;
    let apiKey = "340677cb6d7066e64bdaa44b46a6f727"
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`

    fetch(api)
    .then(x=>x.json())
    .then(y=>{
        if (y.cod==="404"){
            result.innerHTML="<h2>City not found</h2>"
        }else{
            result.innerHTML= `
            <h2>City:${y.name},${y.sys.country}</h2>
            <p>Temprature:${y.main.temp}</p>
            <p>Description:${y.weather[0].description}</p>
            <p>wind speed:${y.wind.speed}</p>
            `
        }
    })
    .catch(err=>console.log(err))
})
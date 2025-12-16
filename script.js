// fetch("https://api.openweathermap.org/data/2.5/weather?q=Delhi&units=metric&APPID=9375f381df3381246803e42b14904b32")
// .then((res)=>{
//   return res.json()
// })
// .then((data)=>{
//   console.log(data)
// })
// .catch((err)=>{
// console.log(err);
// })

let mau=document.getElementById('wea')
let cityout=document.getElementById('city')
let tem=document.getElementById('tep')
let feltem=document.getElementById('feelslike')
let humidity=document.getElementById('humidity')
let pressure=document.getElementById('pressure')
let visi=document.getElementById('visibility')
let wind= document.getElementById('wind')

function fill(err) {
  cityout.textContent= `server error can't load`
  tem.textContent=``
  feltem.textContent= ``
  humidity.textContent=``
  pressure.textContent= ``
  visi.textContent=``
  wind.textContent=``
  mau.textContent=``
  console.log("error hai")
  console.log(err)
}

function job(data) {
    let icon = document.createElement('img')
    console.log(data)
    cityout.textContent= `City: ${data.name}, ${data.sys.country}`
    tem.textContent=`temperature: ${data.main['temp']}° c`
    feltem.textContent= `feels like: ${data.main['feels_like']}° c`
    humidity.textContent=`humidity: ${data.main.humidity} %`
    pressure.textContent= `pressure: ${data.main.pressure} mm`
    visi.textContent=`visibility: ${Number(data.visibility)/1000} km`
    let winddata= (Number(data.wind.speed)*3.6).toFixed(1)
    wind.textContent= `wind speed: ${winddata} km/h`
    mau.textContent=`Weather: ${data.weather[0].main}, ${data.weather[0].description}`
    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    mau.appendChild(icon)
}


async function getdata() {
  let inp = document.getElementById('inp')
  let cityin = inp.value.trim()
  let url= `https://api.openweathermap.org/data/2.5/weather?q=${cityin}&units=metric&APPID=04727c2e43f9b2ce0c3b23fbab29bf62`
  try {
    let res= await fetch(url)
    let data= await res.json()
    job(data)
    
  } catch (error) {
    fill()
  }
  inp.value=""
  inp.focus()
}
document.getElementById('output').addEventListener('submit',(e)=>{
  e.preventDefault()
  getdata()
})

async function showdefault() {
  let cityin ="Patna"
  let url= `https://api.openweathermap.org/data/2.5/weather?q=${cityin}&units=metric&APPID=04727c2e43f9b2ce0c3b23fbab29bf62`
  try {
    let res= await fetch(url)
    let data= await res.json()
    job(data)
  } catch (error) {
    fill()
  }
}
showdefault()



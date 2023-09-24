import {url} from "../../settings.js"

export function initFindCar(){
  document.querySelector('#found-car').innerHTML = "";
  document.querySelector('#find-car-btn').addEventListener('click', findCar)
}

async function findCar(){
  document.querySelector('#found-error').innerText = "";
  const carId = document.querySelector('#carId').value
  try{
  const car = await fetch(url+"/"+carId).
    then(res => {
      if(!res.ok){
      throw new Error("Car cannot be found")
      }
      return res.json()
    })
  document.querySelector('#found-car').innerText = JSON.stringify(car, null, 3)
  }catch(e){
    document.querySelector('#found-error').innerText = e.message
  }
}

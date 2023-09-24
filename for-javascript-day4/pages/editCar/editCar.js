import {handleHttpErrors, makeOptions} from "../../utils.js"
import {url} from "../../settings.js"

export function initEditCar(){
    document.querySelector('#btn-find2').addEventListener('click', findCar2);
    document.querySelector('#edit-car').addEventListener('click', editCar);
}

async function editCar(){
  const id = document.querySelector("#car-id2").value;
  const form = document.querySelector('#car-form');
  const updatedCar = {
      id: id,
      brand: form.brand2.value,
      model: form.model2.value,
      pricePerDay: parseFloat(form.ppd2.value),
      bestDiscount: parseInt(form.bd2.value),
  };

  const options = makeOptions("PUT", updatedCar)
  await fetch(url + "/" + id, options)
      .then(handleHttpErrors)
      .then(carResponse => {
          document.querySelector('#show-edit').innerHTML = JSON.stringify(carResponse);
      })
}

async function findCar2(){
  const idFindCarInput = document.querySelector('#text-for-id2').value
  try{
  await fetch(url+"/"+idFindCarInput)
      .then(handleHttpErrors)
      .then(car=> {
          document.querySelector('#car-id2').value = car.id;
          document.querySelector('#brand2').value = car.brand;
          document.querySelector('#model2').value = car.model;
          document.querySelector('#ppd2').value = car.pricePerDay;
          document.querySelector('#bd2').value = car.bestDiscount;
      })
    }catch{
        console.error(err.message)
    }
}
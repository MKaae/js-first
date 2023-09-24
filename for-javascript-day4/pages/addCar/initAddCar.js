import {makeOptions} from "../../utils.js"
import {url} from "../../settings.js"

export async function initAddCar(){
  document.querySelector('#add-car-btn').addEventListener('click', addCar);
}
async function addCar(){
  const form = document.querySelector('#car-form');
  const newCar = {
      brand: form.brand.value,
      model: form.model.value,
      pricePerDay: parseFloat(form.pricePerDay.value),
      bestDiscount: parseInt(form.bestDiscount.value),
  };

  const options = makeOptions("POST", newCar);

  await fetch(url, options)
      .then(res => res.json())
      .then(newlyAddedCar => {
        console.log('Response Data:', newlyAddedCar);
          document.querySelector('#show-data-car').innerHTML = `
          <p>Brand: ${newlyAddedCar.brand}</p>
          <p>Model: ${newlyAddedCar.model}</p>
          <p>Price Per Day: ${newlyAddedCar.pricePerDay}</p>
          <p>Best Discount: ${newlyAddedCar.bestDiscount}</p>
          `;
          form.brand.value = '';
          form.model.value = '';
          form.pricePerDay.value = '';
          form.bestDiscount.value = '';
      })
}

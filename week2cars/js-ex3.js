const url = "http://localhost:8080/api/cars";
const buttonFindCar = document.querySelector('#btn-find-car').addEventListener('click', findCar);
const buttonGetAllCars = document.querySelector('#btn-get-all').addEventListener('click', getAllCars);
const buttonAddCar = document.querySelector('#add-car').addEventListener('click', addCar);
const buttonFindCar2 = document.querySelector('#btn-find2').addEventListener('click', findCar2);
const buttonEditCar = document.querySelector('#edit-car').addEventListener('click', editCar);

function editCar(){
    const id = document.querySelector("#car-id2").value;
    const form = document.querySelector('#car-form');
    const updatedCar = {
        id: id,
        brand: form.brand2.value,
        model: form.model2.value,
        pricePerDay: parseFloat(form.ppd2.value),
        bestDiscount: parseInt(form.bd2.value),
    };

    const options = {
        method: "PUT",
        headers: {
            "Content-type" : "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify(updatedCar)
    }
    fetch(url + "/" + id, options)
        .then(res => res.json())
        .then(carResponse => {
            document.querySelector('#show-edit').innerHTML = JSON.stringify(carResponse);
        })
}

function findCar2(){
    const idFindCarInput = document.querySelector('#text-for-id2').value
    fetch(url+"/"+idFindCarInput)
        .then(res=>{
            if(!res.ok){
                throw Error("Car not found")
            }
            return res.json()
        })
        .then(car=> {
            document.querySelector('#car-id2').value = car.id;
            document.querySelector('#brand2').value = car.brand;
            document.querySelector('#model2').value = car.model;
            document.querySelector('#ppd2').value = car.pricePerDay;
            document.querySelector('#bd2').value = car.bestDiscount;
        })
}

function addCar(){
    const form = document.querySelector('#carForm');
    const newCar = {
        brand: form.brand.value,
        model: form.model.value,
        pricePrDay: parseFloat(form.pricePrDay.value),
        bestDiscount: parseInt(form.bestDiscount.value),
    };

    const options = {
        method: "POST",
        headers: {
            "Content-type" : "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify(newCar)
    }
    fetch(url, options)
        .then(res => res.json())
        .then(carResponse => {
            document.querySelector('#show-data-car').innerHTML = JSON.stringify(carResponse);
        })
}


function getAllCars(){
    fetch(url)
        .then(res => res.json())
        .then(cars => {
            const tableRows = cars.map(car => `
            <tr>
                <td>${car.id}</td>
                <td>${car.brand}</td>
                <td>${car.model}</td>
                <td>${car.pricePerDay}</td>
                <td>${car.bestDiscount}</td>
            </tr>
            `)
            const rowsAsStr = tableRows.join("")
            document.querySelector('#tbody').innerHTML = rowsAsStr; //Remember XSS CrossEyeScripting
        })
}
function findCar(){
    const idFindCarInput = document.querySelector('#text-for-id').value
    fetch(url+"/"+idFindCarInput)
        .then(res=>{
            if(!res.ok){
                throw Error("Car not found")
            }
            return res.json()
        })
        .then(car=> {
            document.querySelector('#found-car').innerText = JSON.stringify(car,null,2)
        })
}

// Given that i need to create a JavaScript object with these fields
// String brand
// String model
// double pricePrDay
// Integer bestDiscount

// Can you provide me with a bootstrap 5 styled form + js to extract data from the form
// Labels and matching input field should be horizontal aligned

// const url = "https://cars-dat3week2.azurewebsites.net/api/cars";

// fetch(url)
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
// });


// const newCar = {
//     brand: "Toyata",
//     model: "RAV",
//     pricePrDay: 500,
//     bestDiscount: 25
// }

// const options = {
//     method: "POST",
//     headers: {
//         "Content-type" : "application/json",
//         "Accept" : "application/json"
//     },
//     body: JSON.stringify(newCar)
// }
// fetch(url, options)
//     .then(res => res.json())
//     .then(carResponse => console.log(carResponse))
  
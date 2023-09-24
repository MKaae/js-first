async function fetchUserInfo(id = null) {
  try {
  //Combined url so if it recieves no ID default is null and if it does it adds it to the url.  
    const url = id
      ? `https://jsonplaceholder.typicode.com/users/${id}`
      : "https://jsonplaceholder.typicode.com/users";
    const res = await fetch(url);
  //Check for http status code is between 200-299 or not  
    if (!res.ok) {
      const errorResponse = await res.json();
      const msg = errorResponse.message ? errorResponse.message : "No error details provided";
      throw new Error(msg);
    }
    //Paring data to json
    const data = await res.json();
    console.log(data);
    //returning data
    return data;
  } catch (err) {
    console.error(err.message);
  }
}
const inputField = document.querySelector('#inputfield');
const button = document.querySelector('#button');
const userInfo = document.querySelector('#user-info');
  //On click it runs an aynsc function.
button.addEventListener('click', async () => {
  //It clear innerHTML of tableBody and of nameField and phoneField.
    tableBody.innerHTML = '';
    nameField.style.display = 'none';
    phoneField.style.display = 'none';
  //It check the inputField for the value that is inthere.  
    const userId = inputField.value;
  //It sets user to the data it recieves from fetchUserInfo which returns is as json.  
    const user = await fetchUserInfo(userId);
  //It populates the innerHTML of the div userInfo with object keys we provide it with.
  //It uses backticks to make a template literal so we can use the ${} to insert the data into the template called variable interpolation.
    userInfo.innerHTML = `
        <p>Name: ${user.name}</p>
        <p>Phone: ${user.phone}</p>
        <br>
        <p style="font-weight:bold;"> Address </p>
        <p>Street: ${user.address.street}</p>
        <p>City: ${user.address.city}</p>
        <p>Zip: ${user.address.zipcode}</p>
        <p>Geo:(lat,lng) ${user.address.geo.lat}, ${user.address.geo.lng}</p>
    `;
});
const tableBody = document.querySelector('#user-table tbody');
const nameField = document.querySelector('#name-field');
const phoneField = document.querySelector('#phone-field');
  //Async function that returns all users it recieves into a table.
async function fetchAllUsersAndRenderTable() {
  //Clears the innerHTML of userInfo in case something is there.
    userInfo.innerHTML = '';
  //Sets data to the json it recieves from fetchUserInfo.  
    const data = await fetchUserInfo();
  //Clears the innerHTML of tableBody so it doesnt duplicate if you click multiple times.  
    tableBody.innerHTML = '';
  //It uses for each and says for each user insert a row, then insert a cell in the row with nameCell and a cell with phoneCell.  
    data.forEach(user => {
        const row = tableBody.insertRow();
        const nameCell = row.insertCell(0);
        const userPhoneCell = row.insertCell(1);
  //We populate each cell with user.name and user.phone with textContent for that cell.    
        nameCell.textContent = user.name;
        userPhoneCell.textContent = user.phone;
    });
  //It changes 2 style elements on name and phoneField to block so they are now visible.  
    nameField.style.display = 'block';
    phoneField.style.display = 'block';
}

const button2 = document.querySelector('#button2');
button2.addEventListener('click', fetchAllUsersAndRenderTable);
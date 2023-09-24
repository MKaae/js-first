document.getElementById("svg2").addEventListener("click",mapHandler)

let selectedCountry;

function mapHandler(evt){
    const countryId = evt.target;
    const id = countryId.id;
    if (selectedCountry) {
        selectedCountry.style.fill = "#dcdcdc";
    }
    selectedCountry = countryId;
    countryId.style.fill = "blue";
    fetch("https://countries.plaul.dk/api/countries"+"/"+id)
    .then(res=>{
        if(!res.ok){
            if(res.status === 404){
                throw new Error("Country not found")
            } else {
            const errorResponse = res.json();
            const msg = errorResponse.message ? errorResponse.message : "No error details provided";
            throw new Error(msg);
            }
        }
        return res.json()})
    .then(country=>{
        document.querySelector("#info").innerHTML = "";
        const currenciesInfo = Object.entries(country.currencies)
        .map(([currencyCode, currencyData]) => {
            return `<p>${currencyCode}: ${currencyData.name} (${currencyData.symbol})</p>`;
        })
        .join('');
        const row=
             `<img src=${country.flag}>
             <p>Name: ${country.name.common}</p>
             <p>Capital: ${country.capital}</p>
             <p>Area: ${country.area} </p>
             <p>Currency:${currenciesInfo}</p>`
             document.querySelector("#info").innerHTML = row
    })
}
let request = new XMLHttpRequest();
let APIKEY = "nScmb5ehJnReWvueGw60fT6GWgXztU1K";

function removeOptions(selectbox) {
    for (let i = selectbox.options.length - 1; i >= 0; i--) {
        selectbox.remove(i);
    }
}

//what i want to display
function displayNicely(apiData) {
    console.log(apiData);
}

function populateCity(apiData) {

    let select = document.getElementById("citySelect");
    if (select.options.length > 0) {
        removeOptions(select);   
    }
    let cityArray = [];
    for (i in apiData["_embedded"].events) {
        let currentEvent = apiData["_embedded"].events[i];
        let city = currentEvent["_embedded"].venues[0].city.name;
        if (cityArray.indexOf(city) == -1) {  
            let opt = document.createElement('option');
            opt.value = city;
            opt.innerHTML = city;
            select.appendChild(opt);
            cityArray.push(city);
        }
    }

}

//what data I want to retrive.......API CALL
function obtainCountry() {

    let countrySelect = document.getElementById("countrySelect");
    let countryCode = countrySelect.options[countrySelect.selectedIndex].value;
    request.open("GET", "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=" + countryCode + "&apikey=nScmb5ehJnReWvueGw60fT6GWgXztU1K");
    request.send();
}

request.onreadystatechange = function() {
    if (this.readyState == 4) {
        if (this.status == 200) {
            let apiData = JSON.parse(this.responseText)
            populateCity(apiData);
            displayNicely(apiData);
        }
    }
}

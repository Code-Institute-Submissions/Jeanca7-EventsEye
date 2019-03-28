let request = new XMLHttpRequest();
let APIKEY = "nScmb5ehJnReWvueGw60fT6GWgXztU1K";
let apiData;


function removeOptions(selectbox) {
    for (let i = selectbox.options.length - 1; i >= 0; i--) {
        selectbox.remove(i);
    }
}

//we push the cities where the events are taking place
function populateCity(apiData) {
    let select = document.getElementById("citySelect");
    if (select.options.length > 0) {
        removeOptions(select);
    }
    let cityArray = [];
    for (i in apiData["_embedded"].events) { //our scope
        let currentEvent = apiData["_embedded"].events[i];
        let city = currentEvent["_embedded"].venues[0].city.name;
        if (cityArray.indexOf(city) == -1) { //we make this so the city is not repeated
            let opt = document.createElement('option');
            opt.value = city;
            opt.innerHTML = city;
            select.appendChild(opt);
            cityArray.push(city);
        }
    }
    let eleCountry = document.getElementById("CountrySelect");
    let country = eleCountry.options[eleCountry.selectedIndex].value;

    //we create our variable city from the selected city in our select
    let eleCity = document.getElementById("citySelect");
    let city = eleCity.options[eleCity.selectedIndex].text;

    //we create our variable genre from the selected genre in our select
    let eleGenre = document.getElementById("genreSelect");
    let genre = eleGenre.options[eleGenre.selectedIndex].text;

    displayNicely(apiData, country, city, genre);
}


//we push the genre available for the events are taking place
function populateGenre(apiData) {
    let select = document.getElementById("genreSelect");
    if (select.options.length > 0) {
        removeOptions(select);
    }

    //we create our variable city from the selected city in our select
    let eleCity = document.getElementById("citySelect");
    let city = eleCity.options[eleCity.selectedIndex].text;

    let genreArray = [];
    for (i in apiData["_embedded"].events) { //our scope

        if (apiData._embedded.events[i]._embedded.venues[0].city.name == city) {
            let currentEvent = apiData["_embedded"].events[i];
            let segment = currentEvent.classifications[0].segment.name;
            if (genreArray.indexOf(segment) == -1) {
                let opt = document.createElement('option');
                opt.value = segment;
                opt.innerHTML = segment;
                select.appendChild(opt);
                genreArray.push(segment);
            }

        }
    }

    let eleCountry = document.getElementById("CountrySelect");
    let country = eleCountry.options[eleCountry.selectedIndex].value;



    //we create our variable genre from the selected genre in our select
    let eleGenre = document.getElementById("genreSelect");
    let genre = eleGenre.options[eleGenre.selectedIndex].text;

    displayNicely(apiData, country, city, genre);
}


// function displayNicely loops through the apiData and only displays for the selected country, city and genre.

function displayNicely(apiData, country, city, genre) {

    console.log(apiData); //we can see the data in the console

    let htmlString; //String used to display api text information in the HTML elements

    for (let i = 0; i < apiData._embedded.events.length; i++) {

        if (apiData._embedded.events[i]._embedded.venues[0].city.name == city) {
            if (apiData._embedded.events[i].classifications[0].segment.name == genre) {
                if (typeof(apiData._embedded.events[i].name) !== "undefined") {
                    htmlString += apiData._embedded.events[i].name + "<br />";
                }


                if (typeof(apiData._embedded.events[i].images) !== "undefined") {
                    htmlString += "<img src= " + apiData._embedded.events[i].images[0].url + " class='artist-image'> <br />"; //artist image***    
                }


                if (typeof(apiData._embedded.events[i].classifications[0].segment.name) !== "undefined") {
                    htmlString += "Segment: " + apiData._embedded.events[i].classifications[0].segment.name + "<br />";
                }

                if (typeof(apiData._embedded.events[i].classifications[0].genre.name) !== "undefined") {
                    htmlString += "Genre: " + apiData._embedded.events[i].classifications[0].genre.name + "<br />";
                }

                if (typeof(apiData._embedded.events[i].classifications[0].subGenre.name) !== "undefined") {
                    htmlString += "Subgenre: " + apiData._embedded.events[i].classifications[0].subGenre.name + "<br />";
                }


                if (typeof(apiData["_embedded"].events[i].classifications[0].type) !== "undefined") {
                    if (apiData["_embedded"].events[i].classifications[0].type.name !== "Undefined") {
                        htmlString += "Type: " + apiData._embedded.events[i].classifications[0].type.name + "<br />";
                    }
                }

                if (typeof(apiData._embedded.events[i].sales.public.startDateTime) !== "undefined") {
                    htmlString += "Start Date Time: " + apiData._embedded.events[i].sales.public.startDateTime + "<br />";
                }

                if (typeof(apiData._embedded.events[i].sales.public.endDateTime) !== "undefined") {
                    htmlString += "End Date Time: " + apiData._embedded.events[i].sales.public.endDateTime + "<br />";
                }


                if (typeof(apiData._embedded.events[i].dates.timezone) !== "undefined") {
                    htmlString += "Timezone: " + apiData._embedded.events[i].dates.timezone + "<br />";
                }


                if (typeof(apiData._embedded.events[i].dates.status.code) !== "undefined") {
                    htmlString += "Status: " + apiData._embedded.events[i].dates.status.code + "<br />";
                }


                if (typeof(apiData._embedded.events[i].info) !== "undefined") {
                    htmlString += "Information: " + apiData._embedded.events[i].info + "<br />";
                }

                if (typeof(apiData._embedded.events[i].pleaseNote) !== "undefined") {
                    htmlString += "Please Note: " + apiData._embedded.events[i].pleaseNote + "<br />";
                }


                if (typeof(apiData._embedded.events[i].priceRanges) !== "undefined") {

                    htmlString += "Price Type: " + apiData._embedded.events[i].priceRanges[0].type + "<br />";
                    htmlString += "Currency: " + apiData._embedded.events[i].priceRanges[0].currency + "<br />";
                    htmlString += "Price range: " + apiData._embedded.events[i].priceRanges[0].max + " - ";
                    htmlString += apiData._embedded.events[i].priceRanges[0].min + "<br />";
                }


                if (typeof(apiData._embedded.events[i].ticketLimit) !== "undefined") {
                    htmlString += "Ticket Limit Information: " + apiData._embedded.events[i].ticketLimit.info + "<br />";
                }



                if (typeof(apiData._embedded.events[i].products) !== "undefined") {
                    htmlString += "Product Type: " + apiData._embedded.events[i].products[0].type + "<br />";
                }


                if (typeof(apiData._embedded.events[i].seatmap) !== "undefined") {
                    htmlString += "Seatmap <br />" + "<img src = " + apiData._embedded.events[i].seatmap.staticUrl + "><br />"; //WE ADD THE IMAGE DEPENDING ON EACH EVENT*******
                }


                if (typeof(apiData._embedded.events[i]._embedded.venues[0].city.name) !== "undefined") {
                    htmlString += "City: " + apiData._embedded.events[i]._embedded.venues[0].city.name + "<br />"; //CITY*****
                }

                if (typeof(apiData._embedded.events[i]._embedded.venues[0].country.name) !== "undefined") {
                    htmlString += "Country: " + apiData._embedded.events[i]._embedded.venues[0].country.name + "<br />";
                }

                if (typeof(apiData._embedded.events[i]._embedded.venues[0].country.countryCode) !== "undefined") {
                    htmlString += "Country Code: " + apiData._embedded.events[i]._embedded.venues[0].country.countryCode + "<br />";
                }


                if (typeof(apiData._embedded.events[i]._embedded.venues[0].address.line1) !== "undefined") {
                    htmlString += "Venue's Address: " + apiData._embedded.events[i]._embedded.venues[0].address.line1 + "<br />";
                }


                if (typeof(apiData._embedded.events[i]._embedded.venues[0].generalInfo) !== "undefined") {
                    htmlString += "Child Information: " + apiData._embedded.events[i]._embedded.venues[0].generalInfo.childRule + "<br />";
                    htmlString += "General Information: " + apiData._embedded.events[i]._embedded.venues[0].generalInfo.generalRule + "<br />";
                }

                if (typeof(apiData["_embedded"].events[i]["_embedded"].venues[0].images) !== "undefined") { //we add the images*****

                    htmlString += "Venue Place: <br />" + "<img src =" + apiData._embedded.events[i]._embedded.venues[0].images[0].url + "> <br />";
                }


                if (typeof(apiData._embedded.events[i]._embedded.venues[0].parkingDetail) !== "undefined") {
                    htmlString += "Parking Details: " + apiData._embedded.events[i]._embedded.venues[0].parkingDetail + "<br />";
                }


                if (typeof(apiData._embedded.events[i].url) !== "undefined") {
                    htmlString += "Buy your tickets here: " + "<a href=" + apiData._embedded.events[i].url + ">Click here</a>";
                }

                htmlString += "<hr>";


                document.getElementById("concertData").innerHTML = htmlString; //we add the content to our div with id="concertData" //PROBLEM HERE!
            }
        }
    }
}

function refreshCities() { //onchange for cities select
    let eleCountry = document.getElementById("CountrySelect");
    let country = eleCountry.options[eleCountry.selectedIndex].value;

    //we create our variable city from the selected city in our select
    let eleCity = document.getElementById("citySelect");
    let city = eleCity.options[eleCity.selectedIndex].text;

    //we create our variable genre from the selected genre in our select
    let eleGenre = document.getElementById("genreSelect");
    let genre = eleGenre.options[eleGenre.selectedIndex].text;

    populateGenre(apiData); //this is going to happen when onchange in the cities select
}

function refreshGenres() { //onchange for genres select
    let eleCountry = document.getElementById("CountrySelect");
    let country = eleCountry.options[eleCountry.selectedIndex].value;

    //we create our variable city from the selected city in our select
    let eleCity = document.getElementById("citySelect");
    let city = eleCity.options[eleCity.selectedIndex].text;

    //we create our variable genre from the selected genre in our select
    let eleGenre = document.getElementById("genreSelect");
    let genre = eleGenre.options[eleGenre.selectedIndex].text;

    displayNicely(apiData, country, city, genre); //this is going to happen when onchange in the genres select
}

//what data I want to retrive.......API CALL   OBTAIN OUR DATA
function obtainCountry() {
    let countrySelect = document.getElementById("CountrySelect"); //we're getting the select element with id="CountrySelect"
    let CountryCode = countrySelect.options[countrySelect.selectedIndex].value; //we're getting the value of the option within the select element
    request.open("GET", "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=" + CountryCode + "&apikey=nScmb5ehJnReWvueGw60fT6GWgXztU1K"); //GET Country
    request.send();
}


// CREATE A NEW REQUEST FOR EACH SELECT ELEMENT BECAUSE FROM OUR REQUEST WE GET OUR DATA IN OUR API CALL 
request.onreadystatechange = function() { //the answer is here if we request both the country and the city******* //WE DISPLAY OUR REQUEST IF READYSTATE==4 AND STATUS==200
    if (this.readyState == 4) {
        if (this.status == 200) {
            apiData = JSON.parse(this.responseText)
            populateCity(apiData);
            populateGenre(apiData);
            // displayNicely(apiData); //displayNicely is displayed with the data retrived from the IPA CALL with our request.
            // document.getElementById("concertData").innerHTML = displayNicely(apiData);
        }
        else if (this.status == 404) {
            document.getElementById("concertData").innerHTML = "<h2>City not found! Please try again</h2>"
        }
    }
}

//USE THE LAST REQUEST WHEN CREATING OBTAINGENRE()  HOW CAN I FILTER THE DIV id="concertData" ?


// <div id="concertData"></div>
// onclick="obtainCountry()"

const output = document.getElementById("output");
const start = document.getElementById("start");
const end = document.getElementById("end");

let template = "";

function ValidTimes(startdate, enddate) {
    const start = new Date(startdate);
    const end = new Date(enddate);
    if (end < start) {
        return false;
    } else {
        return true;
    }
}

function RentalDays(startdate, enddate) {
    const start = new Date(startdate);
    const end = new Date(enddate);
    const timedifference = end.getTime() - start.getTime();
    const daydifference = timedifference / (1000 * 3600 * 24) + 1;
    return daydifference;
}

function RentalCost(days, priceperday) {
    const totalprice = (495 + (priceperday * days)) * 1.25;
    return totalprice;
}

const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    output.innerHTML = "" // Removing old search results
    const ValidDates = ValidTimes(start.value, end.value);

    if (ValidDates) {
        for (const rental of carlist) {

            const days = RentalDays(start.value, end.value)
            const price = RentalCost(days, rental.priceperday).toFixed(2);

            template = `
    <section class="rentals">
        <img src="${rental.image}" alt="rental" class="car"> 
        <div class="card-text">
           Model: ${rental.model} <br> Category: ${rental.category} <br> Persons: ${rental.persons} <br> Suitcases: ${rental.suitcases}
        </div>
        <div class="booking" id="choice">
            ${price} DKK <br> <a href = "accessories.html"><button type="button" id="booking">  Book Now </button></a>
        </div>
    </section>`

            if (rental.persons >= document.getElementById("formpersons").value && rental.suitcases >= document.getElementById("formsuitcases").value) {
                output.insertAdjacentHTML("beforeend", template);
            }
        }
    }

    sessionStorage.setItem("start", start)
    sessionStorage.setItem("end", end)
    //document.location.href = "accessories.html" - if added, sends me to the accessory page without even selecting a car
})
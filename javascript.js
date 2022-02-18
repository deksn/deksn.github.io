// I cannot for the life of me figure out how to make the code work and what am I doing wrong here..
const form = document.getElementById("form");
form.addEventListener("submit", function(e) {
e.preventDefault();
output.innerHTML = "" // Removing old search results

let template = "";

function showCars(post){
    const output = document.getElementById("output");
    const rentals = post.rentals;
    for ( const rental of rentals) {
        
        template = `
<section class="rentals">
    <img src="${rental.image}" alt="rental" class="car"> 
    <div class="card-text">
        ${rental.category} <br> ${rental.persons} <br> ${rental.suitcases}
    </div>
    <div class="booking">
        ${rental.price} <br> <button type="button"> Book Now </button>
    </div>
</section>`

        if (rental.persons >= document.getElementById("formpersons").value && rental.suitcases >= document.getElementById("formsuitcases").value) {
            output.insertAdjacentHTML ("beforeend", template);
        }
    }
}

fetch("deksn.github.io/data.json")
.then(function (data) { // wait for the server to respond (a promise)
    return data.json();
})
.then(function (post){ //If the server responds in a positive way
    showCars(post);
})
.catch(function (error) { //If the fetch goes wrong
    const output = getElementById("output");
    output.innerHTML = "Service is unavailable";
})

//const ValidDates = ValidTimes(start.value, end.value);

//const start = document.getElementById("start");
//const end = document.getElementById("end");


//function ValidTimes (startdate, enddate) {
//    const start = new Date(startdate);
//    const end = new Date(enddate);
//    if (end < start) {
//        return false;
//    }
//    else {
//        return true;
//    }
//}

//function RentalDays (startdate, enddate) {
//   const start = new Date(startdate);
//    const end = new Date(enddate);
//    const timedifference = end.getTime() - start.getTime();
//    const daydifference = timedifference / (1000 * 3600 *24) + 1;
//    return daydifference;
//}

//function RentalCost (days, priceperday) {
//    const totalprice = (495 +(priceperday * days)) *1.25;
//    return totalprice;
//}

    }
)

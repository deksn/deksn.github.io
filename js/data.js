/*const carlist = []
fetch("https://deksn.github.io/data.json")
fetch("data.json")
.then(function (data) { // wait for the server to respond (a promise)
    return data.json();
})
.then(function (post){ //If the server responds in a positive way
    carlist = post.rentals
})
.catch(function (error) { //If the fetch goes wrong
    const output = document.getElementById("output");
    output.innerHTML = "Service is unavailable";
}) */

 const carlist = [{
    model: "VW Golf",
    category: "Budget",
    persons: 4,
    suitcases: 1,
    image: "images/Budget.png",
    priceperday: 100
},
{
    model: "BMW 7 Series",
    category: "Standard",
    persons: 5,
    suitcases: 3,
    image: "images/Standard.png",
    priceperday: 160
},
{
    model: "Subaru Outback",
    category: "Minivan",
    persons: 7,
    suitcases: 4,
    image: "images/Minivan.png",
    priceperday: 205
}
]
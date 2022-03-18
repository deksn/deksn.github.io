const button = document.getElementById("booking");

button.addEventListener("click", function () {

    let template = "";

    const days = RentalDays(start.value, end.value)
    const price = RentalCost(days, rental.priceperday).toFixed(2);
    const start = document.getElementById("start");
    const end = document.getElementById("end");

    for (const rental of carlist) {
    const output1 = document.getElementById("output1");
    const url = window.location.search;
            const urldata = new URLSearchParams(url);

            template = `
            ${rental.model}
            <p> Pick-up date: ${urldata.get('start')}</p>
            <p> Return date: ${urldata.get('end')}</p>
            <p> Rental days: ${urldata.get('days')}</p>
            <p> Car rental cost: ${urldata.get('price')}</p>
            <p> incl. VAT </p>`

            output1.insertAdjacentHTML("beforeend", template);

        }

})
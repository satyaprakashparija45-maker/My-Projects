const form = document.getElementById("reservation-form");
const message = document.getElementById("booking-message");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;

    message.textContent =
        `Thank you, ${name}! Your table for ${guests} guest(s) is booked for ${date} at ${time}.`;

    form.reset();
});
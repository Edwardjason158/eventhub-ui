const buttons = document.querySelectorAll(".event-card button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        alert("You joined the event!");
    });
});

// Handle form submission
const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const event = document.getElementById("event").value;

    if (name && email && event) {
        alert(`Thank you ${name}! You have successfully registered for ${event}.`);
        registrationForm.reset();
    } else {
        alert("Please fill in all fields.");
    }
});
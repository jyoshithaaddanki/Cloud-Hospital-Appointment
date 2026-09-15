const form = document.getElementById("appointmentForm");
const appointmentList = document.getElementById("appointmentList");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const doctor = document.getElementById("doctor").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    const appointment = document.createElement("div");

    appointment.className = "appointment";

    appointment.innerHTML = `
        <h3>Appointment Booked</h3>
        <p><strong>Patient:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Doctor:</strong> ${doctor}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p class="status">Status: Confirmed</p>
    `;

    if (appointmentList.innerHTML.includes("No appointments")) {
        appointmentList.innerHTML = "";
    }

    appointmentList.appendChild(appointment);

    form.reset();

    alert("Appointment booked successfully!");
});
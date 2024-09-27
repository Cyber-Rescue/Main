document.getElementById('scamForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const scamDetails = document.getElementById('scamDetails').value;

    // Simple alert to simulate form submission
    alert(`Thank you, ${name}! Your report has been submitted. We will contact you at ${email} soon.`);

    // Reset the form
    document.getElementById('scamForm').reset();
});

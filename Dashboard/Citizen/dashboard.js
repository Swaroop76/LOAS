// JavaScript code for Citizen Dashboard

// Function to show the license application form based on the selected license type
function showLicenseDetails(licenseType) {
    // Get the license details container element
    var licenseDetailsContainer = document.getElementById('licenseDetails');

    // Clear any existing content
    licenseDetailsContainer.innerHTML = '';

    // Create a form for applying to the selected license
    var licenseForm = document.createElement('form');
    licenseForm.setAttribute('id', 'licenseForm');
    licenseForm.innerHTML = `
        <h2>Apply for ${licenseType} License</h2>
        <label for="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" required><br><br>
        <label for="address">Address:</label>
        <input type="text" id="address" name="address" required><br><br>
        <label for="contactNumber">Contact Number:</label>
        <input type="text" id="contactNumber" name="contactNumber" required><br><br>
        <button type="submit">Apply</button>
    `;

    // Append the form to the license details container
    licenseDetailsContainer.appendChild(licenseForm);

    // Prevent default form submission
    licenseForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // You can add code here to handle form submission, such as sending data to a server
        console.log('Form submitted for ' + licenseType + ' license.');
    });
}

// Function to handle logout button click
function logout() {
    // You can add code here to handle logout functionality
    console.log('Logged out');
}

// Function to show the form for checking case status
function showCaseStatusForm() {
    // Get the main content container element
    var mainContent = document.querySelector('main');

    // Clear any existing content
    mainContent.innerHTML = '';

    // Create a form for checking case status
    var caseStatusForm = document.createElement('form');
    caseStatusForm.setAttribute('id', 'caseStatusForm');
    caseStatusForm.innerHTML = `
        <h2>Check Case Status</h2>
        <label for="caseNumber">Case Number:</label>
        <input type="text" id="caseNumber" name="caseNumber" required><br><br>
        <button type="submit">Check Status</button>
    `;

    // Append the form to the main content container
    mainContent.appendChild(caseStatusForm);

    // Add event listener for form submission
    caseStatusForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get the case number entered by the user
        var caseNumber = document.getElementById('caseNumber').value;

        // Call a function to fetch and display case status details
        fetchCaseStatus(caseNumber);
    });
}

// Function to fetch and display case status details
function fetchCaseStatus(caseNumber) {
    // You can make an AJAX request to fetch case status details from the server
    // For demonstration, let's assume we have case status details in an object
    var caseStatusDetails = {
        caseNumber: caseNumber,
        status: 'Pending', // Example status, you can replace it with actual status fetched from the server
        description: 'Investigation in progress' // Example description, replace it with actual description
    };

    // Display case status details
    displayCaseStatus(caseStatusDetails);
}

// Function to display case status details
function displayCaseStatus(caseStatusDetails) {
    // Get the main content container element
    var mainContent = document.querySelector('main');

    // Create elements to display case status details
    var caseStatusDetailsContainer = document.createElement('div');
    caseStatusDetailsContainer.setAttribute('id', 'caseStatusDetails');
    caseStatusDetailsContainer.innerHTML = `
        <h2>Case Status Details</h2>
        <p><strong>Case Number:</strong> ${caseStatusDetails.caseNumber}</p>
        <p><strong>Status:</strong> ${caseStatusDetails.status}</p>
        <p><strong>Description:</strong> ${caseStatusDetails.description}</p>
    `;

    // Append the case status details container to the main content container
    mainContent.appendChild(caseStatusDetailsContainer);
}
// Function to handle profile settings form submission
function saveProfileSettings(event) {
    event.preventDefault();

    // Get new name from the form input
    var newName = document.getElementById('newName').value;

    // You can add similar code to get other details from the form

    // Update user details in the database
    updateUserDetails(newName); // Call a function to update user details

    // Optionally, display a success message or perform other actions
}

// Function to update user details in the database
function updateUserDetails(newName) {
    // You can make an AJAX request to update user details in the database
    // For demonstration, let's log the new name to the console
    console.log('New Name:', newName);
}

// Add event listener for form submission
document.getElementById('profileSettingsForm').addEventListener('submit', saveProfileSettings);

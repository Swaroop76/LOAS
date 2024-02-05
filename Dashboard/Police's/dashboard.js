// Function to fetch and display licenses that need approval
function showPendingLicenses() {
    // Make an AJAX request to fetch the pending licenses data from the server
    // For demonstration, let's assume pending licenses are fetched from a server-side endpoint

    // Assuming the data is retrieved as an array of objects where each object represents a license
    var pendingLicenses = [
        { id: 1, type: 'Arms License', applicant: 'John Doe', status: 'Pending' },
        { id: 2, type: 'Loudspeaker License', applicant: 'Jane Smith', status: 'Pending' },
        // Add more license objects as needed
    ];

    // Call a function to display the pending licenses table
    displayPendingLicenses(pendingLicenses);
}

// Function to display the pending licenses table
function displayPendingLicenses(pendingLicenses) {
    var licenseDetailsContainer = document.getElementById('licenseDetails');

    // Clear any existing content
    licenseDetailsContainer.innerHTML = '';

    // Create a table element
    var table = document.createElement('table');
    table.classList.add('license-table');

    // Create table headers
    var headers = ['ID', 'License Type', 'Applicant', 'Status', 'Action'];
    var headerRow = document.createElement('tr');
    headers.forEach(function(headerText) {
        var headerCell = document.createElement('th');
        headerCell.textContent = headerText;
        headerRow.appendChild(headerCell);
    });
    table.appendChild(headerRow);

    // Create table rows for each pending license
    pendingLicenses.forEach(function(license) {
        var row = document.createElement('tr');
        var idCell = document.createElement('td');
        idCell.textContent = license.id;
        var typeCell = document.createElement('td');
        typeCell.textContent = license.type;
        var applicantCell = document.createElement('td');
        applicantCell.textContent = license.applicant;
        var statusCell = document.createElement('td');
        statusCell.textContent = license.status;
        var actionCell = document.createElement('td');
        var approveButton = document.createElement('button');
        approveButton.textContent = 'Approve';
        approveButton.addEventListener('click', function() {
            // Handle approval logic here
            console.log('License approved:', license.id);
            // You can make AJAX request to server to update license status to 'Approved'
            // After approval, you may want to refresh the table or remove the approved license row
            row.remove(); // Remove the approved license row from the table
        });
        actionCell.appendChild(approveButton);

        row.appendChild(idCell);
        row.appendChild(typeCell);
        row.appendChild(applicantCell);
        row.appendChild(statusCell);
        row.appendChild(actionCell);

        table.appendChild(row);
    });

    licenseDetailsContainer.appendChild(table);
}

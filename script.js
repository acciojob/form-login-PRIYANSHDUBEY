// script.js
function getFormValues() {
    // Get form elements by their IDs
    var firstNameInput = document.getElementById("firstName");
    var lastNameInput = document.getElementById("lastName");

    // Retrieve the values from the input fields
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;

    // Check if both first and last name are provided
    if (firstName && lastName) {
        alert("First Name: " + firstName + "\nLast Name: " + lastName);
    } else {
        alert("Please provide both first and last names.");
    }

    // Prevent the form from submitting and refreshing the page
    return false;
}

// Add a form submission event listener
var form = document.getElementById("myForm");
form.addEventListener("submit", getFormValues);

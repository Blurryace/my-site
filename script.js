// A: Create a "Change Theme" Button (Dark Mode/Light Mode)
const themeBtn = document.getElementById('themeBtn');
const body = document.body;

themeBtn.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeBtn.textContent = "Switch to Light Mode";
    } else {
        themeBtn.textContent = "Toggle Dark Mode";
    }
});

// B: Add "Edit Job Title" Feature
const editJobBtn = document.getElementById('editJobBtn');
const jobTitleText = document.getElementById('jobTitleText');

editJobBtn.addEventListener('click', function() {
    // when clicked → ask user for new text using prompt()
    // update the job title element using textContent
    let newJob = prompt("Enter your new Job Title:", jobTitleText.textContent);
    if (newJob !== null && newJob.trim() !== "") {
        jobTitleText.textContent = newJob;
    }
});

// C: Add "Show/Hide Skills" Feature
const toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
const skillsList = document.getElementById('skillsList');

// if visible → hide it
// if hidden → show it
// also change button text accordingly
toggleSkillsBtn.addEventListener('click', function() {
    if (skillsList.style.display === "none") {
        skillsList.style.display = "block";
        toggleSkillsBtn.textContent = "Hide Skills";
    } else {
        skillsList.style.display = "none";
        toggleSkillsBtn.textContent = "Show Skills";
    }
});

// D: Add "Live Character Counter"
const msgBox = document.getElementById('msgBox');
const counterSpan = document.getElementById('counter');
const maxLength = 200; // on keyup → calculate remaining characters

msgBox.addEventListener('keyup', function() {
    const currentLength = msgBox.value.length;
    const charsLeft = maxLength - currentLength;
    
    counterSpan.textContent = charsLeft; // update the span text
    
    if (charsLeft < 20) {
        counterSpan.style.color = "red";
    } else {
        counterSpan.style.color = "gray";
    }
});

// E: Form Validation Before Sending
function validateForm() {
    const name = document.getElementById('nameField').value;
    const email = document.getElementById('emailField').value;
    
    if (name === "" || email === "") { // check if fields are empty
        alert("Please fill out both Name and Email fields.");
        return false; // if empty → show alert + return false
    }
    
    alert("Message successfully sent! (Simulation)");
    return true; // else → allow submission
}

// F: Automatically Display Today's Date in Footer
window.onload = function() {
    const dateDisplay = document.getElementById('dateDisplay'); // select dateDisplay
    const today = new Date(); // set its textContent to new Date()
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.textContent = "Date: " + today.toLocaleDateString('en-US', options);

    greetUser(); // Extra Feature for G
};

// G: Extra Feature - Greeting Based on Time
function greetUser() {
    const greetingMsg = document.getElementById('greetingMsg');
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good Morning!";
    } else if (hour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    greetingMsg.textContent = greeting + " Welcome to Samuel's profile.";
}
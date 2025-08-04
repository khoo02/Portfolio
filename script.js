// Get references to all tab links and tab contents
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

/**
 * Opens the specified tab and closes all others.
 * This function is called during tab links' onclick events.
 * @param {string} tabname - The name of the tab to open.
 */
function opentab(tabname) {
  // Loop through all tab links and tab contents, and wipe out the active classes
  for(tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  // Update the active class to the clicked tab link and show the corresponding tab content
  event.currentTarget.classList.add("active-link"); 
  document.getElementById(tabname).classList.add("active-tab"); 
}

let sideMenu = document.getElementById("side-menu");

function openmenu() {
  sideMenu.style.right = "0";
}

function closemenu() {
  sideMenu.style.right = "-200px";
}

// Contact form submission handler
const scriptURL = 'https://script.google.com/macros/s/AKfycbypP3gok-YONmbErE1IPFuSDYWFMAvaBkASRifyW0F3JA9FcaqYgqn7oO4hG9VxnLY/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message sent successfully!";
      setTimeout(function() {
        msg.innerHTML = "";
      }, 3000) // Clear message after 3 seconds
      form.reset() // Reset the form after successful submission
    }) 
    .catch(error => console.error('Error!', error.message))
})
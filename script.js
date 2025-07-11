// Get references to all tab links and tab contents
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

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
function forceFontToggle() {
    console.log("Function called directly from the button!");
    
    // Toggle the class on the body
    const body = document.body;
    body.classList.toggle('readable-font');
    
    // Check if it worked
    const isReadable = body.classList.contains('readable-font');
    console.log("Is readable-font active?", isReadable);

    // Update the button text
    const btn = document.getElementById('font-toggle');
    if (btn) {
      btn.textContent = isReadable ? "Switch to Rainy Hearts" : "Switch to Tahoma";
    }
  }

  // Optional: Check if the button even exists when the page loads
  console.log("Script loaded. Button found on load?", !!document.getElementById('font-toggle'));
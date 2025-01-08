// document.addEventListener("DOMContentLoaded", () => {
//     setTimeout(() => {
//       const welcomeScreen = document.getElementById("welcome-screen");
  
//       // Add a fade-out effect by changing opacity over time
//       welcomeScreen.style.transition = "opacity 1s ease"; // Smooth transition for opacity
//       welcomeScreen.style.opacity = "0"; // Start fading out
  
//       // Remove the welcome screen after the fade-out is complete
//       setTimeout(() => {
//         welcomeScreen.style.display = "none";
//       }, 1000); // Match the duration of the transition
//     }, 3000); // Wait 3 seconds before starting the fade-out
//   });
  
document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.getElementById("main-content");
    const welcomeScreen = document.getElementById("welcome-screen");
  
    // Initially hide the main content
    mainContent.style.opacity = "0"; // Ensure main content starts as invisible
    mainContent.style.display = "none";
  
    // Step 1: Let the welcome animation play
    setTimeout(() => {
      // Step 2: Start the fade-out of the welcome screen and fade-in of the main content simultaneously
      welcomeScreen.style.transition = "opacity 1s ease";
      mainContent.style.transition = "opacity 1s ease";
  
      welcomeScreen.style.opacity = "0"; // Fade out welcome screen
      mainContent.style.display = "block"; // Show main content
      setTimeout(() => {
        mainContent.style.opacity = "1"; // Fade in main content
      }, 10); // Small delay to trigger the transition
  
      // Step 3: Remove the welcome screen after the transition completes
      setTimeout(() => {
        welcomeScreen.style.display = "none"; // Remove welcome screen after fade-out
      }, 1000); // Match the transition duration
    }, 3000); // Duration of the welcome animation before fading out
  });
  
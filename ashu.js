let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function changeSlide(n) {
  showSlides(slideIndex += n);
}
// Function to display the login popup
function showPopup() {
  document.getElementById("loginPopup").style.display = "block";
}

// Function to close the login popup
function closePopup() {
  document.getElementById("loginPopup").style.display = "none";
}

// Close the popup if the user clicks outside of it
window.onclick = function(event) {
  if (event.target == document.getElementById("loginPopup")) {
      closePopup();
  }
}

document.getElementById("loginLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default action of the link
    alert("Please login to access this feature!"); // Show alert
    document.getElementById("loginLink").classList.add("shake"); // Add shaking effect
    setTimeout(function() {
        document.getElementById("loginLink").classList.remove("shake"); // Remove shaking effect after some time
    }, 1000); // Adjust the time as needed
});


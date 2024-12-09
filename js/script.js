$(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
$('#projectsCarousel').on('slide.bs.carousel', function (event) {
    console.log(`Carousel is sliding to: ${event.relatedTarget}`);
  });
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    const emailInput = document.getElementById("email");
    if (!emailInput.value.includes("@")) {
      alert("Please enter a valid email address.");
      e.preventDefault(); 
    }
  });
function openAllSections() {
    $('.collapse').collapse('show');
  }
  function closeAllSections() {
    $('.collapse').collapse('hide');
  }

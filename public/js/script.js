function toggleMenu() {
  const menuIcon = document.getElementById("menuBtn");
  const menu = document.getElementById("sideMenu");
  menuIcon.classList.toggle("change");
  menu.classList.toggle("open");

  const body = document.body;
  body.classList.toggle("no-scroll");
}

function navigateToSection(event) {
  event.preventDefault();  // Prevent the default anchor behavior

  const targetId = event.target.getAttribute("href");  // Get the href value
  const targetSection = document.querySelector(targetId);  // Find the target section by ID

  if (targetSection) {
    const offset = 200;
    const elementPosition = targetSection.getBoundingClientRect().top + window.scrollY;
    const targetPosition = elementPosition - offset;
    // Scroll to the target section smoothly
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
    // Scroll to the target section smoothly
    targetSection.scrollIntoView({behavior: "smooth"});

    // Close the menu after clicking
    toggleMenu();
  }
}

$(document).ready(function () {
  if ($(window).width() <= 768) {
    var $button = $('#stick-btn'); // Replace with your button's ID

    $(window).scroll(function (event) {
      var st = $(this).scrollTop();
      if (st > 0) {
        // Downscroll or not at the top
        $button.fadeIn().css('display', 'flex');
      } else {
        // At the top of the page
        $button.fadeOut().css('display', 'flex');
      }
    });
  }
});

// navbar.js
(function initNavbar() {
  const toggle = document.getElementById("mobileToggle");
  const mobileNav = document.getElementById("mobileNav");

  if (!toggle || !mobileNav) {
    // Navbar not loaded yet → retry
    setTimeout(initNavbar, 50);
    return;
  }

  toggle.addEventListener("click", () => {
    mobileNav.classList.toggle("show");
  });
})();

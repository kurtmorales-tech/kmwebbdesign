// Simple interactions
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  
  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.add('scrolled');
      // kept scrolled temporarily or remove if prefer completely transparent at top
      if(window.scrollY < 10) navbar.classList.remove('scrolled');
    }
  });

  // Mobile Menu (Simple toggle for demo)
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  mobileBtn.addEventListener('click', () => {
    alert('Mobile menu clicked! In a full version, this opens a side drawer.');
  });
});

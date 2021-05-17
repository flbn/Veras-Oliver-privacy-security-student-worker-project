(function() {
	"use strict";
	// Add Scripts Here

	/* Adding interactivity to the menu button (mobile only) */
	const menuButton = document.querySelector('.menu-button');
	const navLinks = document.querySelector('.mobile-nav-links');
	menuButton.addEventListener("click", () => {
		menuButton.classList.toggle('arrow-button-active');
		navLinks.classList.toggle('mobile-nav-links');
		navLinks.classList.toggle('mobile-nav-links-active');
	});



})();

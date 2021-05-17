(function() {
	"use strict";
	// Add Scripts Here

	/* Adding interactivity to the show details button */
	const showDetailsText = document.querySelector('#show-details-text');
	const hideDetailsText = document.querySelector('#hide-details-text');
	const showDetailsButton = document.querySelector('.show-details-button');
	const detailsContainer = document.querySelector('.account-details-container');
	const accountsContainer = document.querySelector('.accounts-container');
	showDetailsButton.addEventListener("click", () => {
		showDetailsText.classList.toggle('show-details-active');
		hideDetailsText.classList.toggle('show-details-active');
		showDetailsButton.classList.toggle('arrow-button-active');
		accountsContainer.classList.toggle('accounts-container-active');
		detailsContainer.classList.toggle('account-details-container-active');
	});

	/* Adding interactivity to the menu button (mobile only) */
	const menuButton = document.querySelector('.menu-button');
	const navLinks = document.querySelector('.mobile-nav-links');
	menuButton.addEventListener("click", () => {
		menuButton.classList.toggle('arrow-button-active');
		navLinks.classList.toggle('mobile-nav-links');
		navLinks.classList.toggle('mobile-nav-links-active');
	});



})();

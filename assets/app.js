(function() {
	"use strict";
	// Add Scripts Here

	const showDetailsButton = document.querySelector('.show-details-button');
	const detailsContainer = document.querySelector('.account-details-container');
	const accountsContainer = document.querySelector('.accounts-container');
	showDetailsButton.addEventListener("click", () => {
		showDetailsButton.classList.toggle('arrow-button-active');
		accountsContainer.classList.toggle('accounts-container-active');
		detailsContainer.classList.toggle('account-details-container-active');
	});


	const menuButton = document.querySelector('.menu-button');
	const navLinks = document.querySelector('.mobile-nav-links');
	menuButton.addEventListener("click", () => {
		console.log("test");
		menuButton.classList.toggle('arrow-button-active');
		navLinks.classList.toggle('mobile-nav-links');
		navLinks.classList.toggle('mobile-nav-links-active');
	});



})();

(function() {
	"use strict";
	// Add Scripts Here

	const showDetailsButton = document.querySelector('.show-details-button');
	const detailsContainer = document.querySelector('.account-details-container');
	const accountsContainer = document.querySelector('.accounts-container');
	showDetailsButton.addEventListener("click", () => {
		console.log("test");
		showDetailsButton.classList.toggle('arrow-button-active');
		accountsContainer.classList.toggle('accounts-container-active');
		detailsContainer.classList.toggle('account-details-container-active');
	});

	

})();

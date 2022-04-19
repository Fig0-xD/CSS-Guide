let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let selectPlanButtons = document.querySelectorAll(".plan button");
let negativeModalButton = document.querySelector(".modal__action--negative");
let toggleButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");

for (const selectPlanButton of selectPlanButtons) {
	selectPlanButton.addEventListener("click", () => {
		// modal.style.display = "block";
		// backdrop.style.display = "block";
		modal.classList.add("open");
		backdrop.classList.add("open");
	});
}

backdrop.addEventListener("click", () => {
	// mobileNav.style.display = "none";
	mobileNav.classList.remove("open");
	closeModal();
});

if (negativeModalButton) negativeModalButton.addEventListener("click", closeModal);

function closeModal() {
	// modal.style.display = "none";
	// backdrop.style.display = "none";
	if (modal) modal.classList.remove("open");
	backdrop.classList.remove("open");
}

toggleButton.addEventListener("click", () => {
	// mobileNav.style.display = "block";
	// backdrop.style.display = "block";
	mobileNav.classList.add("open");
	backdrop.classList.add("open");
});

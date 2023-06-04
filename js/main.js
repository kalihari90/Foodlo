//  --- KARZUELA BOOTSTRAPOWA - AUTOPLAY OD POCZĄTKU I PO KLIKNIĘCIU ---

document.addEventListener("DOMContentLoaded", function () {
	var carousel = new bootstrap.Carousel(document.getElementById("myCarousel"), {
		interval: 3000,
	});

	// Po załadowaniu dokumentu, wywołaj metodę cycle() dla karuzeli
	carousel.cycle();
});

// Po kliknięciu na przycisk nawigacji, wywołaj metodę cycle() dla karuzeli
var carouselNavButtons = document.querySelectorAll("#myCarousel .carousel-control");
carouselNavButtons.forEach(function (button) {
	button.addEventListener("click", function () {
		carousel.cycle();
	});
});

// --- ANIMACJE WŁĄCZAJĄ SIĘ ZA KAŻDYM RAZEM PO SCROLLU NA SEKCJĘ ---

// DOM Content Loaded jest niezbędny by załadować ten kod z zewnętrznego pliku .js
document.addEventListener("DOMContentLoaded", function () {
	const sections = document.querySelectorAll(".animate-section");

	const observer = new IntersectionObserver(
		function (entries, observer) {
			entries.forEach(entry => {
				const animatedElements = entry.target.querySelectorAll("[data-animation]");
				animatedElements.forEach(element => {
					const hasAnimationPlayed = element.dataset.animationPlayed === "true";
					const animation = element.dataset.animation;
					if (entry.isIntersecting && !hasAnimationPlayed) {
						element.classList.add("animate__animated", animation);
						element.dataset.animationPlayed = "true";
					} else if (!entry.isIntersecting && hasAnimationPlayed) {
						element.classList.remove("animate__animated", animation);
						element.dataset.animationPlayed = "false";
					}
				});
			});
		},
		{ threshold: 0.5 }
	);

	sections.forEach(section => {
		observer.observe(section);
	});
});

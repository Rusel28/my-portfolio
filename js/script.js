
// nav section
const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
});

const activePage = () => {
	navLinks.forEach(link => { 
		link.classList.remove('active');
	});

	sections.forEach(section => {
		section.classList.remove('active');
	});
}

navLinks.forEach((link, idx) => {
	link.addEventListener('click', () => {
		if (!link.classList.contains('active')) {
			activePage();

			link.classList.add('active');

			setTimeout(() => {
				sections[idx].classList.add('active');
			}, 0);
		}
	});
});

logoLink.addEventListener('click', () => { 
	if (!navLinks[0].classList.contains('active')) {
		activePage();

		navLinks[0].classList.add('active');

		setTimeout(() => {
			sections[0].classList.add('active');
		}, 0);
	}
});



	// Resume Section
const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		const resumeDetails = document.querySelectorAll('.resume-detail');


		resumeBtns.forEach(btn => {
			btn.classList.remove('active');
		});
		btn.classList.add('active');

		resumeDetails.forEach(detail => {
			detail.classList.remove('active');
		});
		resumeDetails[idx].classList.add('active');
	});
});



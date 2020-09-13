let overheader = document.querySelector('.overheader');
let header = document.querySelector('.header');

document.addEventListener('scroll', () => {
	if (window.pageYOffset >= overheader.getBoundingClientRect().height) {
		header.style.position = 'fixed';
	} else {
		header.style.position = 'relative';
	}
})
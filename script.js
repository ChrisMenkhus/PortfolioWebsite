let nav = document.querySelector('.nav');

let sticky = nav.offsetTop;

stickyNav = () => {
	window.pageYOffset > sticky ? 
	nav.classList.add(`sticky`) : 
	nav.classList.remove(`sticky`);
}

window.onscroll = function() { stickyNav() };
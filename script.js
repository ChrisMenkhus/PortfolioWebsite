let nav = document.querySelector('.navbar');

let sticky = nav.offsetTop + 0;

stickyNav = () => {
	window.pageYOffset > sticky ? 
	nav.classList.add(`sticky`) : 
	nav.classList.remove(`sticky`);
}

 //window.onscroll = function() { stickyNav() };
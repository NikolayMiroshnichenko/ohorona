const openMenuBtn = document.querySelector('.js-open-menu');
const openMenuBtnButton = document.querySelector('.js-open-menu-button');
const menu = document.querySelector('.js-menu');



openMenuBtnButton.addEventListener('click', openMenu);
openMenuBtn.addEventListener('click', openMenu);
menu.addEventListener('click', closeMenu);



function openMenu(e) {
	menu.style.display = 'block';

	console.log(e.target)
}

function closeMenu(e) {

	if(e.target.nodeName != 'A' && e.target.nodeName != 'BUTTON') {
		return;
	}


	menu.style.display = 'none';
}

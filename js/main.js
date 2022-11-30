const [red, green, blue] = [69, 111, 225]
const section1 = document.querySelector('.navbar-sticky')

window.addEventListener('scroll', () => {
	let y = 1 + (window.scrollY || window.pageYOffset) / 150
	y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
	if (window.scrollY > 30) {
		section1.style.backgroundColor = `white`
		section1.style.border = `1px solid rgba(0,0,0,.125)`
		section1.style.boxShadow = `0 .125rem .25rem rgba(0,0,0,.075)!important;`
	} else {
		section1.style.backgroundColor = `transparent`
		section1.style.border = `none`
		section1.style.boxShadow = `none`
	}
});

document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('actual-year').textContent = new Date().getFullYear().toString();
});

function showOrderInfo() {
	document.getElementById('order-info').style.display = 'block';
}
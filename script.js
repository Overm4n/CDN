window.onload=function () {
	if (document.documentElement.clientWidth>425) {
	function scroll(argument) {
		var scrolled = window.pageYOffset || document.documentElement.scrollTop;

		if (scrolled>0) {
			if (!document.getElementById('header').classList.contains('header-scroll')) {
				document.getElementById('header').classList.add('header-scroll');
				document.getElementById('navigation').classList.add('navigation-scroll');
				document.getElementById('logo').classList.add('logo-scroll');

			}
		}else{
			document.getElementById('header').classList.remove('header-scroll');
			document.getElementById('navigation').classList.remove('navigation-scroll');
			document.getElementById('logo').classList.remove('logo-scroll');
		}
	}
	scroll();
	window.onscroll = function() {
		scroll();
	}
	}
	document.getElementById('burger').onclick=function click_burger(event) {
		if (!document.getElementById('mav').classList.contains('nav_visible')) {
			document.getElementById('mav').classList.add('nav_visible');
		}else{
			document.getElementById('mav').classList.remove('nav_visible');
		}

	}
}
function read_more(target) {
	if (!target.querySelectorAll('.question-description')[0].classList.contains('question-description-read')) {
		target.querySelectorAll('.question-description')[0].classList.add('question-description-read');
	}else{
		target.querySelectorAll('.question-description')[0].classList.remove('question-description-read');
	}

}
function read_more(target) {
	if (!target.nextElementSibling.classList.contains('question-description-read')) {
		target.nextElementSibling.classList.add('question-description-read');
		target.querySelectorAll('svg')[0].classList.add('svg-rotate');
	}else{
		target.nextElementSibling.classList.remove('question-description-read');
		target.querySelectorAll('svg')[0].classList.remove('svg-rotate');
	}
}
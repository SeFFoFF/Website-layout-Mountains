function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

// Burger menu
let burger_menu = document.querySelector('.burger-menu');
let nav_body = document.querySelector('.nav__body');
let back = document.querySelector('body');
let nav_list = document.querySelector('.nav__list');
let nav_link = document.querySelector('.nav__link');
let button = document.querySelector('.button__block');

let link1 = document.querySelector('.link1');
let link2 = document.querySelector('.link2');
let link3 = document.querySelector('.link3');
let link4 = document.querySelector('.link4');
let link5 = document.querySelector('.link5');
let link6 = document.querySelector('.link6');

burger_menu.onclick = function() {
    burger_menu.classList.toggle('active');
    nav_body.classList.toggle('active');
    button.classList.toggle('active');
    back.classList.toggle('lock');
}

link1.onclick = function () {
    back.classList.toggle('lock');
    button.classList.toggle('active');
    burger_menu.classList.toggle('active');
    nav_body.classList.toggle('active');
}

link2.onclick = function () {
    back.classList.toggle('lock');
    button.classList.toggle('active');
    burger_menu.classList.toggle('active');
    nav_body.classList.toggle('active');
}

link3.onclick = function () {
    back.classList.toggle('lock');
    button.classList.toggle('active');
    burger_menu.classList.toggle('active');
    nav_body.classList.toggle('active');
}

link4.onclick = function () {
    back.classList.toggle('lock');
    button.classList.toggle('active');
    burger_menu.classList.toggle('active');
    nav_body.classList.toggle('active');
}

link5.onclick = function () {
    back.classList.toggle('lock');
    button.classList.toggle('active');
    burger_menu.classList.toggle('active');
    nav_body.classList.toggle('active');
}

link6.onclick = function () {
    back.classList.toggle('lock');
    button.classList.toggle('active');
    burger_menu.classList.toggle('active');
    nav_body.classList.toggle('active');
}

//Slow anchor
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

//Slow scroll
SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime    : 800,
    // Размер шага в пикселях 
    stepSize         : 75,

    // Дополнительные настройки:
    
    // Ускорение 
    accelerationDelta : 30,  
    // Максимальное ускорение
    accelerationMax   : 2,   

    // Поддержка клавиатуры
    keyboardSupport   : true,  
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll       : 50,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm   : true,
    pulseScale       : 4,
    pulseNormalize   : 1,

    // Поддержка тачпада
    touchpadSupport   : true,
});

//Popup
$(document).ready(function($) {
	$('.button__link').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});
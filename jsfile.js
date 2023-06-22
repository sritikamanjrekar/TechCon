const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}



var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

var manualNav = function (manual) {
	slides.forEach((slide) => {
		slide.classList.remove('active');

		btns.forEach((btn) => {
			btn.classList.remove('active');
		});


	});

	slides[manual].classList.add('active');
	btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
	btn.addEventListener("click", () => {
		manualNav(i);
		currentSlide = i;
	});
});

var repeat = function(activeClass){
	let active =document.getElementsByClassName('active');
	let i=1;

	var repeater = ()=>{
		setTimeout(function(){

			[...active].forEach((activeSlide)=>{
				activeSlide.classList.remove('active');
			});

			slides[i].classList.add('active');
			btns[i].classList.add('active');

			i++;

			if(slides.length==i){
				i=0;
			}

			if(i>=slides.length){
				return;
			}
			repeater();
		},3000);
	}
	repeater();
}

repeat();




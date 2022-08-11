let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let frame = document.getElementById('frame');
let burger = document.getElementById('burger');

menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');

	if (burger.style.display === "none") {
		closeModal();
	}
	else {
		openModal();
	}
	
})

function closeModal() {
	burger.style.display = "block";
	frame.style.display = "none";
}

function openModal() {
	burger.style.display = "none";
	frame.style.display = "block";
}

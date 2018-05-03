function showMenu() {
	let menuToggle = document.querySelector('.menu');
	let menu = document.querySelectorAll('.tabs');



	if (menuToggle.classList.contains('selected')) {
		Array.from(menu)
			.forEach(function (val) {
				val.style.display = 'block';
			});

		menuToggle.classList.remove('selected');

	} else {
		Array.from(menu)
			.forEach(function (val) {
				val.style.display = 'none';
			});

		menuToggle.classList.add('selected');
	}

	window.addEventListener('click', function (e) {
		if (!document.querySelector('.tab-box').contains(e.target)) {
			Array.from(menu)
				.forEach(function (val) {
					val.style.display = 'none';
				});

			menuToggle.classList.add('selected');
		}
	});

}
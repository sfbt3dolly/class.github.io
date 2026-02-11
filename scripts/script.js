document.addEventListener('DOMContentLoaded', () => {
	const element = document.getElementById('message');
	const input = document.getElementById('nameInput');
	const button = document.getElementById('nameBtn');
	if (!element || !input || !button) return;

	function updateName() {
		const val = input.value && input.value.trim() ? input.value.trim() : null;
		if (val) {
			element.textContent = `Yay, ${val} is a highland cow!`;
		} else {
			element.textContent = "Yay, you're a Highland Cow!";
		}
	}

	button.addEventListener('click', updateName);
	input.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') updateName();
	});

	input.focus();
});
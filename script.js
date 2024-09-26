document.querySelectorAll('.code').forEach((input, index) => {
    input.addEventListener('input', (e) => {
        if (input.value.length >= 1) {
            // Move to the next input if current is filled
            if (index < 5) {
                document.querySelector(`#code-${index + 2}`).focus();
            }
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            if (input.value.length === 0 && index > 0) {
                // Move focus to the previous input if current is empty
                document.querySelector(`#code-${index}`).focus();
            }
        }
    });
});

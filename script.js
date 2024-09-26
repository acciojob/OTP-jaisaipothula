document.querySelectorAll('.code').forEach((input, index) => {
    input.addEventListener('input', (e) => {
        // Only allow numbers
        if (/\D/.test(e.data)) {
            input.value = '';
            return;
        }
        
        if (input.value.length >= 1 && index < 5) {
            // Focus on the next input
            document.getElementById(`code-${index + 2}`).focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            // If current input is empty, move focus to the previous input
            if (input.value.length === 0 && index > 0) {
                document.getElementById(`code-${index}`).focus();
            }
        }
    });
});

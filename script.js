//your JS code here. If required.
const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    const val = e.target.value;
    if (val.length === 1) {
      // Move focus to the next input if available
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    } else if (val.length === 0) {
      // Move focus to the previous input on backspace press
      if (index > 0) {
        inputs[index - 1].focus();
      }
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && e.target.value.length === 0) {
      // Move focus to the previous input on backspace press
      if (index > 0) {
        inputs[index - 1].focus();
      }
    }
  });
});

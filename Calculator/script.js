const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let resetNext = false;
let random;
let value;
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        value = btn.getAttribute('data-value');
        console.log(`Button clicked: ${value}`);
        if (btn.id === 'clear') {
            currentInput = '';
            display.value = '';
        } else if (btn.id === 'equals') {
            try {
                // Evaluate the expression safely
                const result = eval(currentInput);
                console.log(`Evaluating: ${currentInput} = ${result}`);
                display.value = result;
                currentInput = result.toString();
                resetNext = true;
            } catch {
                display.value = 'Error';
                currentInput = '';
                resetNext = true;
            }
        } else {
            if (resetNext) {
                currentInput = '';
                resetNext = false;
            }
            currentInput += value;
            display.value = currentInput;
        }
    });
});
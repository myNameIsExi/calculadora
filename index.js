let displayValue = '';

function appendCharacter(char) {
    displayValue += char;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function calculateResult() {
    try {
        const result = eval(displayValue);
        document.getElementById('display').value = result;
        displayValue = ''; // Reset displayValue after calculation
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = ''; // Reset displayValue on error
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    const display = document.createElement('div');
    
    display.style.width = '160px';
    display.style.height = '40px';
    display.style.backgroundColor = 'black';
    display.style.color = 'white';
    display.style.fontSize = '20px';
    display.style.textAlign = 'right';
    display.style.paddingRight = '10px';
    display.style.marginBottom = '10px';

    document.body.insertBefore(display, document.querySelector('table'));

    let currentInput = ''; 
    let operator = ''; 
    let previousInput = ''; 

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.innerText; 

            if (value === 'AC') { 
                currentInput = ''; 
                previousInput = ''; 
                operator = ''; 
                display.innerText = '0'; 
            } else if (['÷', 'x', '-', '+'].includes(value)) { 
                operator = value; 
                previousInput = currentInput; 
                currentInput = ''; 
            } else if (value === '=') { 
                let result; 

                const num1 = parseFloat(previousInput);
                const num2 = parseFloat(currentInput);

                if (operator === '÷') result = num1 / num2;
                if (operator === 'x') result = num1 * num2;
                if (operator === '-') result = num1 - num2;
                if (operator === '+') result = num1 + num2;

                display.innerText = result; 
                currentInput = result.toString(); 
                operator = ''; 
            } else { 
                currentInput += value; 
                display.innerText = currentInput; 
            }
        });
    });
});

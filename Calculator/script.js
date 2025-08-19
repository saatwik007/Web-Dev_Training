
        
        document.getElementById('add').addEventListener('click', function() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            document.getElementById('result').innerText = `Result: ${num1 + num2}`;
        });

        document.getElementById('subtract').addEventListener('click', function() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            document.getElementById('result').innerText = `Result: ${num1 - num2}`;
        });

        document.getElementById('multiply').addEventListener('click', function() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            document.getElementById('result').innerText = `Result: ${num1 * num2}`;
        });

        document.getElementById('divide').addEventListener('click', function() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            if (num2 !== 0) {
                document.getElementById('result').innerText = `Result: ${num1 / num2}`;
            } else {
                document.getElementById('result').innerText = 'Error: Division by zero';
            }
        });
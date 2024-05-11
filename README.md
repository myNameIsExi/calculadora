

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora</title>
    <link rel="stylesheet" href="index.css">
    
</head>
<body>
    <div class="calculator">
        <div class="calculator-header">
            <h1>Calculadora</h1>
        </div>
        <div class="display">
            <input type="text" id="display" disabled>
        </div>
        <div class="keys">
            <button class="operator" onclick="appendCharacter('/');">÷</button>
            <button class="operator" onclick="appendCharacter('*');">x</button>
            <button class="operator" onclick="appendCharacter('-');">-</button>
            <button class="operator" onclick="appendCharacter('+');">+</button>
            <button onclick="appendCharacter('7');">7</button>
            <button onclick="appendCharacter('8');">8</button>
            <button onclick="appendCharacter('9');">9</button>
            <button onclick="appendCharacter('4');">4</button>
            <button onclick="appendCharacter('5');">5</button>
            <button onclick="appendCharacter('6');">6</button>
            <button onclick="appendCharacter('1');">1</button>
            <button onclick="appendCharacter('2');">2</button>
            <button onclick="appendCharacter('3');">3</button>
            <button onclick="appendCharacter('0');">0</button>
            <button onclick="clearDisplay();">C</button>
            <button onclick="calculateResult();">=</button>
        </div>
    </div>
    <script src="java.js"></script>
</body>
</html>

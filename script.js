window.addEventListener('load', function OnWindowLoaded() {

    var signs = [
        '(', ')', '.', '/',
        '7', '8', '9', '*',
        '4', '5', '6', '-',
        '1', '2', '3', '+',
         '0', 'C', '='
    ];


    var calc = document.getElementById('calc');

    var textArea = document.getElementById('inputVal');

    signs.forEach(function (sign) {
        var signElement = document.createElement('div');
        signElement.className = 'btn';
        signElement.innerHTML = sign;
        calc.appendChild(signElement);
        signElement.addEventListener('click', onButtonClick);
    });

    function onButtonClick(e) {

        var output = textArea.textContent;
        if (e.target.textContent === 'C') {
            textArea.textContent = '0';
        } else if (e.target.textContent === '=') {
            textArea.textContent = eval(textArea.textContent);
        } else if (textArea.textContent === '0') {
            textArea.textContent = e.target.textContent;
        } else {
            textArea.textContent += e.target.textContent;
        }
    }
});

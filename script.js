window.addEventListener('load', function OnWindowLoaded() {

    //Калькулятор

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
        signElement.textContent = sign;
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


    //Список задач

    var todo = document.getElementById('todo');
    var todoArea = document.getElementById('inputTodo');
    var addTask = document.createElement('div');
    addTask.className = 'btn_addMore';
    addTask.textContent = 'Добавить задачу';
    todo.appendChild(addTask);
    addTask.addEventListener('click', addTaskFunk);

    var count = 0;
    function addTaskFunk(e) {
      if (todoArea.value != ''){
        count++;

        var taskBlock = document.createElement('div');
        taskBlock.id = 'taskBlock' + count;
        taskBlock.className = 'taskBlock';

        var check = document.createElement('input');
        check.type = 'checkbox';
        check.id = 'check' + count;
        check.className = 'check';
        check.addEventListener('click', checkFunk);

        var close = document.createElement('div');
        close.id = 'close' + count;
        close.className = 'close';
        close.textContent = 'X';
        close.addEventListener('click', closeTaskFunk);

        var span = document.createElement('span');
        span.id = 'span' + count;
        span.className = 'span';
        span.textContent = todoArea.value;

        taskBlock.appendChild(check);
        taskBlock.appendChild(span);
        taskBlock.appendChild(close);
        todo.appendChild(taskBlock);

        todoArea.value = '';
      }
    }

    function checkFunk(e){
      let deleteCount = e.target.id.slice(5);
      let textInside = document.getElementById('span' + deleteCount);
      textInside.style.textDecoration='line-through';
      textInside.style.color='gray';
      e.target.style.visibility = 'hidden';
    }

    function closeTaskFunk(e){
      let deleteCount = e.target.id.slice(5);
      let deleteBlock = document.getElementById('taskBlock' + deleteCount);
      deleteBlock.remove();
    }
});

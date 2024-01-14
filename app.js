function calculator (){

const screen = document.getElementById('screen');
const buttons = Array.from(document.getElementsByClassName('number'));
const operators = Array.from(document.getElementsByClassName('oPS'));
const equal = document.getElementsByClassName('eQuality')[0];
const del = document.getElementsByClassName('oPS')[3];
let currentNum = '';
let prevNum = '';
let result = null;
let currentOperator = null;

buttons.map( button => {
    button.addEventListener('click', (e) => {
        currentNum += e.target.value;
        screen.value = currentNum;
    })
});

operators.map( operator => {
    operator.addEventListener('click', (e) => {
        if(currentOperator !== null){
            prevNum = eval(prevNum + currentOperator + currentNum);
            screen.value = prevNum;
            currentNum = ''
        } else {
            prevNum = currentNum;
            currentOperator = e.target.value;
            currentNum = '';
        }
    });
});

equal.addEventListener('click', () => {
    if(currentOperator !== null){
        result = eval(prevNum + currentOperator + currentNum);
        screen.value = result;
        currentNum = result;
        prevNum = '';
        currentOperator = null;
    }
});

del.addEventListener('click', () => {
    currentNum = currentNum.slice(0, -1);
    screen.value = currentNum;
});

screen = document.getElementById('screen');
buttons = Array.from(document.getElementsByTagName('input'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.value;
        if(buttonText === 'del') {
            screen.value = screen.value.slice(0, -1);
        } else if(buttonText === 'reset') {
            screen.value = '';
        } else if(buttonText === '=') {
            try {
                screen.value = eval(screen.value);
            } catch {
                screen.value = "Error"
            }
        } else {
            screen.value += buttonText;
        }
    });
});
};

calculator();


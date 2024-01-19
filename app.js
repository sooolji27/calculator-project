
const screen = document.getElementById('screen');

function reset(){
    screen.value = "";
};

function del(){
    screen.value = screen.value.slice(0, -1);
 };

 function appendtoDisplay(input){
    screen.value += input;
};
 
function calculate(){
    try{
        screen.value = eval(screen.value);
    } catch (error){
        screen.value = "Error";
    };
 };
 



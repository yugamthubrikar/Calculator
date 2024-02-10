const display = document.getElementById('display');

function onCalculator(){
    let switchbtn = document.getElementById('onoff');
    buttons = document.getElementsByTagName('button');
    if (switchbtn.checked) {
        for (i = 0;i < buttons.length; ++i) {
            buttons[i].disabled = false;
        }
    }
    else {
        for (i = 0;i < buttons.length; ++i) {
            buttons[i].disabled = true;
        }
    }
}

function valueOnScreen(val) {
    display.value += val;
}

function allclear() {
    display.value = "";
}

function answer() {
    var equation = display.value;
    var ans = eval(equation);
    display.value = ans;
}

function clearval() {
    let string = display.value;
    display.value  = string.slice(0, string.length - 1);
}
 

const display = document.getElementById('display');

function onCalculator(){
    let switchbtn = document.getElementById('onoff');
    buttons = document.getElementsByTagName('button');
    if (switchbtn.value == "false") {
        switchbtn.value = true;
        for (i = 0;i < buttons.length; ++i) {
            buttons[i].disabled = false;
        }
    }
    else {
        switchbtn.value = false;
        for (i = 0;i < buttons.length; ++i) {
            buttons[i].disabled = true;
            switchbtn.disabled = false;
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
 

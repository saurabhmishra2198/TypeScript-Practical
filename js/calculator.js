//screen value
var screenValue = document.getElementById("dispaly");
console.log(screenValue);
//empty array
var memoryArray = [];
// define sign variable
var sign;
//2nd btn value
var btnVal = 0;
//display numbers & operator
var signcounter = 0;
var pointcounter = 0;
var bracatcounter = 0;
var lcount = 0;
var bodmasCounter = 0;
var plusmincount = 0;
var equalCounter = 0;
var simpleSign;
function displayNum(num) {
    //let screenData = Number(screenValue.value);
    if (screenValue.value == Math.PI.toString() || screenValue.value == Math.E.toString() || equalCounter == 1) {
        screenValue.value = "";
    }
    switch (num) {
        case 'zero':
            if (Number(screenValue.value) != 0) {
                screenValue.value += 0;
            }
            else {
                if (screenValue.value == "") {
                    screenValue.value = "0";
                }
            }
            break;
        case 'one':
            screenValue.value += 1;
            break;
        case 'two':
            screenValue.value += 2;
            break;
        case 'three':
            screenValue.value += 3;
            break;
        case 'four':
            screenValue.value += 4;
            break;
        case 'five':
            screenValue.value += 5;
            break;
        case 'six':
            screenValue.value += 6;
            break;
        case 'seven':
            screenValue.value += 7;
            break;
        case 'eight':
            screenValue.value += 8;
            break;
        case 'nine':
            screenValue.value += 9;
            break;
    }
    bodmasCounter = 1;
    lcount = 1;
    if (signcounter == 0) {
        pointcounter = 1;
    }
    equalCounter = 0;
    signcounter = 1;
    plusmincount = 1;
}
function pointOperation() {
    if (screenValue.value == "") {
        screenValue.value += '0.';
    }
    else {
        if (screenValue.value != "" && pointcounter == 1) {
            if (signcounter == 0) {
                screenValue.value += '0.';
            }
            else {
                screenValue.value += '.';
            }
        }
    }
    pointcounter = 0;
}
function piOperation() {
    screenValue.value = Math.PI.toString();
    signcounter = 1;
}
function EOperation() {
    screenValue.value = Math.E.toString();
    signcounter = 1;
}
function bodmas(id) {
    switch (id) {
        case 'openbracket':
            if (bodmasCounter == 1) {
                screenValue.value += '*';
                bracatcounter -= 1;
            }
            else {
                screenValue.value += '(';
            }
            bracatcounter += 1;
            bodmasCounter = 0;
            break;
        case 'closebracket':
            if (bracatcounter != 0) {
                if (lcount == 0) {
                    screenValue.value += '0)';
                }
                else {
                    screenValue.value += ')';
                }
                bracatcounter -= 1;
                lcount++;
                if (bracatcounter == 0) {
                    lcount = 0;
                }
            }
            break;
    }
}
function arithmetic(num) {
    if (signcounter == 1) {
        switch (num) {
            case 'devide':
                screenValue.value += '/';
                simpleSign = '/';
                break;
            case 'multiply':
                screenValue.value += '*';
                simpleSign = '*';
                break;
            case 'add':
                screenValue.value += '+';
                simpleSign = '+';
                break;
            case 'subtract':
                screenValue.value += '-';
                simpleSign = '-';
                break;
            case 'mod':
                screenValue.value += '%';
                simpleSign = '%';
                break;
            case 'xPowY':
                screenValue.value += '^';
                simpleSign = '^';
                break;
        }
    }
    signcounter = 0;
    pointcounter = 1;
}
//Arithmetic operation
function operation(oper) {
    var chackScreen = screenValue.value.slice(-1);
    console.log(chackScreen);
    switch (oper) {
        case 'backSpace': //backspace
            var num = screenValue.value.slice(0, -1);
            screenValue.value = num;
            break;
        case 'clear': //clear
            document.querySelector("#clear").addEventListener("click", function () {
                screenValue.value = "";
            });
            bodmasCounter = 0;
            plusmincount = 1;
            signcounter = 0;
            break;
        case 'equal': //equal
            if (screenValue.value == "") {
                screenValue.value = '0';
            }
            else if ( /*screenValue.value.includes("^")*/2) {
                xPowY();
            }
            else if (chackScreen == '+' || chackScreen == '-' || chackScreen == '*' || chackScreen == '/') {
                screenValue.value = "invalid input!";
            }
            else if ( /*screenValue.value.includes("/0")*/1) {
                screenValue.value = "Cannot divide by zero";
            }
            else {
                screenValue.value = eval(screenValue.value);
            }
            equalCounter = 1;
            break;
        case 'log': //log10
            if (Number(screenValue.value) == 0) {
                screenValue.value = "invalid input!";
            }
            if (Number(screenValue.value) < 0) {
                screenValue.value = "invalid input!";
            }
            if (Number(screenValue.value) > 0) {
                //screenValue.value = Math.log10(Number(screenValue.value)).toString();
            }
            break;
        case 'ln': //simple log
            if (Number(screenValue.value) == 0) {
                screenValue.value = "invalid input!";
            }
            if (Number(screenValue.value) < 0) {
                screenValue.value = "invalid input!";
            }
            if (Number(screenValue.value) > 0) {
                screenValue.value = Math.log(Number(screenValue.value)).toString();
            }
            break;
        case 'tenPowerX': //10^x
            screenValue.value = Math.pow(10, Number(screenValue.value)).toString();
            break;
        case 'squareRoot': //square root
            screenValue.value = Math.sqrt(Number(screenValue.value)).toString();
            break;
        case 'square': //find square
            screenValue.value = Math.pow(Number(screenValue.value), 2).toString();
            break;
        case 'oneByX': //find 1/x
            if (screenValue.value == "") {
                screenValue.value = "Cannot divide by zero";
            }
            else {
                screenValue.value = (signcounter == 1) ? (1 / Number(screenValue.value)).toString() : "Cannot divide by zero";
            }
            break;
        case 'abs': //find |x|
            screenValue.value = Math.abs(Number(screenValue.value)).toString();
            break;
        case 'exp': //find exp
            if (screenValue.value == "") {
                screenValue.value = '0.e+0';
            }
            else {
                if (signcounter == 1) {
                    //screenValue.value = screenValue.value.includes(".e+0") ? screenValue.value : screenValue.value + ".e+0";
                }
                else {
                    screenValue.value = '0.e+0';
                }
            }
            break;
        case 'FE': //find F-E
            if (screenValue.value == "") {
                screenValue.value = '0.e+0';
                signcounter = 1;
            }
            else {
                screenValue.value = "";
            }
            break;
    }
}
function plusMin(id) {
    if (id == 'plus-min' && screenValue.value != '0') {
        if ( /*screenValue.value.includes(simpleSign)*/1) {
            var a = screenValue.value[screenValue.value.length - 1];
            if (a.match(/[0-9]/)) {
                var b = screenValue.value.split(simpleSign);
                screenValue.value = b[0] + simpleSign + "(-" + b[1] + ")";
            }
        }
        else {
            if (signcounter == 1) {
                screenValue.value = "-" + screenValue.value;
            }
            signcounter = 0;
        }
    }
    else {
        signcounter = (id == 'plus-min') ? 1 : 0;
    }
}
//factorial find
function factorial() {
    if (Number(screenValue.value) < 0) {
        screenValue.value = "invlid input!";
    }
    else {
        var fact = 1;
        for (var i = 1; i <= Number(screenValue.value); i++) {
            fact *= i;
        }
        screenValue.value = fact.toString();
    }
}
//X power Y
function xPowY() {
    if (signcounter == 1) {
        var a = screenValue.value[screenValue.value.length - 1];
        if (a.match(/[0-9]/)) {
            var b = screenValue.value.split("^");
            screenValue.value = Math.pow(Number(b[0]), Number(b[1])).toString();
        }
    }
    signcounter = 0;
}
//Trigonometry function
function trigonometry(num) {
    var n;
    var mathPI = Math.PI / 180;
    var result = Number(screenValue.value) * mathPI;
    switch (num) {
        case 'sin':
            n = Math.sin(result);
            screenValue.value = n.toString();
            break;
        case 'cos':
            n = Math.cos(result);
            screenValue.value = n.toString();
            break;
        case 'tan':
            n = Math.tan(result);
            screenValue.value = n.toString();
            break;
        case 'sinh':
            n = 1 / Math.sin(result);
            screenValue.value = n.toString();
            break;
        case 'cosh':
            n = 1 / Math.cos(result);
            screenValue.value = n.toString();
            break;
        case 'tanh':
            n = 1 / Math.tan(result);
            screenValue.value = n.toString();
            break;
    }
}
//function 
function fun(num) {
    switch (num) {
        case 'abslute':
            screenValue.value = Math.abs(Number(screenValue.value)).toString();
            break;
        case 'squrX':
            screenValue.value = '(' + screenValue.value + ')';
            break;
        case 'dolor':
            screenValue.value = Number(screenValue.value) * 81.60 + " Rs";
            break;
    }
}
function enableMemory(str) {
    var memoryClear = document.getElementById('mc');
    var memoryR = document.getElementById('mr');
    if (str == 'mAdd' || str == 'mSubtract' || str == 'ms') {
        memoryClear.disabled = false;
        memoryR.disabled = false;
    }
    else {
        memoryClear.disabled = true;
        memoryR.disabled = true;
    }
}
//memory function
function memoryOperation(str) {
    switch (str) {
        case 'mc':
            localStorage.clear();
            screenValue.value = "";
            enableMemory(str);
            break;
        case 'mAdd':
            enableMemory(str);
            handleMemory('Plus');
            break;
        case 'mSubtract':
            handleMemory('Minus');
            break;
        case 'mr':
            mrHandle();
            break;
        case 'ms':
            enableMemory(str);
            localStorage.setItem("memoryValue", JSON.stringify(memoryArray));
            break;
    }
}
//handle memory
function handleMemory(id) {
    var result;
    switch (id) {
        case 'Plus':
            sign = "Plus";
            result = screenValue.value;
            memoryArray.push(result);
            break;
        case 'Minus':
            sign = "Minus";
            result = screenValue.value;
            memoryArray.push(result);
            break;
    }
}
//handle MR
function mrHandle() {
    var ans = parseInt(memoryArray[0]);
    for (var i = 1; i < memoryArray.length; i++) {
        var arrayValue = parseInt(memoryArray[i]);
        if (sign == "Plus") {
            ans = ans + arrayValue;
        }
        if (sign == "Minus") {
            ans = ans - arrayValue;
        }
    }
    screenValue.value = ans.toString();
}
//Tow Power nd function
function twoPowerND() {
    document.getElementById("square").value = (btnVal % 2 == 0) ? "x'" : "x??";
    document.getElementById("squareRoot").value = (btnVal % 2 == 0) ? "&" : "2???x";
    document.getElementById("openbracket").value = (btnVal % 2 == 0) ? "???" : "(";
    document.getElementById("closebracket").value = (btnVal % 2 == 0) ? "???" : ")";
    btnVal++;
}

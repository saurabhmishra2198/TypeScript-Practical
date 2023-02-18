class calculator{
    screenValue:any = (document.getElementById("display") as HTMLInputElement);
    screenValue2:any = (document.getElementById("display2") as HTMLInputElement);
    signcounter:Number;
    pointcounter:Number;
    bracatcounter:any;
    lcount:any
    bodmasCounter:Number;
    plusmincount:Number;
    equalCounter:Number;
    btnVal:any;
    simpleSign:any;
    sign:any;
    memoryArray:any = [];
    constructor()
    {
        this.signcounter = 0;
        this.pointcounter = 0;
        this.lcount=0;
        this.bodmasCounter = 0;
        this.plusmincount = 0;
        this.equalCounter = 0;
        this.btnVal = 0;
    }
    showNumber(num:any){
        if (this.screenValue.value == Math.PI.toString() || this.screenValue.value == Math.E.toString() || this.equalCounter == 1) {
            this.screenValue.value = "";
        }
        switch (num) {
            case 'zero':
                if (Number(this.screenValue.value) != 0) {
                    this.screenValue.value += 0;
                }
                else {
                    if (this.screenValue.value == "") {
                        this.screenValue.value = "0";
                    }
                }
                break;
            case 'one':
                this.screenValue.value += 1;
                break;
            case 'two':
                this.screenValue.value += 2;
                break;
            case 'three':
                this.screenValue.value += 3;
                break;
            case 'four':
                this.screenValue.value += 4;
                break;
            case 'five':
                this.screenValue.value += 5;
                break;
            case 'six':
                this.screenValue.value += 6;
                break;
            case 'seven':
                this.screenValue.value += 7;
                break;
            case 'eight':
                this.screenValue.value += 8;
                break;
            case 'nine':
                this.screenValue.value += 9;
                break;
        }
        this.bodmasCounter = 1;
        this.lcount = 1;
        if (this.signcounter == 0) {
            this.pointcounter = 1;
        }
        this.equalCounter = 0;
        this.signcounter = 1;
        this.plusmincount = 1;
    }

    signOperation(num:string) {
        if (this.signcounter == 1) {
            switch (num) {
                case 'devide':
                    this.screenValue.value += '/';
                    this.simpleSign = '/';
                    break;
                case 'multiply':
                    this.screenValue.value += '*';
                    this.simpleSign = '*';
                    break;
                case 'add':
                    this.screenValue.value += '+';
                    this.simpleSign = '+';
                    break;
                case 'subtract':
                    this.screenValue.value += '-';
                    this.simpleSign = '-';
                    break;
                case 'mod':
                    this.screenValue.value += '%';
                    this.simpleSign = '%';
                    break;
                case 'xPowY':
                    this.screenValue.value += '^';
                    this.simpleSign = '^';
                    break;
            }
        }
        this.signcounter = 0;
        this.pointcounter = 1;
    }

    calsiOperation(oper:any) {
        var chackScreen = this.screenValue.value.slice(-1);
        switch (oper) {
            case 'backSpace': //backspace
                const num = this.screenValue.value.slice(0, -1);
                this.screenValue.value = num;
                break;
            case 'clear': //clear
                (<HTMLButtonElement>document.querySelector("#clear")).addEventListener("click", () => {
                    this.screenValue.value = "";
                    this.screenValue2.value = "";
                })
                this.bodmasCounter = 0;
                this.plusmincount = 1;
                this.signcounter = 0;
                break;
            case 'equal': //equal
                if (this.screenValue.value == "") {
                    this.screenValue.value = '0';
                }
                else if (this.screenValue.value.includes("^")) {
                    this.screenValue2.value = this.screenValue.value;
                    this.xPowY();
                }
                else if (chackScreen == '+' || chackScreen == '-' || chackScreen == '*' || chackScreen == '/') {
                    this.screenValue.value = "invalid input!"
                }
                else if (this.screenValue.value.includes("/0")) {
                    this.screenValue.value = "Cannot divide by zero";
                }
                else {
                    this.screenValue2.value = this.screenValue.value;
                    this.screenValue.value = eval(this.screenValue.value);
                }
                this.equalCounter = 1;
                break;
            case 'log': //log10
                let logResult:Number = Math.log(Number(this.screenValue.value)) / Math.log(10);
                (this.screenValue.value =="" || this.screenValue.value == "0" || this.screenValue.value < "0") ? this.screenValue.value = "Invalid Input" : this.screenValue.value = logResult.toString();
                break;
            case 'ln': //simple log
                (this.screenValue.value =="" || this.screenValue.value == "0" || this.screenValue.value < "0") ? this.screenValue.value = "Invalid Input" : this.screenValue.value = Math.log(Number(this.screenValue.value)).toString();
                break;
            case 'tenPowerX': //10^x
                this.screenValue.value = Math.pow(10, Number(this.screenValue.value)).toString();
                break;
            case 'squareRoot': //square root
                this.screenValue.value = Math.sqrt(Number(this.screenValue.value)).toString();
                break;
            case 'square': //find square
                this.screenValue.value = Math.pow(Number(this.screenValue.value), 2).toString();
                break;
            case 'oneByX': //find 1/x
                if (this.screenValue.value == "") {
                    this.screenValue.value = "Cannot divide by zero";
                }
                else {
                    this.screenValue.value = (this.signcounter == 1) ? (1 / Number(this.screenValue.value)).toString() : "Cannot divide by zero";
                }
                break;
            case 'abs': //find |x|
                this.screenValue.value = Math.abs(Number(this.screenValue.value)).toString();
                break;
            case 'exp': //find exp
                if (this.screenValue.value == "") {
                    this.screenValue.value = '0.e+0';
                }
                else {
                    if (this.signcounter == 1) {
                        this.screenValue.value = this.screenValue.value.includes(".e+0") ? this.screenValue.value : this.screenValue.value + ".e+0";
                    }
                    else {
                        this.screenValue.value = '0.e+0';
                    }
                }
                break;
            case 'FE': //find F-E
                if (this.screenValue.value == "") {
                    this.screenValue.value = '0.e+0';
                    this.signcounter = 1;
                }
                else {
                    this.screenValue.value = "";
                }
                break;
        }
    }
    calsiPointOperation() {
        if (this.screenValue.value == "") {
            this.screenValue.value += '0.';
        }
        else {
            if (this.screenValue.value != "" && this.pointcounter == 1) {
                (this.signcounter==0) ? this.screenValue.value +='0.' : this.screenValue.value +='.';
            }
        }
        this.pointcounter = 0;
    }
    calsiPIOperation() {
        this.screenValue.value = Math.PI.toString() ;
        this.signcounter = 1;
    }
    calsiEOperation() {
        this.screenValue.value = Math.E.toString();
        this.signcounter = 1;
    }
    calsiBodmas(id:any) {
        switch (id) {
            case 'openbracket':
                if (this.bodmasCounter == 1) {
                    this.screenValue.value += '*';
                    this.bracatcounter -= 1;
                }
                else {
                    this.screenValue.value += '(';
                }
                this.bracatcounter += 1;
                this.bodmasCounter = 0;
                break;
            case 'closebracket':
                if (this.bracatcounter != 0) {
                    (this.lcount == 0) ? this.screenValue.value += '0)' : this.screenValue.value += ')';
                    this.bracatcounter -= 1;
                    this.lcount++;
                    if (this.bracatcounter == 0) {
                        this.lcount = 0;
                    }
                }
                break;
        }
    }
    CalsiPlusMin(id:any) {
        if (id == 'plus-min' && this.screenValue.value != '0') {
            if (this.screenValue.value.includes(this.simpleSign)) {
                let a = this.screenValue.value[this.screenValue.value.length - 1];
                if (a.match(/[0-9]/)) {
                    let b = this.screenValue.value.split(this.simpleSign);
                    this.screenValue.value = b[0] + this.simpleSign + "(-" + b[1] + ")";
                }
            }
            else {
                if (this.signcounter == 1) {
                    this.screenValue.value = "-" + this.screenValue.value;
                }
                this.signcounter = 0;
            }
        }
        else {
            this.signcounter = (id == 'plus-min') ? 1 : 0;
        }
    }
    calsiFactorialFind() {
        if (Number(this.screenValue.value) < 0) {
            this.screenValue.value = "invlid input!"
        }
        else {
            let fact = 1;
            for (let i = 1; i <= Number(this.screenValue.value); i++) {
                fact *= i;
            }
            this.screenValue.value = fact.toString();
        }
    }
    //X power Y
    xPowY() {
        if (this.signcounter == 1) {
            let a = this.screenValue.value[this.screenValue.value.length - 1];
            if (a.match(/[0-9]/)) {
                let b = this.screenValue.value.split("^");
                this.screenValue.value = Math.pow(Number(b[0]), Number(b[1])).toString();
            }
        }
        this.signcounter = 0;
    }
    
    CalsiTrigonometry(num:any) {
        let trigonometryResult;
        var mathPI = Math.PI / 180;
        var result = Number(this.screenValue.value) * mathPI;
        switch (num) {
            case 'sin':
                trigonometryResult = Math.sin(result)
                this.screenValue.value = trigonometryResult.toString();
                break;
            case 'cos':
                trigonometryResult = Math.cos(result)
                this.screenValue.value = trigonometryResult.toString();
                break;
            case 'tan':
                trigonometryResult = Math.tan(result)
                this.screenValue.value = trigonometryResult.toString();
                break;
            case 'sinh':
                trigonometryResult = 1 / Math.sin(result);
                this.screenValue.value = trigonometryResult.toString();
                break;
            case 'cosh':
                trigonometryResult = 1 / Math.cos(result);
                this.screenValue.value = trigonometryResult.toString();
                break;
            case 'tanh':
                trigonometryResult = 1 / Math.tan(result);
                this.screenValue.value = trigonometryResult.toString();
                break;
        }
    }
    //function 
    calsiFunction(num:any) {
        switch (num) {
            case 'abslute':
                this.screenValue.value = Math.abs(Number(this.screenValue.value)).toString();
                break;
            case 'squrX':
                this.screenValue.value = '(' + this.screenValue.value + ')';
                break;
            case 'dolor':
                this.screenValue.value = Number(this.screenValue.value) * 81.60 + " Rs";
                break;
        }
    }
    enableMemory(str:any) {
        let memoryClear:any = document.getElementById('mc');
        let memoryR:any = document.getElementById('mr');
        if(str == 'mAdd' || str == 'mSubtract' || str == 'ms'){
            memoryClear.disabled = false;
            memoryR.disabled = false;
        }
        else
        {
            memoryClear.disabled = true;
            memoryR.disabled = true;
        }
        
    }
    //memory function
    calsiMemoryOperation(str:any) {
        switch (str) {
            case 'mc':
                localStorage.clear();
                this.screenValue.value = "";
                this.enableMemory(str);
                break;
            case 'mAdd':
                this.enableMemory(str);
                this.handleMemory('Plus');
                break;
            case 'mSubtract':
                this.handleMemory('Minus');
                break;
            case 'mr':
                this.mrHandle();
                break;
            case 'ms':
                this.enableMemory(str);
                localStorage.setItem("memoryValue", JSON.stringify(this.memoryArray));
                break;
        }
    }
    //handle memory
    handleMemory(id:any) {
        let result;
        switch (id) {
            case 'Plus':
                this.sign = "Plus";
                result = this.screenValue.value;
                this.memoryArray.push(result);
                break;
            case 'Minus':
                this.sign = "Minus";
                result = this.screenValue.value;
                this.memoryArray.push(result);
                break;
        }
    }
    //handle MR
    mrHandle() {
        let ans = (<NumberConstructor>parseInt)(this.memoryArray[0]);
        for (let i = 1; i < this.memoryArray.length; i++) {
            let arrayValue = (<NumberConstructor>parseInt)(this.memoryArray[i]);
            if (this.sign == "Plus") {
                ans = ans + arrayValue;
            }
            if (this.sign == "Minus") {
                ans = ans - arrayValue;
            }
        }
        this.screenValue.value = ans.toString();
    }
    calsiTwoPowerND() {
        (<HTMLButtonElement>document.getElementById("square")).value = (this.btnVal % 2 == 0) ? "x'" : "x²";
        (<HTMLButtonElement>document.getElementById("squareRoot")).value = (this.btnVal % 2 == 0) ? "&" : "2√x";
        (<HTMLButtonElement>document.getElementById("openbracket")).value = (this.btnVal % 2 == 0) ? "⇒" : "(";
        (<HTMLButtonElement>document.getElementById("closebracket")).value = (this.btnVal % 2 == 0) ? "∑" : ")";
        this.btnVal++;
    }
}

let obj = new calculator()
function displayNum(id:any)
{
    obj.showNumber(id);
}
function arithmetic(id:any)
{
    obj.signOperation(id);
}
function operation(id:any)
{
    obj.calsiOperation(id);
}
function pointOperation()
{
    obj.calsiPointOperation();
}
function piOperation()
{
    obj.calsiPIOperation();
}
function EOperation()
{
    obj.calsiEOperation();
}
function bodmas(id:any)
{
    obj.calsiBodmas(id);
}
function plusMin(id:any)
{
    obj.CalsiPlusMin(id);
}
function factorial()
{
    obj.calsiFactorialFind();
}
function trigonometry(id:any)
{
    obj.CalsiTrigonometry(id);
}
function fun(id:any)
{
    obj.calsiFunction(id);
}
function memoryOperation(id:any)
{
    obj.calsiMemoryOperation(id);
}
function twoPowerND()
{
    obj.calsiTwoPowerND();
}
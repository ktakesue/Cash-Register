console.log("do i fucking work?");

const Calc = calculatorModule();

// document.getElementById("display").innerHTML = "$";

// console.log(Calc.add(45));
// console.log(Calc.subtract(9));
// console.log(Calc.multiply(12));
// console.log(Calc.divide(8));
// console.log(Calc.getTotal());

//// ALL THE BUTTONS ////
function makeElem(elem, label, inside){
    var container = document.createElement(elem);
    container.id = label;
    container.innerHTML = inside;

    return container;
}

var nineElem = makeElem("button", "nine", 9);
     	document.body.appendChild(nineElem);

var eightElem = makeElem("button", "eight", 8);
     	document.body.appendChild(eightElem);

var sevenElem = makeElem("button", "seven", 7);
         document.body.appendChild(sevenElem);

var sixElem = makeElem("button", "six", 6);
     	document.body.appendChild(sixElem);

var fiveElem = makeElem("button", "five", 5);
     	document.body.appendChild(fiveElem);

var fourElem = makeElem("button", "four", 4);
     	document.body.appendChild(fourElem);

var threeElem = makeElem("button", "three", 3);
     	document.body.appendChild(threeElem);

var twoElem = makeElem("button", "two", 2);
     	document.body.appendChild(twoElem);

var oneElem = makeElem("button", "one", 1);
     	document.body.appendChild(oneElem);

var zeroElem = makeElem("button", "zero", 0);
     	document.body.appendChild(zeroElem);

var doubleZElem = makeElem("button", "doubleZ", "00");
     	document.body.appendChild(doubleZElem);

var periodElem = makeElem("button", "period", ".");
     	document.body.appendChild(periodElem);

var clearElem = makeElem("button", "clear", "clear");
        document.body.appendChild(clearElem);

var balanceElem = makeElem("button", "balance", "get balance");
        document.body.appendChild(balanceElem); 

var depositElem = makeElem("button", "deposit", "deposit cash");
        document.body.appendChild(depositElem);

var withdrawElem = makeElem("button", "withdraw", "withdraw cash");
        document.body.appendChild(withdrawElem);

var addElem = makeElem("button", "add", "+");
        document.body.appendChild(addElem);

var subtractElem = makeElem("button", "subtract", "–");
        document.body.appendChild(subtractElem);

var multiplyElem = makeElem("button", "multiply", "x");
        document.body.appendChild(multiplyElem);

var divideElem = makeElem("button", "divide", "÷");
        document.body.appendChild(divideElem);

var equalElem = makeElem("button", "equal", "=");
        document.body.appendChild(equalElem);


//// CLICK FUNCTIONS ////
document.getElementById("nine").addEventListener("click", displayNine);
    function displayNine(){
        document.getElementById("display").innerHTML += "9";
            console.log(Number(display.innerHTML));
    // Calc.load(Number(display.innerHTML));
    }

document.getElementById("eight").addEventListener("click", displayEight);
    function displayEight(){
        document.getElementById("display").innerHTML += "8";
            console.log(Number(display.innerHTML));
    // Calc.load(Number(display.innerHTML));
    }

document.getElementById("seven").addEventListener("click", displaySeven);
    function displaySeven(){
        document.getElementById("display").innerHTML += "7";
            console.log(Number(display.innerHTML));
    // Calc.load(Number(display.innerHTML));
    }

document.getElementById("six").addEventListener("click", displaySix);
    function displaySix(){
        document.getElementById("display").innerHTML += "6";
            console.log(Number(display.innerHTML));
    // Calc.load(Number(display.innerHTML));
    }

document.getElementById("five").addEventListener("click", displayFive);
    function displayFive(){
        document.getElementById("display").innerHTML += "5";
            console.log(Number(display.innerHTML));
    // Calc.load(Number(display.innerHTML));
    }

document.getElementById("four").addEventListener("click", displayFour);
    function displayFour(){
        document.getElementById("display").innerHTML += "4";
            console.log(Number(display.innerHTML));
    // Calc.load(Number(display.innerHTML));
    }

document.getElementById("three").addEventListener("click", displayThree);
    function displayThree(){
        document.getElementById("display").innerHTML += "3";
            console.log(Number(display.innerHTML));
    // Calc.load(Number(display.innerHTML));
    }

document.getElementById("two").addEventListener("click", displayTwo);
    function displayTwo(){
        document.getElementById("display").innerHTML += "2";
            console.log(Number(display.innerHTML));
    // Calc.load(Number(display.innerHTML));
    }

document.getElementById("one").addEventListener("click", displayOne);
    function displayOne(){
        document.getElementById("display").innerHTML += "1";
            console.log(Number(display.innerHTML));
    // Calc.load(Number(display.innerHTML));
    }

document.getElementById("zero").addEventListener("click", displayZero);
    function displayZero(){
        document.getElementById("display").innerHTML += "0";
            console.log(Number(display.innerHTML));
    // Calc.load(Number(display.innerHTML));
    }

document.getElementById("doubleZ").addEventListener("click", displayDoubleZ);
    function displayDoubleZ(){
        document.getElementById("display").innerHTML += "00";
            console.log(Number(display.innerHTML));
    // Calc.load(Number(display.innerHTML));
    }

document.getElementById("period").addEventListener("click", displayPeriod);
    function displayPeriod(){
        document.getElementById("display").innerHTML += ".";
    }

document.getElementById("clear").addEventListener("click", displayClear);
    function displayClear(){
        Calc.clearMemory();
            console.log(0);
        document.getElementById("display").innerHTML = "";
        // unary plus (+) does the same thing as Number (); //
    }


//// ARITHMETIC FUNCTIONALITY ////
var id = "";

document.getElementById("equal").addEventListener("click", displayEqual);
    function displayEqual(){
       if (id === "add"){
            Calc.add(Number(display.innerHTML));
                // console.log(display.innerHTML);
            document.getElementById("display").innerHTML = Calc.getTotal();
                console.log(Calc.getTotal());
            Calc.load(Calc.getTotal());
            
    } else if (id === "subtract"){
            Calc.subtract(Number(display.innerHTML));
                // console.log(display.innerHTML);
            document.getElementById("display").innerHTML = Calc.getTotal();
                console.log(Calc.getTotal());
            Calc.load(Calc.getTotal());
           
    } else if (id === "multiply"){
            Calc.multiply(Number(display.innerHTML));
                // console.log(display.innerHTML);
            document.getElementById("display").innerHTML = Calc.getTotal();
                console.log(Calc.getTotal());
            Calc.load(Calc.getTotal());
           
    } else if (id === "divide"){
            Calc.divide(Number(display.innerHTML));
                // console.log(display.innerHTML);
            document.getElementById("display").innerHTML = Calc.getTotal();
                console.log(Calc.getTotal());
            Calc.load(Calc.getTotal());
            
    } 
}

document.getElementById("add").addEventListener("click", displayAdd);
    function displayAdd(){
        id = "add";
        var addResult = Number(display.innerHTML);
        Calc.load(addResult);
            // console.log(addResult);
        document.getElementById("display").innerHTML = "";
}

document.getElementById("subtract").addEventListener("click", displaySubtract);
    function displaySubtract(){
        id = "subtract";
        var subtractResult = Number(display.innerHTML);
        Calc.load(subtractResult);
            // console.log(subtractResult);
        document.getElementById("display").innerHTML = "";
}

document.getElementById("multiply").addEventListener("click", displayMultiply);
    function displayMultiply(){
        id = "multiply";
        var multiplyResult = Number(display.innerHTML);
        Calc.load(multiplyResult);
            // console.log(multiplyResult);
        document.getElementById("display").innerHTML = "";
}

document.getElementById("divide").addEventListener("click", displayDivide);
    function displayDivide(){
        id = "divide";
        var divideResult = Number(display.innerHTML);
        Calc.load(divideResult);
            // console.log(divideResult);
        document.getElementById("display").innerHTML = "";
}

//// BALANCE, DEPOSIT, WITHDRAW ////

document.getElementById("balance").addEventListener("click", displayBalance);
    function displayBalance(){
        Calc.recallMemory();
            console.log("$" + Calc.recallMemory() + " " + "balance total");
        document.getElementById("display").innerHTML = Calc.recallMemory();
    }

document.getElementById("deposit").addEventListener("click", displayDeposit);
    function displayDeposit(){
        Calc.depositMemory(Number(display.innerHTML));
            console.log("$" + Calc.getTotal() + " " + "deposit amount");
        document.getElementById("display").innerHTML = "";
    }

document.getElementById("withdraw").addEventListener("click", displayWithdraw);
    function displayWithdraw(){
        Calc.withdrawMemory(Number(display.innerHTML));
            console.log("$" + Calc.getTotal() + " " + "withdraw amount");
        document.getElementById("display").innerHTML = "";
    }
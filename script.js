function displayValue(userInput){
    document.getElementById('calValue').value += userInput;
}

function backSpace(){
    document.getElementById('calValue').value = document.getElementById('calValue').value.slice(0,-1) ;
}

function resetValue(){
    document.getElementById('calValue').value = "" ;
    document.getElementById('result').innerHTML = "" ;
}

function displayResult(){
    try{
        document.getElementById('calValue').value = eval(document.getElementById('calValue').value);
        document.getElementById('result').innerHTML = eval(document.getElementById('calValue').value);
    }
    catch{
        document.getElementById('calValue').value = "Syntax Error";
        document.getElementById('result').innerHTML = "Syntax Error"
    }
}

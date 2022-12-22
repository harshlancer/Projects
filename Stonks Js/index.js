let intialPrice=document.getElementById("intitalPrice");
let quantity=document.getElementById("stockQuantity");
let curretnPrice=document.getElementById("curretnPrice");
let outputBox=document.getElementById("outputBox");
let submit=document.getElementById("submitButton")

submit.addEventListener('click',submitHandler);

function submitHandler(){
    var ip=intialPrice.value;
    var qty=quantity.value;
    var curr=curretnPrice.value;

    PnL(ip,curr,qty);
}


function PnL(inital, final, quantity){
    if(inital>final){
        let loss=(inital-final)*quantity;
        let lossPercent=(loss/inital)*100;
        showOutput(`Hey alas on your loss of ${loss} that is ${lossPercent}% `);
    }
    else if(final>inital){
        let profit=(final-inital)*quantity;
        let profitPercent=(profit/inital)*100;

        showOutput(`Hey congratulations on your profit of ${profit} that is ${profitPercent}% `);
    }
    else{
        showOutput("No gain No pain")
    }
}

function showOutput(message){
    outputBox.innerHTML=message;
}
// Form select
const form = document.querySelector('form');

// Selecting all inputs
const inputs = document.querySelectorAll('input');

// Radio button selection 
const mortgageType = document.querySelectorAll('.checkmark');
const repaymentCheck = mortgageType[0]
const interestCheck = mortgageType[1]

// Repayment Amount
const monthlyAmount = document.querySelector('.monthlyAmount');

// Submit button 
const calButton = document.getElementById('calButton');


// Formatting amount input value
inputs[0].addEventListener('input', function() {
    let oldValue = inputs[0].value.replace(/,/g, '');
    console.log(oldValue);
    if (isNaN(parseInt(oldValue))){
        console.log("not a number")
    } else {
    inputs[0].value = parseInt(oldValue).toLocaleString();
    }
});

// Form submit function

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if(document.querySelector("#repay").checked){
    //Repayment Calculation
    //Term divided into months 
    const termMonths = inputs[1].value * 12;
    //Mortgage as number
    const mortVal = inputs[0].value.replace(/,/g, "");
    //Mortgage divied by term
    const mortTerm = mortVal / inputs[2].value;
    //Interest to Decimal
    const intDeci = inputs[2].value / 100;
    //Repayment Calculate 
    const repayCal = (mortVal - mortVal / 3) * intDeci / 12 + mortVal / termMonths;
    console.log(repayCal)
    monthlyAmount.innerText = repayCal
    //Interest repayment total 
   // monthlyAmount.innerText = Number(inputs[0].value.replace(/,/g, "")) * intDeci / 12 * inputs[1].value;
    } else if(document.querySelector("#int").checked){
        console.log("interest is now checked")
    }

})

form.addEventListener("input", (e) => {
    if(inputs[0].value === ""){
        console.log("invalid amount")
        errorDisplay()

    } else {
        errorRemove()
    }
    if(inputs[1].value === ""){
        document.querySelector(".inputContainer1").style.borderColor = "red"
        document.querySelector(".durLabel").style.backgroundColor = "red"
        document.querySelector(".durLabel").style.color = "white"
        document.querySelector("#errorMsg2").style.visibility = "visible";   
    } else {
        document.querySelector(".inputContainer1").style.borderColor = ""
        document.querySelector(".durLabel").style.backgroundColor = ""
        document.querySelector(".durLabel").style.color = ""
        document.querySelector("#errorMsg2").style.visibility = "";   
    }
    if(inputs[2].value === ""){
        document.querySelector(".inputContainer2").style.borderColor = "red"
        document.querySelector(".intLabel").style.backgroundColor = "red"
        document.querySelector(".intLabel").style.color = "white"
        document.querySelector("#errorMsg3").style.visibility = "visible";   
    } else {
        document.querySelector(".inputContainer2").style.borderColor = ""
        document.querySelector(".intLabel").style.backgroundColor = ""
        document.querySelector(".intLabel").style.color = ""
        document.querySelector("#errorMsg3").style.visibility = "";   
    } 
    if(inputs[3].checked && inputs[4].checked === "false"){
        document.querySelector("#errorMsg4").style.visibility = "visible";   
    }
})

function errorDisplay(){
    document.querySelector(".inputContainer3").style.borderColor = "red"
    document.querySelector(".amountLabel").style.backgroundColor = "red"
    document.querySelector(".amountLabel").style.color = "white"
    document.querySelector("#errorMsg1").style.visibility = "visible";   
}
function errorRemove(){
    document.querySelector(".inputContainer3").style.borderColor = ""
    document.querySelector(".amountLabel").style.backgroundColor = ""
    document.querySelector(".amountLabel").style.color = ""
    document.querySelector("#errorMsg1").style.visibility = "";   
}
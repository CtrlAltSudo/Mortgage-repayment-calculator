// Form select
const form = document.querySelector('form');

// Selecting all inputs
const inputs = document.querySelectorAll('input');

// Radio button selection 
const mortgageType = document.querySelectorAll('.checkmark');
console.log(mortgageType)
const repaymentCheck = mortgageType[0]
const interestCheck = mortgageType[1]




// Repayment Amount
const monthlyAmount = document.querySelector('.monthlyAmount');
// Total amount
const totalAmount = document.querySelector('.totalAmount')

// Submit button 
const calButton = document.getElementById('calButton');

//Clear all button  



//Selects checkmark
const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', function(e){
    console.log("clear button fired, inputs cleared")
    for(i = 0; i < 3; i++){
        inputs[i].value = "";
    }
    interestCheck.checked = false;
    mortgageType[0].style.width = 100 + 'px';
    repaymentCheck.checked = false;
/*     mortgageType.classList.remove("display") */
    document.querySelector("custom-radio.input:checked")
})

//Formatting function 
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

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
        //Term divided into months 
        const termMonths = inputs[1].value * 12;
        //Mortgage as number
        const mortVal = inputs[0].value.replace(/,/g, "");
        //Mortgage divied by term
        const mortTerm = mortVal / inputs[2].value;
        //Interest to Decimal
        const intDeci = inputs[2].value / 100;
        //Repayment Calculate 
    if(document.querySelector("#repay").checked){
    //Repayment Calculation
    const repayCal = Math.floor((mortVal - mortVal / 3) * intDeci / 12 + mortVal / termMonths);
    monthlyAmount.innerHTML = "<span>£</span>" + numberWithCommas(repayCal)
    document.querySelector("#errorMsg4").style.visibility = "";  
    //Total term calculation
    const totalRepay = Math.floor(repayCal * 12) * term.value;
    totalAmount.innerHTML = "<span>£</span>" +  numberWithCommas(totalRepay);
         //Hide initial calculation page 
        document.querySelector('#calculationWrap').style.display = "none"
         //Hide initial calculation page 
        document.querySelector('#resultsContainer').style.display = "flex"
    } else if(document.querySelector("#int").checked){
        //Interest repayment monthly total 
        const intRepay = Math.floor(mortVal * intDeci / 12);
        monthlyAmount.innerHTML = "<span>£</span>" + numberWithCommas(intRepay);
        //Interest repayment total amount
        const intRepayTotal = Math.floor(intRepay * termMonths * 100) / 100;
        totalAmount.innerHTML = "<span>£</span>" + numberWithCommas(intRepayTotal);
        document.querySelector("#errorMsg4").style.visibility = ""; 

    } else {
        document.querySelector("#errorMsg4").style.visibility = "visible";   

    }

})  


// Displays and removes error messages based on whether something is inputted in form
form.addEventListener("submit", (e) => {
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
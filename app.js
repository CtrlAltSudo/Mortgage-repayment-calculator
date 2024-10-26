const inputs = document.querySelectorAll('input');

const mortgageType = document.querySelectorAll('.checkmark');
const repaymentCheck = mortgageType[0]
const interestCheck = mortgageType[1]

let amount = inputs[0].value;
const term = inputs[1].value;
const interest = inputs[2].value;

// Formatting amount input
inputs[0].addEventListener('input', function() {
    let oldValue = inputs[0].value.replace(/,/g, '');
    console.log(oldValue);
    if (isNaN(parseInt(oldValue))){
        console.log("not a number")
    } else {
    inputs[0].value = parseInt(oldValue).toLocaleString();
    }
});

  
// Repayment Amount
const monthlyAmount = document.querySelector('.monthlyAmount');


// Submit button 
const calButton = document.getElementById('calButton');

// Submit button execute 
calButton.addEventListener('click', function(event) {
    event.preventDefault();
    const amount = inputs[0].value.replace(/,/g, '');
    const term = inputs[1].value;
    const interest = inputs[2].value;
    console.log(amount)
    //Interest calculation
    if(document.querySelector('#int').checked){
        console.log(amount * (interest / 100) / 12);
        console.log("Interest is checked");
        return monthlyAmount.innerHTML = amount * (interest / 100) / 12;
    //Repayment Calculation
    }else if(document.querySelector('#repay').checked){
        return monthlyAmount.innerHTML = "repay calculation"
            console.log("Repay is checked")
        }

})


/* For error states on inputs */
const errorMsgs = document.querySelector('.errorMsg');
const form = document.querySelector("#mortgageForm");

// Selectors for mortgage amount

const errorContainer = document.querySelector(".inputContainer3").style.borderColor="red";
const errorLabel = document.querySelector(".amountLabel").style.backgroundColor="red";
const errorText = document.querySelector(".amountLabel").style.color="white";

// Selectors for mortgage term

const errorTerm = document.querySelector(".inputContainer1").style.borderColor="red";
const errorTermBackground = document.querySelector(".durLabel").style.backgroundColor="red";
const errorTermSymbol = document.querySelector(".durLabel").style.color="white";

// Selectors for interest rate 

const errorInt = document.querySelector(".inputContainer2").style.borderColor="red";
const errorIntLabel = document.querySelector(".intLabel").style.backgroundColor="red";
const intLabel = document.querySelector(".intLabel").style.color="white";

// Checks if inputs are empty and displays error message if true 

form.addEventListener("input", () => {
    isEmpty = false;
    for(let i = 0; i < 4; i++){
    const inputField = form[i];
    const errorMsg = errorMsgs[i];
        // Check if the field is empty
        if (inputField.value === "") {
            errorMsg.style.visibility = 'visible';
            console.log(`form[${i}] is empty`);
        } else {
         /*    errorMsg.style.visibility = 'hidden'; */
            console.log(`form[${i}] is not empty`);
        }
    }
})

//


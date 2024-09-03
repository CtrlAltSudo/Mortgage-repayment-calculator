const inputs = document.querySelectorAll('input');

const mortgageType = document.querySelectorAll('.checkmark');
const repaymentCheck = mortgageType[0]
const interestCheck = mortgageType[1]

const amount = inputs[0].valueAsNumber;
const term = inputs[1].valueAsNumber;
const interest = inputs[2].valueAsNumber;

/* button functions */
const repaymentsCalculate = () => {
    const amount = inputs[0].valueAsNumber;
    const term = inputs[1].valueAsNumber;
    const interest = inputs[2].valueAsNumber;
    return amount * (interest / 100) / 12;
};


console.log(amount * (interest / 100) / 12 ) 

/* For error states on inputs */
const errorMsg = document.querySelector('.errorMsg');
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
            errorMsg.style.visibility = 'hidden';
            console.log(`form[${i}] is not empty`);
        }
    }
})



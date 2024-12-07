// Form select
const form = document.querySelector('form');

// Selecting all inputs
const inputs = document.querySelectorAll('input');

// Specific inputs


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

// Form 
form.addEventListener('input', e => {
    e.preventDefault();


    validateInputs();
});
//testing 
// Error Handling 




// Form validation check

const validateInputs = () => {
    const amount = inputs[0].value.trim();
    const term = inputs[1].value.trim();
    const interest = inputs[2].value.trim();

    if(amount === ''){

    }


};

// Selectors for mortgage amount

const errorLabel = document.querySelector(".amountLabel").style.backgroundColor="red";
const errorText = document.querySelector(".amountLabel").style.color="white";

// Selectors for mortgage term

const errorTermBackground = document.querySelector(".durLabel").style.backgroundColor="red";
const errorTermSymbol = document.querySelector(".durLabel").style.color="white";

// Selectors for interest rate 

const errorIntLabel = document.querySelector(".intLabel").style.backgroundColor="red";
const intLabel = document.querySelector(".intLabel").style.color="white";



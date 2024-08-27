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



const inputs = document.querySelectorAll('input');

const amount = inputs[0].valueAsNumber;
const term = inputs[1].valueAsNumber;
const interest = inputs[2].valueAsNumber;

const mortgageType = document.querySelectorAll('.checkmark');
const repaymentCheck = mortgageType[0]
const interestCheck = mortgageType[1]


/* const calculate = (amount, interest, term) => {
    return amount * (interest / 100) * term;
}
 */



function calculate(amount, interest, term) {
    return amount * (interest / 100) * term;
}
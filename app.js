const inputs = document.querySelectorAll('input');

const amount = inputs[0].valueAsNumber;
const term = inputs[1].valueAsNumber;
const interest = inputs[2].valueAsNumber;

const mortgageType = document.querySelectorAll('.checkmark');
const repaymentCheck = mortgageType[0]
const interestCheck = mortgageType[1]


function calculate(amount, term, interest) {
    const annualInterestRate = interest / 100;
    const totalInterest = amount * annualInterestRate * term;
    const totalAmount = amount + totalInterest;
    console.log(`Total repayment after ${term} years: ${totalAmount}`);
}

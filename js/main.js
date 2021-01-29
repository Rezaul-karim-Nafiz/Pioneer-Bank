//login button event handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById('login_area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction_area');
    transactionArea.style.display = 'block';
});

//deposit button event handler
const  depositButton = document.getElementById('addDeposit');
depositButton.addEventListener('click', function(){

    const depositNumber = getInputNumber('depositAmount');

    // const depositAmount = document.getElementById('depositAmount').value;
    // const depositNumber = parseFloat(depositAmount);//use for convert string to number a amount

    // const currentDeposit = document.getElementById('currentDeposit').innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // document.getElementById('currentDeposit').innerText = totalDeposit;

    updateSpanText('currentDeposit', depositNumber)

    updateSpanText('currentBalance', depositNumber)

    document.getElementById('depositAmount').value = '';
});
//withdraw button event handler
const withDrawButton = document.getElementById('addWithdraw');
withDrawButton.addEventListener('click', function() {
    const WidthDrawNumber = getInputNumber('withDrawAmount')

    updateSpanText('currentWithdraw', WidthDrawNumber);
    updateSpanText('currentBalance', -1 * WidthDrawNumber);
})

function getInputNumber(id) {
    const Amount = document.getElementById(id).value;
    const amountNumber = parseFloat(Amount);
    return amountNumber;
}

function updateSpanText(id, depositNumber) {
    const currentBalance = document.getElementById(id).innerText
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById(id).innerText = totalBalance;
}

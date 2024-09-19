const cashOutBtn = document.getElementById('cashOutMoneyBtn');
cashOutBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const accountBalance = document.getElementById('accountBalance').innerText;
    const accountBalanceNumber = Number(accountBalance);

    const cashOutAmountInput = document.getElementById('cashOutAmountInput').value;
    const cashOutAmountNumber = Number(cashOutAmountInput);

    const cashOutPinInput = document.getElementById('cashOutPinInput').value;

    console.log(cashOutAmountNumber);

    // console.log(cashOutAmountInput);
    console.log(cashOutPinInput);
    if (cashOutPinInput === '1234') {
        const newBalance = accountBalanceNumber - cashOutAmountNumber;
        document.getElementById('accountBalance').innerText = newBalance;
    }
    else {
        alert('Failed to add money.Please try again later.');
    }
})
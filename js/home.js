const addMoneyBtn = document.getElementById('addMoneyBtn');
addMoneyBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const amountInput = document.getElementById('amountInput').value;
    // console.log(amountInput);

    const pinInput = document.getElementById('pinInput').value;
    // console.log(pinInput);
    if (pinInput === '1234') {
        // console.log('adding money');
        const balance = document.getElementById('accountBalance').innerText;
        // console.log(Number(balance));

        const amountInputNumber = Number(amountInput);
        const balanceNumber = Number(balance);
        const newBalance = (amountInputNumber + balanceNumber);
        // console.log(newBalance);
        document.getElementById('accountBalance').innerText = newBalance;
    }
    else {
        alert('Failed to add money. Please try again later.');
    }
})  

//show add money and hide cash out
document.getElementById('addMoneyShow').addEventListener('click', function () {

    document.getElementById('addMoneyForm').classList.remove('hidden');
    document.getElementById('cashoutForm').classList.add('hidden');

});

//show cash out and hide add money
document.getElementById('cashoutBtnShow').addEventListener('click', function () {

    document.getElementById('cashoutForm').classList.remove('hidden');
    document.getElementById('addMoneyForm').classList.add('hidden');

});
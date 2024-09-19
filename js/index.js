// set handler 
document.getElementById('loginBtn').addEventListener('click', function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById('phoneNumber').value;
    const pinNumber = document.getElementById('pinNumber').value;

    if (phoneNumber === '5' && pinNumber === '2233') {
        console.log('you are logged in');
        window.location.href = '../home.html'
    }
    else {
        alert('Please submit correct phone number or pin');
    }

})
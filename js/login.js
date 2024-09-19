// set handler 
document.getElementById('loginBtn').addEventListener('click', function (event) {
    event.preventDefault();
    const number = document.getElementById('phoneNumber').value
    console.log(number);
})
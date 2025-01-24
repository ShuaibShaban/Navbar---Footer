// checked = property that determines the checked state of an HTML checkbox or radio button element

const myCheckbox = document.getElementById('myCheckbox');
const submitResult = document.getElementById('submitResult');
const mySubmit = document.getElementById('mySubmit');
const paymentResult = document.getElementById('paymentResult');
const visaBtn = document.getElementById('visaBtn');
const mastercardBtn = document.getElementById('mastercardBtn');
const payPalBtn = document.getElementById('payPalBtn');


mySubmit.onclick = function() {
    if (myCheckbox.checked) {
        submitResult.textContent = `You are subscribed`;
    } else {
        submitResult.textContent = `You are not subscribed`;
    }

    if(visaBtn.checked) {
        paymentResult.textContent = `You are paying with visa`;
    }
    else if (mastercardBtn.checked) {
        paymentResult.textContent = `You are paying with mastercard`;
    } 
    else if (payPalBtn.checked) {
        paymentResult.textContent = `You are paying with PayPal`;
    }
    else  {
        paymentResult.textContent = `You must select a payment method`;
    }
}

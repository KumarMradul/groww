document.addEventListener('DOMContentLoaded', function() {
    const switchToggle = document.getElementById('switch');
    switchToggle.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode');
    });

    // Initialize Razorpay options
    var key_id = 'rzp_test_yP6Zf5uHPyj584';
    var key_secret = 'lmU3YiJBro2sjWMIfUL1UcRV';
    var options = {
        key: key_id,
        amount: 50000, 
        currency: 'INR',
        name: 'Groww',
        description: 'Payment for your order',
        image: 'logo.svg', // URL to your company logo
        handler: function(response) {
            alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
            // You can handle payment success here, like updating your database or redirecting to a success page
        },
        
    };

    // Handle deposit button click
    var depositButton = document.getElementById('depositButton');
    if (depositButton) {
        depositButton.onclick = function() {
            const amount = parseInt(document.querySelector('.amount-input').value) || 0;
            options.amount = amount * 100; // Convert amount to paisa
            var rzp = new Razorpay(options);
            rzp.open();
        };
    } else {
        console.error('Deposit button not found.');
    }
});


function toggleOption(element, option) {
    document.querySelectorAll('.option').forEach(item => item.classList.remove('active'));
    element.classList.add('active');

    if (option === 'withdraw') {
        document.querySelector('.withdraw-section').style.display = 'block';
        document.querySelector('.deposit-section').style.display = 'none';
    } else {
        document.querySelector('.withdraw-section').style.display = 'none';
        document.querySelector('.deposit-section').style.display = 'block';
    }
}

function validateInput(input) {
    const value = parseInt(input.value) || 0;
    if (value < 0) {
        input.value = 0;
    }
}

function depositMoney() {
    const amount = parseInt(document.querySelector('.amount-input').value) || 0;
    // Perform deposit logic here
    alert(`Depositing ${amount} INR`);
}

function transferMoney() {
    const amountInput = document.querySelector('.withdraw-section .amount-input');
    if (amountInput) {
        const amount = parseInt(amountInput.value) || 0;
        if (amount > 0) {
            // Perform transfer logic here
            alert(`Withdraw ${amount} INR`);
        } else {
            alert('Please enter a valid amount.');
        }
    } else {
        console.error('Amount input not found.');
    }
}
function addAmount(value) {
    const amountInput = document.querySelector('.amount-input');
    const currentValue = parseInt(amountInput.value) || 0;
    amountInput.value = currentValue + value;
}
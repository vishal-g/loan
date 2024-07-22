document.querySelector('.cibil__otp-get').addEventListener('click', function() {
    const currentOtpItem = document.querySelector('.cibil__otp-item.active');
    const nextOtpItem = currentOtpItem.nextElementSibling;
    const otpSendedMessage = document.querySelector('.cibil__otp-sended');

    if (nextOtpItem && nextOtpItem.classList.contains('cibil__otp-item')) {
        currentOtpItem.classList.remove('active');
        nextOtpItem.classList.add('active');
        otpSendedMessage.classList.add('active');
    }
});

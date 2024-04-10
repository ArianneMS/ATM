let balance = 0;

const CORRECT_PIN = '1234';
const enterButton = document.getElementById('enter-button');
const cancelButton = document.getElementById('cancel-button');
const systemMessage = document.getElementById('system-message');
    
const subtitle = document.getElementById('subtitle');
console.log('enterButton:', enterButton);

const authenticatedArea = document.getElementById('authenticated');
const unauthenticatedArea = document.getElementById('unauthenticated');
authenticatedArea?.classList.add('hidden');

const pinInput = document.getElementById('pin-input');
systemMessage?.classList.remove('system-message-danger');

pinInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      enterButton.click();
    }
  });

enterButton?.addEventListener('click', () => {
    console.log('You clicked me!');

    console.log('pinInput:', pinInput);

    if (pinInput instanceof HTMLInputElement) {   
        const pin = pinInput?.value;
        console.log('pin:', pin);

        if (!pin) {
            alert('Please enter a PIN');
        } else if (pin === CORRECT_PIN) {
            alert('Correct PIN');
            subtitle.innerHTML = "AVAILABLE OPERATIONS";
            systemMessage.innerHTML = `WAITING FOR AN OPERATION`;
            systemMessage?.classList.remove('system-message-danger');

            authenticatedArea?.classList.remove('hidden');
            unauthenticatedArea?.classList.add('hidden');
        } else {
            alert('Incorrect PIN');
        }
    }
});

cancelButton?.addEventListener('click', () => {
    subtitle.innerHTML = "PLEASE AUTHENTICATE";
    authenticatedArea?.classList.add('hidden');
    unauthenticatedArea?.classList.remove('hidden');
})

const balanceButton = document.getElementById('balance-button');
const depositButton = document.getElementById('deposit-button');
const withdrawButton = document.getElementById('withdraw-button');
balanceButton?.addEventListener('click', () => {
    systemMessage.innerHTML = `Your balance is: $${balance}.`;
    systemMessage?.classList.remove('system-message-danger');
})

depositButton?.addEventListener('click', () => {
    balance = balance + 10;
    systemMessage.innerHTML = `$10 deposited. Your balance is: $${balance}.`;
    systemMessage?.classList.remove('system-message-danger');
})

withdrawButton?.addEventListener('click', () => {
    if(balance - 10 < 0) {
        systemMessage.innerHTML = `INSUFFICIENT FUNDS`;
        systemMessage?.classList.add('system-message-danger');
    } else {
        balance = balance - 10;
        systemMessage.innerHTML = `$10 withdrawn. Your balance is: $${balance}.`;
        systemMessage?.classList.remove('system-message-danger');
    }
})
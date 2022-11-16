

document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousdepositAmount = getElementValueById('deposit-total');

    const newDepositTotal = previousdepositAmount + newDepositAmount;

    setTextElementValueById('deposit-total', newDepositTotal);

    const previousbalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousbalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal)

})
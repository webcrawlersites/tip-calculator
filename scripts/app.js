const btn = document.querySelector('#calculate');
let bill = document.querySelector('#amount');
let guests = document.querySelector('#guests');
let tip = document.querySelector('#tip');
let amountRes = document.querySelector('#amount-res');
let tipRes = document.querySelector('#tip-res');

const getInputValue = (inputEl) => {
    return parseInt(inputEl.value);
}

const calcAmountPerPerson = (person, amount) => {
  let splitAmt = amount / person;
  return splitAmt.toFixed(2);
}

const calcTip = (billAmt, tipAmt) => {
  let totalTip = billAmt * (tipAmt / 100);
  return totalTip.toFixed(2);
}

const printInfoToEl = (element, data) => {
  element.innerHTML = '$' + data;
}

const calculate = () => {
  let billVal = getInputValue(bill);
  let guestsVal = getInputValue(guests);
  let tipVal = getInputValue(tip);
  let amountPerPersonVal = calcAmountPerPerson(guestsVal, billVal);
  let amountToTip = calcTip(billVal, tipVal);

  printInfoToEl(amountRes, amountPerPersonVal);
  printInfoToEl(tipRes, amountToTip);
}

btn.addEventListener('click', calculate);
document.addEventListener('keydown', (e) => {
  if(e.keyCode === 13) {
    let billVal = getInputValue(bill);
    let guestsVal = getInputValue(guests);
    let tipVal = getInputValue(tip);
    let amountPerPersonVal = calcAmountPerPerson(guestsVal, billVal);
    let amountToTip = calcTip(billVal, tipVal);

    printInfoToEl(amountRes, amountPerPersonVal);
    printInfoToEl(tipRes, amountToTip);
  }
});

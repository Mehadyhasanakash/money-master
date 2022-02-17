// calculate button

function getAmount(money) {

  // fodd input value
  const foodInput = document.getElementById(money);
  const foodInputValue = parseFloat(foodInput.value);

  // clear input
  // foodInput.value = '';
  return foodInputValue;
}








const button = document.getElementById('calculate-button').addEventListener('click', function () {

  const foodInputValue = getAmount('food-input')




  // rent-input value

  const rentInputValue = getAmount('rent-input');




  // clothes-input

  const clothersInputValue = getAmount('clothes-input');



  // expenses-amount total
  const expensesAmount = document.getElementById('expenses-amount');
  const expensesToatalAmout = parseFloat(expensesAmount.innerText);

  const totalAmount = expensesToatalAmout + foodInputValue + rentInputValue + clothersInputValue;
  expensesAmount.innerText = totalAmount;







  // income input value

  const IncomeInputValue = getAmount('income-input');





  const totalBalance = document.getElementById('total-Balance');
  const preBalance = parseFloat(totalBalance.innerText);
  const balance = preBalance + IncomeInputValue;
  const totalAmountBalances = balance - totalAmount;
  totalBalance.innerText = totalAmountBalances;

})




  // calculate-click \
 const calculateButton = document.getElementById('calculate-click').addEventListener('click', function (totalAmountBalances) {
    // save-input
    const saveInput = getAmount('save-input')

    const saveAmount = document.getElementById('save-amount');
    const amount = parseFloat(saveAmount.innerText);
    const saveBlacne = amount + saveInput;
    saveAmount.innerText = saveBlacne; 
    const totalBalance = totalAmountBalances / saveBlacne
   
  })
















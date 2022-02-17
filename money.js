// calculate button

const button = document.getElementById('calculate-button').addEventListener('click', function () {




  // fodd input value
    const foodInput = document.getElementById('food-input');
    const foodInputValue = parseFloat(foodInput.value);

    // clear input
    foodInput.value = '';


    // rent-input value
    const rentInput = document.getElementById('rent-input');
    const rentInputValue = parseFloat(rentInput.value);


    // clear input
    rentInput.value = '';


    // clothes-input
    const clothesInput = document.getElementById('clothes-input');
    const clothersInputValue = parseFloat(clothesInput.value);

    // clear input
    clothesInput.value = "";


    // expenses-amount total
    const expensesAmount = document.getElementById('expenses-amount');
    const expensesToatalAmout = parseFloat(expensesAmount.innerText);

    const totalAmount = expensesToatalAmout+ foodInputValue + rentInputValue +clothersInputValue ;
    expensesAmount.innerText = totalAmount;

   


     

    
    // income input value
    const incomeInput = document.getElementById('income-input');
    const IncomeInputValue = parseFloat(incomeInput.value);
    // clear input
    incomeInput.value = "";

     
 
    
    const totalBalance = document.getElementById('total-Balance');
    const preBalance = parseFloat(totalBalance.innerText);
    const balance = preBalance + IncomeInputValue;
    const totalAmountBalances = balance - totalAmount;
    totalBalance.innerText = totalAmountBalances;

  
        
    
    








})
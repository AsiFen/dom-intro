// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector('.billTypeText');
//get a reference to the add button
var addBillBtn = document.querySelector('.addToBillBtn');
//create a variable that will keep track of the total bill
var callTotalElem = document.querySelector('.callTotalOne');
var smsTotalElem = document.querySelector('.smsTotalOne');
var totalElem = document.querySelector('.totalOne');
//add an event listener for when the add button is pressed
var callsTotal = 0;
var smsTotal = 0;

function texBillTotal() {
    var billTypeEntered = billTypeText.value.trim();

    if (billTypeEntered == 'call') {
        callsTotal += 2.75
    }

    else if (billTypeEntered === 'sms') {
        smsTotal += 0.75
    }
        /// updating the totals seen on screen
        callTotalElem.innerHTML = callsTotal.toFixed(2);
        smsTotalElem.innerHTML = smsTotal.toFixed(2);
        var totalCost = callsTotal + smsTotal;
        totalElem.innerHTML = totalCost.toFixed(2)
   

    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalElem.classList.add("warning");
    }
}
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
addBillBtn.addEventListener('click', texBillTotal);
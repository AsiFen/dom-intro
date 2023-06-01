// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector('.billTypeText');
//get a reference to the add button
var addBillBtn = document.querySelector('.addToBillBtn');
//create a variable that will keep track of the total bill
var callTotalElem = document.querySelector('.callTotalOne');
var smsTotalElem = document.querySelector('.smsTotalOne');
// var totalElem = document.querySelector('.totalOne');
var btnToClear = document.querySelector('.btnClear');
    var userDataHTML = document.querySelector('.userData')
var templateSource = document.querySelector('.totalTemplate').innerHTML;
var templateFunction = Handlebars.compile(templateSource)


var callsTotal = 0;
var smsTotal = 0;
var totalCost = 0;

function texBillTotal() {
    var billTypeEntered = billTypeText.value.trim().toLowerCase();
    
    if (billTypeEntered == 'call') {
        callsTotal += 2.75
    }
    
    else if (billTypeEntered === 'sms') {
        smsTotal += 0.75
    }
    /// updating the totals seen on screen
    callTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    totalCost = callsTotal + smsTotal;
    // totalElem.innerHTML = totalCost.toFixed(2)
    
    
    var userDataHTML = document.querySelector('.userData')
    var getTotal = templateFunction({totalCost: totalCost.toFixed(2)})
    console.log(getTotal)
    console.log(totalCost);
    console.log({totalCost});
    userDataHTML.innerHTML = getTotal

    if (totalCost >= 50) {
        // adding the danger class will make the text red
        userDataHTML.classList.add("danger");
    }
    else if (totalCost >= 30) {
        userDataHTML.classList.add("warning");
    }
}




function clearClicked() {
    
    callTotalElem.innerHTML = '0.00';
    smsTotalElem.innerHTML = '0.00';

}
btnToClear.addEventListener("click", clearClicked);

addBillBtn.addEventListener('click', texBillTotal);
document.addEventListener('DOMContentLoaded', function () {
    var getTotal = templateFunction({totalCosts: totalCost})
 
    userDataHTML.innerHTML = getTotal
})
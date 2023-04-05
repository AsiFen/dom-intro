//get a reference to the calculate button
const calculateBtnElem = document.querySelector('.calculateBtn')
//get a reference to the billTotal element
var billStringElem = document.querySelector('.billString')
//get a reference to the billString
var billTotalElem = document.querySelector('.billTotal')
//create the function that will be called when the calculate button is pressed
function calculateBtnClicked() {

    var billString = billStringElem.value;

    var billItems = billString.split(',');
    var billTotal = 0;

    for (var i = 0; i < billItems.length; i++) {
        var billItem = billItems[i].trim();
        if (billItem === 'call') {
            billTotal += 2.75;
        }
        else if (billItem === 'sms') {
            billTotal += 0.75;
        }
        var roundedBillTotal = billTotal.toFixed(2);
        billTotalElem.innerHTML = roundedBillTotal;
    }
}
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element
calculateBtnElem.addEventListener("click", calculateBtnClicked);
//link the function to a click event on the calculate button

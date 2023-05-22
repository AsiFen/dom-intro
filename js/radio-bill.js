// get a reference to the sms or call radio buttons

//get a reference to the add button
var btnAddBill = document.querySelector('.radioBillAddBtn');
//create a variable that will keep track of the total bill
var callTotalElem2 = document.querySelector('.callTotalTwo');
var smsTotalElem2 = document.querySelector('.smsTotalTwo');
var totalElem2 = document.querySelector('.totalTwo');
var refresh = document.querySelector(".refresh-btn");

var tempSource = document.querySelector('.template').innerHTML;
var totalTemp = Handlebars.compile(tempSource)

var totalCost = 0;
var totalSms = 0;
var totalCall = 0;
//add an event listener for when the add button is pressed
function btnAddClicked() {
    var checkedRadioItem = document.querySelector('input[name="billItemType"]:checked');
    if (checkedRadioItem) {

        var checkedItemValue = checkedRadioItem.value;

        if (checkedItemValue == "sms") {
            totalSms += 0.75
            
        }
        else if (checkedItemValue == 'call') {
            totalCall += 2.75
        }
    } 

    callTotalElem2.innerHTML = totalCall.toFixed(2);
    smsTotalElem2.innerHTML = totalSms.toFixed(2);
    totalCost= totalCall + totalSms;
    // totalElem2.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalElem2.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalElem2.classList.add("warning");
    }
}


document.addEventListener('DOMContentLoaded', function () {
    var userDataElem = document.querySelector('.userData2')
    var totalCost2 = totalTemp(totalCost.toFixed(2))
    userDataElem.innerHTML = totalCost2
})


function clear(){
    callTotalElem2.innerHTML ="0.00"; 
    smsTotalElem2.innerHTML ="0.00";
    totalElem2.innerHTML ="0.00";
}
refresh.addEventListener("click", clear);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
btnAddBill.addEventListener("click", btnAddClicked);
//get a reference to the calculate button
const calculateBtnElem = document.querySelector('.calculateBtn')
//get a reference to the billTotal element
var billStringElem = document.querySelector('.billString')
//get a reference to the billString
var billTotalElem = document.querySelector('.billTotal')
var clearBtn = document.querySelector('.clear')
//create the function that will be called when the calculate button is pressed
function calculateBtnClicked() {

    var billString = billStringElem.value.toLowerCase();
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

    if (billTotal >= 30){
        // adding the danger class will make the text red
        billTotalElem.classList.add("danger");
        billTotalElem.classList.remove("warning");
    }
    else if (billTotal >= 20){
        billTotalElem.classList.add("warning");
        billTotalElem.classList.remove("danger");
    }
}

function refreshInput (){
    billTotalElem.innerHTML = "0.00";
    billStringElem.value = '';
    billTotal = '';

}
clearBtn.addEventListener("click", refreshInput);
calculateBtnElem.addEventListener("click", calculateBtnClicked);

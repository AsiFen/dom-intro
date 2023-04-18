
//DOM/Application logic
var billSetting = settingsBill(); //creating an instance of the function.

//reference  html elements
var btnAdd = document.querySelector('.btn');
var smsCostElem = document.querySelector('.smsCostSetting');
var callTotal_set = document.querySelector('.callTotalSettings');
var smsTotal_set = document.querySelector('.smsTotalSettings');
var total_set = document.querySelector('.totalSettings');
var callCostElem = document.querySelector('.callCostSetting');
var warningLevelElem = document.querySelector('.warningLevelSetting');
var criticalLevelElem = document.querySelector('.criticalLevelSetting');
var updateBtn = document.querySelector('.updateSettings');

var total = 0;
//create function to plug factory function items back to 
function btnUpdateClicked() { //when update is clicked the values of the DOM elements are stored
    var sms = smsCostElem.value
    var call = callCostElem.value
    var c_level = criticalLevelElem.value
    var w_level = warningLevelElem.value

    billSetting.setSmsCost(sms)
    billSetting.setCallCost(call)
    billSetting.setCriticalLevel(c_level)
    billSetting.setWarningLevel(w_level)

    if (total < billSetting.getWarningLevel()) {
        total_set.classList.remove(billSetting.totalClassName());
        total_set.classList.remove(billSetting.totalClassName1());
    }

    else if (total >= billSetting.getWarningLevel() && total < billSetting.getCriticalLevel()) {
        total_set.classList.remove(billSetting.totalClassName1());
        total_set.classList.add(billSetting.totalClassName());

    }
    else if (total >= billSetting.getCriticalLevel()) {
        total_set.classList.remove(billSetting.totalClassName());
        total_set.classList.add(billSetting.totalClassName1());
    }

}

function btnAddClick() {
    var checkedItem = document.querySelector('input[class="billItemTypeWithSettings"]:checked'); //beautiful

    if (checkedItem) {
        var value_checked = checkedItem.value;


        if (value_checked == 'sms') {
            billSetting.sendSms()
        }

        if (value_checked == 'call') {
            billSetting.makeCall()
        }
    }

    total = billSetting.getTotalCost()

    if (billSetting.getTotalCost() < billSetting.getWarningLevel() || billSetting.getTotalCost() === 0.00) {
        total_set.classList.remove(billSetting.totalClassName());
        total_set.classList.remove(billSetting.totalClassName1());
    }

    if (billSetting.getTotalCost() >= billSetting.getWarningLevel() && billSetting.getTotalCost() < billSetting.getCriticalLevel()) {
        total_set.classList.add(billSetting.totalClassName());
        total_set.classList.remove(billSetting.totalClassName1());
    }

    else if (billSetting.getTotalCost() >= billSetting.getCriticalLevel()) {
        total_set.classList.add(billSetting.totalClassName1());
        total_set.classList.remove(billSetting.totalClassName());
    }

    total_set.innerHTML = billSetting.getTotalCost().toFixed(2)
    callTotal_set.innerHTML = billSetting.getTotalCallCost().toFixed(2)
    smsTotal_set.innerHTML = billSetting.getTotalSmsCost().toFixed(2)

}

//event listeners
btnAdd.addEventListener('click', btnAddClick)
updateBtn.addEventListener('click', btnUpdateClicked)

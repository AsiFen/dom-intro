
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
var UpdateBtn = document.querySelector('.updateSettings');

// global, interfunction variable kuba kaloku azifuna usebenza elsewhere
var sms = 0;
var c_level = ""
var w_level = ""
var call = 0
var total = 0
//create function to plug factory function items back to 
function btnUpdateClicked() { //when update is clicked the values of the DOM elements are stored
    var sms = smsCostElem.value
    var call = callCostElem.value
    var c_level = criticalLevelElem.value
    var w_level = warningLevelElem.value

    billSetting.setSmsCost(sms)
    //  console.log((billSetting.getCriticalLevel())) // works
    billSetting.setCallCost(call)
    billSetting.setCriticalLevel(c_level)
    billSetting.setWarningLevel(w_level)
    // total_set.classList.remove(billSetting.totalClassName());
    // total_set.classList.remove(billSetting.totalClassName1());
    // alert(total < billSetting.getWarningLevel())
// console.log(total_set.classList.remove('warning'));
  //  total_set.classList.remove('warning');

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
UpdateBtn.addEventListener('click', btnUpdateClicked)














// get a reference to the sms or call radio and all html relatedbuttons
// var btnAdd = document.querySelector('.btn');
// var smsCostElem = document.querySelector('.smsCostSetting');

// var callTotal_set = document.querySelector('.callTotalSettings');
// var smsTotal_set = document.querySelector('.smsTotalSettings');
// var total_set = document.querySelector('.totalSettings');
// // create a variables that will keep track of all the settings
// var callCostElem = document.querySelector('.callCostSetting');
// var warningLevelElem = document.querySelector('.warningLevelSetting');
// var criticalLevelElem = document.querySelector('.criticalLevelSetting');
// var UpdateBtn = document.querySelector('.updateSettings');
// var btnClear = document.querySelector(".clear-btn");

// // create a variables that will keep track of all three totals.
// var smsTotal_rd = 0;
// var callTotal_rd = 0;
// var smsCost = 0;
// var callCost = 0;
// var warningLevel = 0;
// var criticalLevel = 0;
// var grandTotal = 0;



// function btnUpdateClicked() {
//     smsCost = smsCostElem.value;
//     callCost = callCostElem.value;
//     warningLevel = warningLevelElem.value;
//     criticalLevel = criticalLevelElem.value;

//     if (grandTotal < warningLevel) {
//         total_set.classList.remove('warning');
//         total_set.classList.remove('danger');

//     }

//     if (grandTotal >= warningLevel && grandTotal < criticalLevel) {
//         console.log("warning level " + grandTotal)
//         total_set.classList.add('warning');
//         total_set.classList.remove('danger');

//     }
//     else if (grandTotal >= criticalLevel) {
//         total_set.classList.add('danger');
//         total_set.classList.remove('warning');
//     }

// }
// // function that will calculate totals for radio btn group
// function btnAddClick() {
//     var checkedItem = document.querySelector('input[class="billItemTypeWithSettings"]:checked');
//     if (checkedItem) {
//         var valueOfCheckedtItem = checkedItem.value;
//         //    console.log(criticalLevel)
//         if (grandTotal < criticalLevel) {
//             // * add the appropriate value to the call / sms total
//             if (valueOfCheckedtItem == 'sms') {
//                 smsTotal_rd += parseFloat(smsCost);

//             }
//             else if (valueOfCheckedtItem == "call") {
//                 callTotal_rd += parseFloat(callCost);

//             }

//         }

//     }
//     grandTotal = callTotal_rd + smsTotal_rd;

//     if (grandTotal < warningLevel || grandTotal === 0.00) {
//         total_set.classList.remove('warning');
//         total_set.classList.remove('danger');
//     }

//     else if (grandTotal >= warningLevel && grandTotal < criticalLevel) {
//         console.log("warning level " + grandTotal)
//         total_set.classList.add('warning');
//         total_set.classList.remove('danger');

//     }
//     else if (grandTotal >= criticalLevel) {
//         total_set.classList.add('danger');
//         total_set.classList.remove('warning');
//     }

//     callTotal_set.innerHTML = callTotal_rd.toFixed(2);
//     smsTotal_set.innerHTML = smsTotal_rd.toFixed(2);
//     total_set.innerHTML = grandTotal.toFixed(2);
// }

// function clearInput() {
//     callTotal_set.innerHTML = '0.00';
//     smsTotal_set.innerHTML = '0.00';
//     total_set.innerHTML = '0.00';

//     smsTotal_rd = 0;
//     callTotal_rd = 0;
//     smsCost = 0;
//     callCost = 0;
//     warningLevel = 0;
//     criticalLevel = 0;
//     grandTotal = 0;
//     total_set.classList.remove('warning');
//     total_set.classList.remove('danger')
//     callCostElem.value = "";
//     smsCostElem.value = "";
//     warningLevelElem.value = "";
//     criticalLevelElem.value = "";

// }
// btnClear.addEventListener('click', clearInput);
// //add an event listener for when the 'Update settings' button is pressed
// UpdateBtn.addEventListener("click", btnUpdateClicked);

// //in the event listener get the value from the billItemTypeRadio radio buttons
// btnAdd.addEventListener("click", btnAddClick);

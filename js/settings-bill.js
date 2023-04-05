// get a reference to the sms or call radio and all html relatedbuttons
var btnAdd = document.querySelector('.btn');
var smsCostElem = document.querySelector('.smsCostSetting');

var callTotal_set = document.querySelector('.callTotalSettings');
var smsTotal_set = document.querySelector('.smsTotalSettings');
var total_set = document.querySelector('.totalSettings');
// create a variables that will keep track of all the settings
var callCostElem = document.querySelector('.callCostSetting');
var warningLevel = document.querySelector('.warningLevelSetting');
var criticalLevel = document.querySelector('.criticalLevelSetting');
var UpdateBtn = document.querySelector('.updateSettings');

// create a variables that will keep track of all three totals.
var smsTotal_rd = 0;
var callTotal_rd = 0;

// function that will calculate totals for radio btn group
function btnAddClick() {

    var checkedItem = document.querySelector('input[class="billItemTypeWithSettings"]:checked');
    // 
    //  alert(smsCost)
    if (checkedItem) {
        var valueOfCheckedtItem = checkedItem.value;

        if (valueOfCheckedtItem == 'sms') {
            smsTotal_rd += 1;

        }
        else if (valueOfCheckedtItem == "call") {
            callTotal_rd += 1;

        }

    }

    callTotal_set.innerHTML = callTotal_rd.toFixed(2);
    smsTotal_set.innerHTML = smsTotal_rd.toFixed(2);
    var total_rd = callTotal_rd + smsTotal_rd;
    total_set.innerHTML = total_rd.toFixed(2);

   
    // else if (total_rd >= criticalLevel.value) {
    //     total_set.classList.add('danger');
    //     btnAdd.removeAttribute('disabled');
    // }
}
btnAdd.addEventListener("click", btnAddClick);
//add an event listener for when the add button is pressed

// function to update settings
function btnUpdateClicked() {
    var smsCost = smsCostElem.value;
    var callCost = callCostElem.value;

    //     document.querySelector('.callCostSetting').innerHTML = '';
    //     document.querySelector('.smsCostSetting').innerHTML = '';
    //     document.querySelector('.warningLevelSetting').innerHTML = '';
    //     document.querySelector('.criticalLevelSetting').innerHTML = '';

    smsTotal_set.innerHTML = smsTotal_rd * smsCost;
    callTotal_set.innerHTML = callTotal_rd * callCost;
    total_rd = smsCost * smsTotal_rd + callCost * callTotal_rd;
    total_set.innerHTML = total_rd;

 if (total_rd >= criticalLevel.value) {
        total_set.classList.add('danger');
        btnAdd.removeAttribute('disabled');
    }
 
    else if (total_rd >= warningLevel.value) {
        total_set.classList.add('warning');

    }

}
UpdateBtn.addEventListener("click", btnUpdateClicked);
//add an event listener for when the 'Update settings' button is pressed



//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

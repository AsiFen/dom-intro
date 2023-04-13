//factory function
function settingsBill() {

    var theSmsCost = 0;
    var theCallCost = 0;
    var callcostTotal = 0;
    var smscostTotal = 0;
    var costTotal = 0;

    function setCallCost(callCost) {
        theCallCost = parseFloat(callCost);
    }

    function getCallCost() {
        return parseFloat(theCallCost);
    }

    function setSmsCost(smsCost) {
        theSmsCost = parseFloat(smsCost);
    }

    function getSmsCost() {
        return parseFloat(theSmsCost);
    }

    var theWarningLevel = 0;

    function setWarningLevel(warningLevel) {
        theWarningLevel = warningLevel;
    }

    function getWarningLevel() {
        return theWarningLevel;
    }
    var theCriticalLevel = 0;
    function setCriticalLevel(criticalLevel) {
        theCriticalLevel = criticalLevel;
    }

    function getCriticalLevel() {
        return theCriticalLevel;
    }

    function makeCall() {
        console.log(getCallCost());
        if (!hasReachedCriticalLevel()) {
            callcostTotal += (getCallCost());
        }
    }
    function sendSms() {
        if (!hasReachedCriticalLevel()) {
            smscostTotal += getSmsCost();
        }
    }

    function getTotalCallCost() {
        return parseFloat(callcostTotal)

    }

    function getTotalCost() {
        costTotal = getTotalCallCost() + getTotalSmsCost();
        return parseFloat(costTotal)

    }

    function getTotalSmsCost() {
        return parseFloat(smscostTotal)
    }

    function totalClassName() {
        if (getTotalCost() >= getWarningLevel()) {
            return 'warning'
        }
    }

    function totalClassName1() {
        if (getTotalCost() >= getCriticalLevel()) {
            return 'danger'

        }
    }

    function hasReachedCriticalLevel() {
        return getTotalCost() >= getCriticalLevel();
    }

    return {

        setCallCost,
        setSmsCost,
        getCallCost,
        getSmsCost,
        //theCriticalLevel,
        //theWarningLevel,
        getCriticalLevel,
        getWarningLevel,
        setCriticalLevel,
        setWarningLevel,
        makeCall,
        getTotalCallCost,
        getTotalSmsCost,
        getTotalCost,
        sendSms,
        totalClassName,
        hasReachedCriticalLevel,
        totalClassName1

    }
}

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
var call = ""
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
    var checkedItem = document.querySelector('input[class="billItemTypeWithSettings"]:checked');

    if (checkedItem) {
        var value_checked = checkedItem.value;

        console.log(value_checked)

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

    total_set.innerHTML = billSetting.getTotalCost()
    callTotal_set.innerHTML = billSetting.getTotalCallCost()
    smsTotal_set.innerHTML = billSetting.getTotalSmsCost()

}

//event listeners
btnAdd.addEventListener('click', btnAddClick)
UpdateBtn.addEventListener('click', btnUpdateClicked)
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
            return 'warning'
        
    }

    function totalClassName1() {
            return 'danger'
    }

    function hasReachedCriticalLevel() {
        return getTotalCost() >= getCriticalLevel();
    }

    return {

        setCallCost,
        setSmsCost,
        getCallCost,
        getSmsCost,
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

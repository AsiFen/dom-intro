describe('calculate-bill function', function () {
    it('should return R4.75 when sms/call is written in camel, upper or lower case', function () {
        assert.equal(calculateBtnClicked("SMS, Call, sms"), 'R4.25');
    });
    it('should return R0.00 when no data entered', function () {
        assert.equal(calculateBtnClicked(''),"R0.00");
    });
    it('should return invalid input when no sms and/or call string entered', function () {
        assert.equal(calculateBtnClicked("phone bill"),"invalid input");
    });
});
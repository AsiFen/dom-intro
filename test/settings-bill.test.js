describe('Settings-billl function', function () {
    describe('', function () {
        describe('should set the cost of call, sms, warning and critical level', function () {

            it('shoud set the call cost', function () {
                let billSetting = settingsBill();
                billSetting.setCallCost(1.75);
                assert.equal(billSetting.getCallCost(), 1.75);

                let billSetting2 = settingsBill();
                billSetting2.setCallCost(2.45);
                assert.equal(billSetting2.getCallCost(), 2.45);

            });

            it('should set the sms cost', function () {

                let billSetting = settingsBill();
                billSetting.setSmsCost(5.50);
                assert.equal(billSetting.getSmsCost(), 5.50);

                let billSetting2 = settingsBill();
                billSetting2.setCallCost(4.30);
                assert.equal(billSetting2.getCallCost(), 4.30);

            });

            it('should be able to set sms and call cost', function () {
                let billSetting = settingsBill();
                billSetting.setCallCost(4.33)
                billSetting.setSmsCost(3.44)

                assert.equal(billSetting.getCallCost(), 4.33)
                assert.equal(billSetting.getSmsCost(), 3.44)

                let billSetting2 = settingsBill();
                billSetting2.setCallCost(2.75);
                billSetting2.setSmsCost(0.75);

                assert.equal(billSetting2.getCallCost(), 2.75);
                assert.equal(billSetting2.getSmsCost(), 0.75);

            });

            it('should be able to set warning level', function () {
                let billSetting = settingsBill();
                billSetting.setWarningLevel(30);
                assert.equal(billSetting.getWarningLevel(), 30)


            });

            it('should be able to set critical level', function () {
                let billSetting4 = settingsBill();
                billSetting4.setCriticalLevel(20);
                assert.equal(billSetting4.getCriticalLevel(), 20)

            });

            it('should be able to set the critical and warning level', function () {

                let billSetting = settingsBill();
                billSetting.setCriticalLevel(20);
                billSetting.setWarningLevel(30);

                assert.equal(billSetting.getCriticalLevel(), 20);
                assert.equal(billSetting.getWarningLevel(), 30);

            });
        });
    });

    describe('use values', function () {
        it('should be able to use the call cost set', function () {

            let billSetting = settingsBill();
            billSetting.setCallCost(4.00);
            billSetting.setSmsCost(3.44);
            billSetting.setCriticalLevel(20)
            billSetting.setWarningLevel(15)

            billSetting.makeCall();
            billSetting.makeCall();
            billSetting.makeCall();

            assert.equal(billSetting.getTotalCost(), 12.00);
            assert.equal(billSetting.getTotalCallCost(), 12.00);
            assert.equal(billSetting.getTotalSmsCost(), 0.00);

        });

        it('should be able to use the call cost set', function () {

            let billSetting = settingsBill();
            billSetting.setCallCost(4.00);
            billSetting.setSmsCost(3.44);
            billSetting.setCriticalLevel(20)
            billSetting.setWarningLevel(15)

            billSetting.makeCall();
            billSetting.makeCall();
            billSetting.makeCall();

            assert.equal(billSetting.getTotalCost(), 12.00);
            assert.equal(billSetting.getTotalCallCost(), 12.00);
            assert.equal(billSetting.getTotalSmsCost(), 0.00);

        });

        it('should be able to make 2 calls at R1.35 each.', function () {

            let billSetting = settingsBill();
            billSetting.setCallCost(1.35);
            billSetting.setSmsCost(0.60);
            billSetting.setCriticalLevel(20)
            billSetting.setWarningLevel(15)

            billSetting.makeCall();
            billSetting.makeCall();


            assert.equal(billSetting.getTotalCost(), 2.70);
            assert.equal(billSetting.getTotalCallCost(), 2.70);
            assert.equal(billSetting.getTotalSmsCost(), 0.00);

        });

        it('should be able to send 2 sms tetxs at R0.85 each.', function () {

            let billSetting = settingsBill();
            billSetting.setCallCost(1.35);
            billSetting.setSmsCost(0.85);
            billSetting.setCriticalLevel(20)
            billSetting.setWarningLevel(15)

            billSetting.sendSms();
            billSetting.sendSms();


            assert.equal(billSetting.getTotalCost(), 1.70);
            assert.equal(billSetting.getTotalCallCost(), 0.00);
            assert.equal(billSetting.getTotalSmsCost(), 1.70);

        });

        it('should be able to send 2 sms tetxs at R0.85 each and make 1 call at R1.35.', function () {

            let billSetting = settingsBill();
            billSetting.setCallCost(1.35);
            billSetting.setSmsCost(0.85);
            billSetting.setCriticalLevel(20)
            billSetting.setWarningLevel(15)

            billSetting.sendSms();
            billSetting.sendSms();
            billSetting.makeCall();


            assert.equal(billSetting.getTotalCost(), 3.05);
            assert.equal(billSetting.getTotalCallCost(), 1.35);
            assert.equal(billSetting.getTotalSmsCost(), 1.70);

        });

        describe('citical level and warning level', function () {
            it('should return a class name of warning  when warning level is reached.', function () {

                let billSetting = settingsBill();
                billSetting.setCallCost(2.50);
                billSetting.setSmsCost(0.85);
                billSetting.setWarningLevel(10)
                billSetting.setCriticalLevel(20)

             
                billSetting.makeCall();
                billSetting.makeCall();
                billSetting.makeCall();
                billSetting.makeCall();

                assert.equal(billSetting.totalClassName(), 'warning');
               
            });

            it('should return a class name of critical when critical level is reached.', function () {

                let billSetting = settingsBill();
                billSetting.setCallCost(2.50);
                billSetting.setSmsCost(0.85);
                billSetting.setCriticalLevel(10)

                billSetting.makeCall();
                billSetting.makeCall();
                billSetting.makeCall();
                billSetting.makeCall(); 
                billSetting.sendSms();

                assert.equal(billSetting.totalClassName1(), 'critical');
               
            });

            it('should return a class name of critical when critical level is reached.', function () {

                let billSetting = settingsBill();
                billSetting.setCallCost(2.50);
                billSetting.setSmsCost(0.85);
                billSetting.setCriticalLevel(10)

                billSetting.makeCall();
                billSetting.makeCall();
                billSetting.makeCall();
                billSetting.makeCall(); 
                billSetting.sendSms();

                assert.equal(billSetting.totalClassName1(), 'critical');
               assert.equal(billSetting.getTotalCost(), 10)
            });

        });

    })
});


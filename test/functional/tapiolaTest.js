var tests = require('./shared/AABSharedTest');

var options = {
  bankName: 'Tapiola',
  username: '12345678',
  password: '123TAP',
  securityCode: '9999',
  returnLinkText: 'Takaisin'
};

tests.testPayment(casper, options);
tests.testCancel(casper, options);
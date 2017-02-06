# mobizonNetUa
node.js client for sending SMS via the service Mobizon.net.ua

##Examples

###Send sms
```#!javascript
const Mobizon = require('mobizon-net-ua');
const smsGate = new Mobizon({token: 'YOUR_API_TOKEN'});

smsGate.sendSms('+380671234567', 'Very cool sms')
    .then(response => {
        console.log(response);
    });
```

###Get sms status
```#!javascript
const Mobizon = require('mobizon-net-ua');
const smsGate = new Mobizon({token: 'YOUR_API_TOKEN'});

smsGate.getSmsStatus('12111324')
    .then(response => {
        console.log(response);
    });
```

###Get balance
```#!javascript
const Mobizon = require('mobizon-net-ua');
const smsGate = new Mobizon({token: 'YOUR_API_TOKEN'});

smsGate.getSmsBalance()
    .then(response => {
        console.log(response);
    });
```
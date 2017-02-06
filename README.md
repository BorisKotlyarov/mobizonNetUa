# mobizon-net-ua
node.js client for sending SMS via the service Mobizon.net.ua

##Install

``` 
npm install mobizon-net-ua
```

* About Mobizon service: [UA](https://mobizon.net.ua/) | [EN](https://mobizon.com/)
* [Mobizon api documentation](http://docs.mobizon.com/api/)  

##Examples

###Send sms
``` js
const Mobizon = require('mobizon-net-ua');
const smsGate = new Mobizon({token: 'YOUR_API_TOKEN'});

smsGate.sendSms('+380671234567', 'Very cool sms')
    .then(response => {
        console.log(response);
        /* => response
            { 
                code: 0, 
                    data: { 
                        campaignId: '1759377',
                         status: 1,
                          messageId: '12111324'
                     },
                     message: '' 
              }
          */
    });
```

###Get sms status
``` js
const Mobizon = require('mobizon-net-ua');
const smsGate = new Mobizon({token: 'YOUR_API_TOKEN'});

smsGate.getSmsStatus('12111324')
    .then(response => {
        console.log(response);
        /* => response 
        { 
            code: 0, 
            data: [ 
            { id: '12111324', status: 'DELIVRD', segNum: '1' }
             ],
            message: ''
         }
        */
    });
```

###Get balance
``` js
const Mobizon = require('mobizon-net-ua');
const smsGate = new Mobizon({token: 'YOUR_API_TOKEN'});

smsGate.getSmsBalance()
    .then(response => {
        console.log(response);
        /* => 
            { 
                code: 0, 
                data: { balance: '190.4280', currency: 'UAH' },
                message: '' 
            } 
        */
    });
```
const querystring                 = require('querystring');
const Transports                  = require('./transports');


class smsGate {

    constructor({ senderName='', token }){
        this.config = {
            senderName: senderName,
            token: token,
            sendSmsUrl: 'https://api.mobizon.com/service/message/SendSMSMessage',
            getStatusUrl: 'https://api.mobizon.com/service/message/GetSMSStatus',
            getBalanceUrl: 'https://api.mobizon.com/service/user/getownbalance',
        };
    }

    sendSms(phoneNumber, messageText){

        let options = {
            url: this.config.sendSmsUrl,
            method: 'POST',
            postBody: querystring.stringify({
                apiKey      : this.config.token,
                recipient   : phoneNumber,
                text        : messageText,
                from        : this.config.senderName,
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        return Transports.request(options)
            .then(result => {

                try {
                    let response = JSON.parse(result);
                    if(response.code===0) {
                        return response;
                    } else {
                        throw new Error(`SMS: ${response.message}`);
                    }

                } catch (error){
                    throw new Error(`The remote server respond invalid JSON. Data: (${result})`);
                }

            });
    }

    getSmsStatus(ids){

        let options = {
            url: this.config.getStatusUrl,
            method: 'POST',
            postBody: querystring.stringify({
                apiKey: this.config.token,
                ids: ids,
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        return Transports.request(options)
            .then(result => {
                try {
                    let resultJson = JSON.parse(result);
                    if(resultJson.code===0) {
                        return resultJson;
                    } else {
                        throw new Error(`SMS: ${resultJson.message}`);
                    }

                } catch (error){
                    throw new Error(`The remote server respond invalid JSON. Data: (${result})`);
                }
            });

    }

    getSmsBalance(){

        let options = {
            url: this.config.getBalanceUrl,
            method: 'POST',
            postBody: querystring.stringify({
                apiKey: this.config.token
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        return Transports.request(options)
            .then(result => {
                try {
                    let response = JSON.parse(result);
                    if(response.code===0) {
                        return response;
                    } else {
                        throw new Error(`SMS: ${response.message}`);
                    }
                } catch (error){
                    throw new Error(`The remote server respond invalid JSON. Data: (${result})`);
                }
            });
    }
}


module.exports = smsGate;
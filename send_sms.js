// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACabfde16c0fd7e4af564a465b07d1054d';
const authToken = '0ae58b1cd7864b7d8e1335030f02487c';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Thank you for signing up to volunteer with us!',
     from: '+19193361786',
     to: '+13365347691'
   })
  .then(message => console.log(message.sid));
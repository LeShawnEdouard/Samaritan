// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

export default function sendMessage(phoneNumber)
{
  client.messages
  .create({
     body: 'Thank you for signing up to volunteer with us!',
     from: '+19193361786',
     to: '+13365347691'
   })
  .then(message => console.log(message.sid));
  }
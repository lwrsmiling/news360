var regex = /https:\/\/news360\.com\/#~\w{8}\-\w{4}-\w{4}-\w{4}-\w{12}/;
var fs = require('fs');
var email_body = fs.readFileSync("msg-body.txt").toString();
var email = email_body.replace(/(\r\n|\n|\r)/gm,"").replace(/\=/g, "");
reset_link = email.match(regex)[0];
console.log(reset_link);
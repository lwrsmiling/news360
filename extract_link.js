function extractLink(){
  var regex1 = /https:\/\/news360\.com\/#~\w{3}/;
  var regex2 = /\w{5}\-\w{4}-\w{4}-\w{4}-\w{12}/;
  var fs = require('fs');
  var link;
  fs.readFile('msg-body.html', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    var link1 = data.match(regex1);
    var link2 = data.match(regex2);
    link = link1+link2;
  });
  return link;
}
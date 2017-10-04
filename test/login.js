var assert = require('assert');

describe('Sign in test', function(){
  before(function(){
    browser.setViewportSize({
        width: 1500,
        height: 800
    });
  });
  beforeEach(function(){
    browser.url('https://news360.com/intro');
    browser.waitForEnabled('button=or use your email');
    browser.click('button=or use your email');
    browser.click('a=Sign in to News360');
  });

  it('should let you log in using correct email and password', function(){
    browser.setValue('input[type="email"]', 'pythonflaskweb@yahoo.com');
    browser.setValue('input[type="password"]', '123456news360');
    browser.click('button.modal-button');
    browser.waitForExist('a.topbar-avatar');
    browser.click('a.topbar-avatar');
    browser.waitForExist('a=Sign out');
    browser.click('a=Sign out');
  });
  it('should not let you sign in using wrong password', function(){
    browser.setValue('input[type="email"]', 'pythonflaskweb@yahoo.com');
    browser.setValue('input[type="password"]', '123456');
    browser.click('button*=Sign in');
    browser.waitForExist('p.request-error');
  });
});


describe('Forgot Password and rest password', function(){
  before(function(){
    browser.setViewportSize({
        width: 1500,
        height: 800
    });
  });
  it('should let you reset a new password', function(){
    browser.url('https://news360.com/intro');
    browser.waitForEnabled('button=or use your email');
    browser.click('button=or use your email');
    browser.click('a=Sign in to News360');
    browser.click('a=Forgot password?');
    browser.setValue('input[type="email"]', 'pythonflaskweb@yahoo.com');
    browser.click('button[type="submit"]');
    //browser.click('button.reset-confirm-button');   
  });
  // before(function(){
  //   browser.setViewportSize({
  //       width: 1500,
  //       height: 800
  //   });
  // });

//   it('should open a new tab to view the email', function () {
//     browser.url('https://login.yahoo.com/');
//     browser.setValue('input[name="username"]', 'pythonflaskweb');
//     browser.click('input[type="submit"]');
//     browser.waitForExist('input[name="password"]');
//     browser.setValue('input[name="password"]', '*******');
//     browser.waitForEnabled('#login-signin');
//     browser.click('#login-signin');
//     //browser.debug();
//     //browser.waitForEnabled('div#mega-bottombar');
//     //browser.click('#mega-bottombar-mail');
//     // browser.waitUntil(function () {
//     //   return browser.getUrl()=="https://mg.mail.yahoo.com/?.src=neo&reason=bkt_myc";
//     // }, 10000, 'expected text to be different after 5s');
//     //browser.waitForExist('div#masterNav', 20000);
//     //browser.waitForEnabled('span[title="News360 Password Assistance"]');
//     //browser.click('span[title="News360 Password Assistance"]');
//   });
});



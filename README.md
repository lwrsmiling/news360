# news360

## Modules
- Webdriverio
- Mocha
- Selenium Standalone
- IMAP

## How to use
1. Download this package and open it in terminal
2. Input "npm test" in terminal and the tests will run automatically

## What I have done
The test file "test.js" is located under the "test" folder. And I finished the automation tests of:
1. "Sign in successfully using correct credentials" and "Fail to sign in with wrong credentials"
2. "Forgot password"

## What I have tried to finish
For the "forgot password", "reset password" and "login using new password" part
1. I have tried to use [node-imap](https://github.com/mscdex/node-imap) to authorize in the mail. 
   - This [node-imap](https://github.com/mscdex/node-imap) module allows you to sign in your mailbox, search the corresponding email and download the body of the email as txt file.
   - I used the APIs provided by node-imap and saved it as "email.js". The email body is also downloaded and saved as "msg-body.txt".
   - At the end of each line of "msg-body.txt", an equal sign "=" was added. I think this is because of the IMAP service. And I also found the "password reset" link was separated into two lines.
   - Therefore I wrote a second function which included a regular expression to extract the link from msg-body.txt. It's saved in "extract_link.js".
   - However, when I tried to import those two functions into the automation tests, it contained asynchronous requests. A promise should be implemented.
   
2. I also tried to login the mailbox in browsers and include this part into the automation tests.
   - I can successfully login my mailbox by clicking the corresponding buttons automatically.
   - After logining to mailbox, the DOM is a very big tree. To find the element contains the link to the "password reset" email, it took a long time.
   - However, I haven't figured out a way to locate the email.
   

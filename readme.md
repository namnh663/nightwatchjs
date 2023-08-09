<p align="center">
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Project Structure</a>
</p>

![screenshot](https://github.com/namnh663/robot/assets/74748329/dc4683d0-7b10-4895-8a15-3571c9d1f541)

Nightwatch.js is an integrated framework for performing automated end-to-end testing on web applications and websites, across all major browsers. It is written in Node.js and uses the W3C WebDriver API to interact with various browsers.

It is a complete solution for end-to-end and cross-browser testing. It aims to simplify the process of writing and running various types of tests, including:

- end-to-end tests on all major web browsers
- unit tests of Node.js services
- integration tests of HTTP APIs

## Getting Started



Running tests:

```bash
npx nightwatch ./tests --headless
```

Login Example:

```javascript
describe('Login test', function () {
    const users = require('../nightwatch/data/users.json');
    const messages = require('../nightwatch/data/messages.json');
    const loginPage = browser.page.swaglabs.login();
    beforeEach(async () => loginPage.navigate());

    it('With valid credentials', function () {
        loginPage
            .loginWithUsernameAndPassword(users.USER_001, users.PASSWORD_COMMON)
            .urlShouldEquals('https://www.saucedemo.com/inventory.html');
    });

    it('With invalid username', function () {
        const randomUsername = loginPage.randomUsernameOrPassword(10);
        loginPage
            .loginWithUsernameAndPassword(randomUsername, users.PASSWORD_COMMON)
            .errorMessageShouldBe(messages.LOGIN_ERROR_MSG_003);
    });

    it('With invalid password', function () {
        const randomPassword = loginPage.randomUsernameOrPassword(20);
        loginPage
            .loginWithUsernameAndPassword(users.USER_001, randomPassword)
            .errorMessageShouldBe(messages.LOGIN_ERROR_MSG_003);
    });

    it('With invalid username and password', function () {
        loginPage
            .loginWithUsernameAndPassword('invalid_username', 'invalid_password')
            .errorMessageShouldBe(messages.LOGIN_ERROR_MSG_003);
    });

    it('Without username and password', function () {
        loginPage
            .loginWithUsernameAndPassword('', '')
            .errorMessageShouldBe(messages.LOGIN_ERROR_MSG_001);
    });

    it('Without username', function () {
        loginPage
            .loginWithUsernameAndPassword('', users.PASSWORD_COMMON)
            .errorMessageShouldBe(messages.LOGIN_ERROR_MSG_001);
    });

    it('Without password', function () {
        loginPage
            .loginWithUsernameAndPassword(users.USER_001, '')
            .errorMessageShouldBe(messages.LOGIN_ERROR_MSG_002);
    });

    it('Locked account', function () {
        loginPage
            .loginWithUsernameAndPassword(users.USER_002, users.PASSWORD_COMMON)
            .errorMessageShouldBe(messages.LOGIN_ERROR_MSG_004);
    });

    afterEach(browser => browser.quit());
});
```

## Project Structure

<img width="259" alt="Screenshot 2023-07-24 at 00 33 05" src="https://github.com/namnh663/robot/assets/74748329/c94b8d43-a1c4-4a9a-aa9f-02b2783d9be5">
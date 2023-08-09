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

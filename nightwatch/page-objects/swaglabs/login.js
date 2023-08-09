const loginCommands = {
    enterUsername(username) {
        return this.setValue('@usernameInput', username);
    },

    enterPassword(password) {
        return this.setValue('@passwordInput', password);
    },

    clickLoginButton() {
        return this.click('@loginButton');
    },

    randomUsernameOrPassword(length) {
        const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

        // Generate a random string of the specified length
        let randomString = "";
        for (let i = 0; i < length; i++) {
            randomString += characters[Math.floor(Math.random() * characters.length)];
        }

        return randomString;
    },

    loginWithUsernameAndPassword(username, password) {
        return this
            .setValue('@usernameInput', username)
            .setValue('@passwordInput', password)
            .click('@loginButton');
    },

    urlShouldEquals(url) {
        return this.assert.urlEquals(url);
    },

    errorMessageShouldBe(errormessage) {
        return this.assert.textEquals('@errorMessage', errormessage);
    }
};

module.exports = {
    url: 'https://www.saucedemo.com',

    commands: [
        loginCommands
    ],

    elements: {
        usernameInput: {
            selector: '#user-name'
        },

        passwordInput: {
            selector: '#password'
        },

        loginButton: {
            selector: '#login-button'
        },

        errorMessage: {
            selector: 'h3[data-test=error]'
        }
    }
};

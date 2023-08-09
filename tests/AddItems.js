describe('Item in cart test', function () {
    const loginPage = browser.page.swaglabs.login();
    const productsPage = browser.page.swaglabs.products();
    beforeEach(async () => loginPage
        .navigate()
        .loginWithUsernameAndPassword('standard_user', 'secret_sauce'));

    it('Add all item', function () {
        productsPage
            .addAllItemtoCart()
            .itemsInCartShouldBe('6');
    });

    it('Add one item', function () {
        productsPage.addItemToCartByIndex(0);
        productsPage.itemsInCartShouldBe('1');
    });

    it('Add two item', function () {
        productsPage.addItemToCartByIndex(0);
        productsPage.itemsInCartShouldBe('1');
        productsPage.addItemToCartByIndex(1);
        productsPage.itemsInCartShouldBe('2');
    });

    afterEach(browser => browser.end());
});

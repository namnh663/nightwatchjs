describe('Item in cart test', function () {
    const loginPage = browser.page.swaglabs.login();
    const productsPage = browser.page.swaglabs.products();
    beforeEach(async () => loginPage
        .navigate()
        .loginWithUsernameAndPassword('standard_user', 'secret_sauce'));

    it('Remove one item', function () {
        productsPage.addAllItemtoCart();
        productsPage.itemsInCartShouldBe('6');
        productsPage.removeItemToCartByIndex(0);
        productsPage.itemsInCartShouldBe('5');
    });

    it('Remove mutiple item', function () {
        productsPage.addAllItemtoCart();
        productsPage.itemsInCartShouldBe('6');
        productsPage.removeItemToCartByIndex(0);
        productsPage.removeItemToCartByIndex(1);
        productsPage.itemsInCartShouldBe('4');
        productsPage.removeItemToCartByIndex(2);
        productsPage.itemsInCartShouldBe('3');
    });

    afterEach(browser => browser.end());
});

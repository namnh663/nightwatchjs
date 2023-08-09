const productsCommands = {
    itemsInCartShouldBe(number) {
        return this.assert.textEquals('@cartNumber', number);
    },

    addItemToCartByIndex(index) {
        return this.element.findAll('@productsList').nth(index).find('div.inventory_item_description > div.pricebar > button').click();
    },

    removeItemToCartByIndex(index) {
        return this.element.findAll('@productsList').nth(index).find('div.inventory_item_description > div.pricebar > button').click();
    },

    addAllItemtoCart() {
        return this.
            findElements('@buttonList', function (result) {
                for (let i = 0; i < result.value.length; i++) {
                    this.element.findAll('div.inventory_list > div > div.inventory_item_description > div.pricebar > button').nth(i).click();
                }
            });
    },

    addSauceLabsBoltTshirtToCart() {
        return this.click('@addSlbtButton');
    },

    addSauceLabsBikeLightToCart() {
        this.click('@addSlblButton');
        return this;
    }
};

module.exports = {
    commands: [
        productsCommands
    ],

    elements: {
        addSlbtButton: {
            selector: '#add-to-cart-sauce-labs-bolt-t-shirt'
        },

        addSlblButton: {
            selector: '#add-to-cart-sauce-labs-bike-light'
        },

        productsNameList: {
            selector: 'div.inventory_list > div > div.inventory_item_description > div > a > div'
        },

        buttonList: {
            selector: 'div.inventory_list > div > div.inventory_item_description > div.pricebar > button'
        },

        productsList: {
            selector: 'div.inventory_list > div'
        },

        cartNumber: {
            selector: '#shopping_cart_container > a > span'
        }
    }
};

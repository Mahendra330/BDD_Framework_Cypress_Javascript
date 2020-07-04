const URL = 'https://www.westwingnow.de/'
const AcceptCookies = '#onetrust-accept-btn-handler'
const RegisterLink = '[data-testid=login-button]'
const CloseRegisterionWndow = '[data-testid=overlay-header] > .StyledIcons__StyledDismissIcon-sc-1rxt1jc-3'
const InTheCart = 'In den Warenkorb'
const ShoppingCart = 'Warenkorb'
const ShoppingCartPageURL = '/cart/index/'
const Cart_Icon = '[data-testid=cart-counter]'
const ProductPriceWithoutShippingCost = '.blockCartProduct__priceText'
const ProductShippingCost = 'p.cart__form__footer__deliverTextRight'
const ProductPriceWithShippingCost = 'p.cart__form__footer__totalTextRight'
const ProductNameInShoppingCartPage = '.blockCartProduct__nameLink'

class Select_ProductPage {
    static clickOnURL() {
        cy.visit(URL)
        cy.get(AcceptCookies).click()
    }
    static closePopup() {
        cy.get(RegisterLink).click()
        cy.get(CloseRegisterionWndow).click()
    }
    static clickInTheCart() {
        cy.contains(InTheCart).click()
    }
    static clickOnShoppingCart() {
        cy.contains(ShoppingCart).click()
    }
    static verifyingShoppingCartPage() {
        cy.url().should('include', ShoppingCartPageURL)
    }
    static verifyingProductNameInShoppingCartPage(Product_Name) {
        cy.get(ProductNameInShoppingCartPage).then(function (name) {
            const productName = name.text()
            const productName1 = productName.trim()
            cy.log('Product Name in Shopping Cart is: ' + productName1)
            expect(productName1).to.equal(Product_Name)
        })
    }
    static checkCartIcon() {
        cy.get(Cart_Icon).then(function (count) {
            const Counter = count.text()
            cy.log('Cart Icon is updated with Value: ' + Counter)
        })
    }
    static checkProductPriceWithoutShippingCost() {
        return cy.get(ProductPriceWithoutShippingCost)
    }
    static checkProductShippingCost() {
        return cy.get(ProductShippingCost)
    }
    static checkProductPriceWithShippingCost() {
        return cy.get(ProductPriceWithShippingCost)
    }
}
export default Select_ProductPage
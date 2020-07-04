/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import selectProductPage from '../../../Page-Objects/Select_ProductPage'
import {
    Product_Category_under_30Euro, Product_Under30Euro_Name,
    Product1_Above30Euro_Name, Product1_Category_Above_30Euro,
    Product2_Above30Euro_Name, Product2_Category_Above_30Euro,
} from '../../../../config'

Given('I open HomePage', () => {
    selectProductPage.clickOnURL()
})
When('Click on tisch-und-kueche', () => {
    Product_Category_under_30Euro.forEach(function (element) {
        cy.selectCategory(element)
    });
})
When('Click on Möbel', () => {
    Product1_Category_Above_30Euro.forEach(function (element) {
        cy.selectCategory(element)
    });
})
When('Click on Textilien & Teppiche', () => {
    Product2_Category_Above_30Euro.forEach(function (element) {
        cy.selectCategory(element)
    });
})
When('There is a product {string}, which costs {string}', () => {
    Product_Under30Euro_Name.forEach(function (element) {
        cy.DisplayProducts(element)
    });
})
When('There is a product {string}, which has costs {string}', () => {
    Product1_Above30Euro_Name.forEach(function (element) {
        cy.DisplayProducts(element)
    });
})
When('There is a product {string}, which have costs {string}', () => {
    Product2_Above30Euro_Name.forEach(function (element) {
        cy.DisplayProducts(element)
    });
})
When('Click on Product {string},which cost under {string}', () => {
    selectProductPage.closePopup()
    Product_Under30Euro_Name.forEach(function (element) {
        cy.SelectProducts(element)
    });
})
When('Click on Product {string},which cost above {string}', () => {
    selectProductPage.closePopup()
    Product1_Above30Euro_Name.forEach(function (element) {
        cy.SelectProducts(element)
    });
})
When('Click on Product {string},which has cost above {string}', () => {
    selectProductPage.closePopup()
    Product2_Above30Euro_Name.forEach(function (element) {
        cy.SelectProducts(element)
    });
})
When('I add product {string} to the basket', () => {
    selectProductPage.clickInTheCart()
})
When('I Click on Shopping Cart', () => {
    selectProductPage.clickOnShoppingCart()
})
Then('I should have one product in the basket', () => {
    selectProductPage.verifyingShoppingCartPage()
    selectProductPage.checkCartIcon()
})
Then('The product available in cart should be {string}, which cost under {string}', Product_Under30Cost_Name => {
    selectProductPage.verifyingProductNameInShoppingCartPage(Product_Under30Cost_Name)
})
Then('The product available in cart should be {string}, which cost above {string}', Product1_Above30Euro_Name => {
    selectProductPage.verifyingProductNameInShoppingCartPage(Product1_Above30Euro_Name)
})
Then('The product available in cart should be {string}, which has cost above {string}', Product2_Above30Euro_Name => {
    selectProductPage.verifyingProductNameInShoppingCartPage(Product2_Above30Euro_Name)
})
Then('The overall basket price should be {string}', () => {
    var sum = 0
    selectProductPage.checkProductPriceWithoutShippingCost().then(function (value) {
        const finalValue = value.text()
        sum = sum + Number(finalValue)
    }).then(function () {
        cy.log('Product Cost Without Shipping Charge is ' + sum)
    })
    selectProductPage.checkProductShippingCost().then(function (shippingCost) {
        const ShippingCost = shippingCost.text()
        cy.log("Shipping cost is : " + ShippingCost)
        sum = sum + Number(ShippingCost)
    }).then(function () {
        cy.log('Product Cost after including Shipping Charge is ' + sum)
    })
    selectProductPage.checkProductPriceWithShippingCost().then(function (totalvalue) {
        const Totalvalue = totalvalue.text()
        cy.log("Total Product cost displaying is : " + Totalvalue)
        expect(Number(Totalvalue)).to.equals(sum)
    })
})
Then('The overall basket price should be {string},Which is free of Shipping Charge', () => {
    var sum = 0
    selectProductPage.checkProductPriceWithoutShippingCost().then(function (value) {
        const finalValue = value.text()
        cy.log('Product Cost Without Shipping Charge is ' + finalValue)
        var finalValue1 = finalValue.split('.')
        finalValue1 = finalValue1[0].trim()
        cy.log('Product Cost Without Shipping Charge After Trim is ' + finalValue1)
        sum = sum + Number(finalValue1)
    })
    selectProductPage.checkProductShippingCost().then(function (shippingCost) {
        const ShippingCost = shippingCost.text()
        cy.log("Shipping cost is : " + ShippingCost)
    })
    selectProductPage.checkProductPriceWithShippingCost().then(function (totalvalue) {
        const Totalvalue = totalvalue.text()
        cy.log("Total Product cost displaying is : " + Totalvalue)
        var Totalvalue1 = Totalvalue.split('.')
        Totalvalue1 = Totalvalue1[0].trim()
        cy.log('Total Product cost displaying After Trim is ' + Totalvalue1)
        expect(Number(Totalvalue1)).to.equals(sum)
    })
})
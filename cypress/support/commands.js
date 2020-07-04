Cypress.Commands.add('isVisible', selector => {
    cy.get(selector).should('be.visible')
})

Cypress.Commands.add('isHidden', selector => {
    cy.get(selector).should('not.exist')
})

Cypress.Commands.add("selectCategory", (category) => {
    cy.get('li.Navigation__StyledNavItem-foe42i-6.cMeNXg').each(($el, index, $list) => {
        const text1 = $el.text()
        if (text1.includes(category)) {
            cy.get('li.Navigation__StyledNavItem-foe42i-6.cMeNXg').eq(index).click()
            cy.wait(2000)
        }
    })
})
Cypress.Commands.add("DisplayProducts", (products) => {
       cy.get('.GenericProduct__StyledProductLink-sc-6ow56k-1').each(($e3, index, $list) => {
        const text3 = $e3.text()
        if (text3.includes(products)) {
            cy.wait(1000)
            cy.get('.GenericProduct__StyledProductLink-sc-6ow56k-1').eq(index).should('be.visible')
            cy.get('.GenericProduct__StyledProductLink-sc-6ow56k-1').eq(index).then(function (name1) {
                const Product_Details = name1.text()
                cy.log('Display Product Details: '+ Product_Details)
            })
        }
    })
})
Cypress.Commands.add("SelectProducts", (name) => {
    cy.get('.GenericProduct__StyledProductLink-sc-6ow56k-1').each(($e2, index, $list) => {
     const text2 = $e2.text()
     if (text2.includes(name)) {
         cy.get('.GenericProduct__StyledProductLink-sc-6ow56k-1').eq(index).click({ force: true })
     }
 })
})


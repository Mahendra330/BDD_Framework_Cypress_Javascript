Feature:Product basket
  In order to buy products
  As a customer
  I need to be able to put interesting products from interesting category into a basket

  Rules:
  - Delivery for basket under £30 is £3.90
  - Delivery for basket over £30 is free

  Scenario: Buying a single product under £30 from Product Category tisch-und-kueche
    Given I open HomePage 
    When Click on tisch-und-kueche
    And There is a product "Hochglanz-Tablett Hayley in Weiß", which costs '28,99 €'
    And Click on Product "Hochglanz-Tablett Hayley in Weiß",which cost under '30 €'
    And I add product "Hochglanz-Tablett Hayley in Weiß" to the basket
    And I Click on Shopping Cart
    Then I should have one product in the basket
    And The product available in cart should be "Hochglanz-Tablett Hayley in Weiß", which cost under '30 €'
    And The overall basket price should be '32.89 €'

  Scenario: Buying a single product above £30 from Product Category Möbel
    Given I open HomePage 
    When Click on Möbel
    And There is a product "Samt-Polsterstuhl Tess", which has costs '194 €'
    And Click on Product "Samt-Polsterstuhl Tess",which cost above '30 €'
    And I add product "Samt-Polsterstuhl Tess" to the basket
    And I Click on Shopping Cart
    Then I should have one product in the basket
    And The product available in cart should be "Samt-Polsterstuhl Tess", which cost above '30 €'
    And The overall basket price should be '194 €',Which is free of Shipping Charge

  Scenario: Buying a single product above £30 from Product Category Textilien & Teppiche
    Given I open HomePage 
    When Click on Textilien & Teppiche
    And There is a product "Handgetufteter Teppich Naima mit Fransen", which have costs '82 €'
    And Click on Product "Handgetufteter Teppich Naima mit Fransen",which has cost above '30 €'
    And I add product "Handgetufteter Teppich Naima mit Fransen" to the basket
    And I Click on Shopping Cart
    Then I should have one product in the basket
    And The product available in cart should be "Handgetufteter Teppich Naima mit Fransen", which has cost above '30 €'
    And The overall basket price should be '82 €',Which is free of Shipping Charge

  
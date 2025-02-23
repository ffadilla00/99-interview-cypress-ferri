/// <reference types="cypress" />

/* 
  Welcome QA candidate! Good luck in writing your test script! 
  You may structure or name your file however you see fit as this is just a template
*/

describe("Test Suite 3", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
    Cypress.on('uncaught:exception', (err) => {
      console.error('Uncaught exception:', err);
      return false;
    });
    
    cy.visit(Cypress.config('baseUrl')), { failOnStatusCode: false };
    cy.get('._2dHwl').contains('Buy').should('be.visible');
    cy.get('._2dHwl').contains('Rent').should('be.visible');
  })

  it("Test Case 1 - Assertion on first view and render buy filter", () => {
    cy.get('._2dHwl').contains('Buy').should('be.visible');
    cy.get('._2rxBL').contains('Price range').should('not.be.disabled')
    cy.get('._2rxBL').contains('Property type').should('not.be.disabled');
    cy.get('._2rxBL').contains('Bedrooms').should('not.be.disabled');

  })

  it("Test Case 2 - Buy using price range filter and verify result", () => {
    cy.get('._2383q').eq(0).click();
    cy.get('input[placeholder="Min"]').click()
    cy.wait(1500);
    
    cy.get('body').then(($body) => {
      if ($body.find('#wiz-iframe-intent').length) { 
        // If iframe appars, then close it
        cy.get('#wiz-iframe-intent', { timeout: 7500 })
          .its('0.contentDocument.body').should('not.be.empty')
          .then(cy.wrap)
          .find('.InterstitialClose, .close-button')
          .click({ force: true });
    
        cy.log('Popup ditemukan dan ditutup');
      } else {
        // if iframe not appears, then continue
        cy.log('Popup tidak muncul, lanjutkan tes');
      }
    });

    cy.get('input[placeholder="Min"]').type('500000');
    cy.get('input[placeholder="Max"]').type('1000000');
    cy.get('._1dg5o').should('contain.text','$500K ~ $1M');
    cy.getBySel('search').click();
    cy.wait(1000);
    cy.url().should('include', '/singapore/sale?price_range=500000%2C1000000');

  })

  it("Test Case 3 - Buy using property type filter and verify result ", () => {
    cy.reload();
    cy.get('._2383q').eq(1).click()
    cy.get('._2NcKP').contains('Condo').click()
    cy.get('._1dg5o').should('contain.text','Condo');
    cy.getBySel('search').click();
    cy.wait(1000);
    cy.url().should('include', '/singapore/sale?main_category=condo');
  });

  it("Test Case 4 - Buy using Bedroom filter and verify result ", () => {
    cy.reload();
    cy.get('._2383q').eq(2).click()
    cy.contains('Studio').click();
    cy.contains('2 Bedroom').click();

    cy.get('body').then(($body) => {
      if ($body.find('#wiz-iframe-intent').length) { 
        // If iframe appars, then close it
        cy.get('#wiz-iframe-intent', { timeout: 3000 })
          .its('0.contentDocument.body').should('not.be.empty')
          .then(cy.wrap)
          .find('.InterstitialClose, .close-button')
          .click({ force: true });
    
        cy.log('Popup ditemukan dan ditutup');
      } else {
        // if iframe not appears, then continue
        cy.log('Popup tidak muncul, lanjutkan tes');
      }
    });

    cy.get('._1dg5o').should('contain.text','Studio, 2 Beds');
    cy.getBySel('search').click();
    cy.wait(1000);
    cy.url().should('include', '/singapore/sale?rooms=0,2');
  });

  it("Test Case 5 - Assertion on first view and render Rent filter", () => {
    cy.reload();
    cy.get('._2dHwl').contains('Rent').should('be.visible').click();
    cy.get('._2rxBL').contains('Price range').should('not.be.disabled')
    cy.get('._2rxBL').contains('Property type').should('not.be.disabled');
    cy.get('._2rxBL').contains('Bedrooms').should('not.be.disabled');
    cy.get('._2rxBL').contains('Rental type').should('not.be.disabled');
  });

  it("Test Case 6 - Rent using price range filter and verify result", () => {
    cy.reload();
    cy.get('._2dHwl').contains('Rent').should('be.visible').click();
    cy.wait(1000);
    
    cy.get('body').then(($body) => {
      if ($body.find('#wiz-iframe-intent').length) { 
        // If iframe appars, then close it
        cy.get('#wiz-iframe-intent', { timeout: 7500 })
          .its('0.contentDocument.body').should('not.be.empty')
          .then(cy.wrap)
          .find('.InterstitialClose, .close-button')
          .click({ force: true });
    
        cy.log('Popup ditemukan dan ditutup');
      } else {
        // if iframe not appears, then continue
        cy.log('Popup tidak muncul, lanjutkan tes');
      }
    });

    cy.get('._2383q').eq(0).click();
    cy.get('input[placeholder="Min"]').click()
    cy.get('input[placeholder="Min"]').type('500');
    cy.get('input[placeholder="Max"]').type('500');
    cy.get('._1dg5o').should('contain.text','$500 ~ $500 /mo');
    cy.getBySel('search').click();
    cy.wait(1000);
    cy.url().should('include', '/singapore/rent?price_range=500%2C500');

  });

  it("Test Case 7 - Rent using property type filter and verify result", () => {
    cy.reload();
    cy.get('._2dHwl').contains('Rent').should('be.visible').click();
    cy.wait(1000);

    cy.get('body').then(($body) => {
      if ($body.find('#wiz-iframe-intent').length) { 
        // If iframe appars, then close it
        cy.get('#wiz-iframe-intent', { timeout: 7500 })
          .its('0.contentDocument.body').should('not.be.empty')
          .then(cy.wrap)
          .find('.InterstitialClose, .close-button')
          .click({ force: true });
    
        cy.log('Popup ditemukan dan ditutup');
      } else {
        // if iframe not appears, then continue
        cy.log('Popup tidak muncul, lanjutkan tes');
      }
    });

    cy.get('._2383q').eq(1).click();
    cy.get('._2NcKP').contains('Condo').click()
    cy.get('._1dg5o').should('contain.text','Condo');
    cy.getBySel('search').click();
    cy.wait(1000);
    cy.url().should('include', '/singapore/rent?main_category=condo');
  });

  it("Test Case 8 - Rent using bedrooms filter and verify result", () => {
    cy.reload();
    cy.get('._2dHwl').contains('Rent').should('be.visible').click();
    cy.wait(1000);

    cy.get('body').then(($body) => {
      if ($body.find('#wiz-iframe-intent').length) { 
        // If iframe appars, then close it
        cy.get('#wiz-iframe-intent', { timeout: 7500 })
          .its('0.contentDocument.body').should('not.be.empty')
          .then(cy.wrap)
          .find('.InterstitialClose, .close-button')
          .click({ force: true });
    
        cy.log('Popup ditemukan dan ditutup');
      } else {
        // if iframe not appears, then continue
        cy.log('Popup tidak muncul, lanjutkan tes');
      }
    });

    cy.get('._2383q').eq(2).click();
    cy.contains('Studio').click();
    cy.contains('2 Bedroom').click();
    cy.get('._1dg5o').should('contain.text','Studio, 2 Beds');
    cy.getBySel('search').click();
    cy.wait(1000);
    cy.url().should('include', '/singapore/rent?rooms=0,2');
  });

  it("Test Case 9 - Rent using rental type filter and verify result", () => {
    cy.reload();
    cy.get('._2dHwl').contains('Rent').should('be.visible').click();
    cy.wait(1000);

    cy.get('body').then(($body) => {
      if ($body.find('#wiz-iframe-intent').length) { 
        // If iframe appars, then close it
        cy.get('#wiz-iframe-intent', { timeout: 7500 })
          .its('0.contentDocument.body').should('not.be.empty')
          .then(cy.wrap)
          .find('.InterstitialClose, .close-button')
          .click({ force: true });
    
        cy.log('Popup ditemukan dan ditutup');
      } else {
        // if iframe not appears, then continue
        cy.log('Popup tidak muncul, lanjutkan tes');
      }
    });
    
    cy.get('._2383q').eq(3).click();
    cy.contains('Entire unit').click();
    cy.getBySel('search').click();
    cy.wait(1000);
    cy.url().should('include', '/singapore/rent?rental_type=room&room_type=master%2Ccommon');
  });
});

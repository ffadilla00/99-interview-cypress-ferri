/// <reference types="cypress" />

/* 
  Welcome QA candidate! Good luck in writing your test script! 
  You may structure or name your file however you see fit as this is just a template
*/

describe("Test Suite 2", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
    Cypress.on('uncaught:exception', (err) => {
      console.error('Uncaught exception:', err);
      return false;
    });
    //Optional
    cy.visit(Cypress.config('baseUrl')), { failOnStatusCode: false };
  });

  it("Test Case 1 - Asserting Bloomsbury Residences link and url page", () => {
    cy.getBySel('popularProjects')
      .contains('Bloomsbury Residences')
      .closest('a') // Find the nearest <a> tag within href
      .should('be.visible') // assertion the page is fully loaded
      .should('have.attr', 'href') // Assertion has href path
      .and('include', '/bloomsbury-residences'); // and expected path into the link page
    cy.getBySel('popularProjects')
      .contains('Bloomsbury Residences').click(); // navigate to url by title
    cy.url().should('include', '/singapore/condos-apartments/bloomsbury-residences'); // Find an expected url during navigate into the page
  });

  it("Test Case 2 - Asserting One Sophia / The Collective At One Sophia link and url page", () => {
    cy.getBySel('popularProjects')
      .contains('One Sophia / The Collective At One Sophia')
      .closest('a') // Find the nearest <a> tag within href
      .should('be.visible') // assertion the page is fully loaded
      .should('have.attr', 'href') // Assertion has href path
      .and('include', '/one-sophia-the-collective-at-one-sophia') // and expected path into the link page
    cy.getBySel('popularProjects')
      .contains('One Sophia / The Collective At One Sophia').click(); // navigate to url by title
    cy.url().should('include', '/singapore/condos-apartments/one-sophia-the-collective-at-one-sophia'); // Find an expected url during navigate into the page
  });

  it("Test Case 3 - Asserting Parktown Residence link and url page", () => {
    cy.getBySel('popularProjects')
      .contains('Parktown Residence')
      .closest('a') // Find the nearest <a> tag within href
      .should('be.visible') // assertion the page is fully loaded
      .should('have.attr', 'href') // Assertion has href path
      .and('include', '/parktown-residence'); // and expected path into the link page
    cy.getBySel('popularProjects')
      .contains('Parktown Residence').click(); // navigate to url by title
    cy.url().should('include', '/singapore/condos-apartments/parktown-residence'); // Find an expected url during navigate into the page
  });

  it("Test Case 4 - Assertion object 4", () => {
    // Why the link and image just having for 3 popular projecf, in any browser it will be return 3 popular projecf ???
    // in console log response any error content.1.bundle.js:181 Uncaught Error: This script should only be loaded in a browser extension.
    // remote-object-helper-page.js:27 Uncaught (in promise)
  });
});

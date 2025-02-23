/// <reference types="cypress" />

/* 
  Welcome QA candidate! Good luck in writing your test script! 
  You may structure or name your file however you see fit as this is just a template
*/

describe("Test Suite 1", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
    Cypress.session.clearAllSavedSessions();
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err);
      return false;
    });
    //Optional
    cy.visit(Cypress.config('baseUrl')), { failOnStatusCode: false };
  });

  it.only("Test Case 1 - Verify H2 title exist", () => {
      //Write your automation script here for Test Case 1
      cy.contains('Featured projects').should('be.exist');
      cy.contains('Popular projects').should('be.exist');
      cy.contains('Find your property value instantly').should('be.exist');
      cy.contains('Listings with videos').should('be.exist');
      cy.contains('Popular listings').should('be.exist');
      cy.contains('Featured stories').should('be.exist');
      cy.contains('Listings found only on 99').should('be.exist');
      cy.contains('Latest New Launches').should('be.exist');
      cy.contains('Explore 99.co').should('be.exist');
  });

  it("Test Case 2", () => {
    //Optional
  });

  it("Test Case 3", () => {
    //Optional
  });
});

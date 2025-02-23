// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('getBySel', (selector, ...args) => {
    if (selector.indexOf(' ') > 0) {
      const sels = selector.substring(0, selector.indexOf(' '));
      const getsel = `[data-cy="${sels}"] ${selector.substring(selector.indexOf(' '))}`;
      return cy.get(getsel, { timeout: 10000, ...args });
    }
    return cy.get(`[data-cy="${selector}"]`, { timeout: 10000, ...args });
  });
  
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

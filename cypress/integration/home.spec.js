// / <reference types="Cypress" />

const menu = '[data-cy="menu"]';
const mask = '[data-cy="mask"]';

const mobile = preset => {
  cy.viewport(preset);
  cy.wait(200);

  // Open Drawer
  cy.get(menu)
    .click()
    .should('be.visible');
  cy.get(mask).should('be.visible');

  cy.wait(1000);

  // Close Drawer
  cy.get(mask).click({ force: true });

  cy.viewport(preset, 'landscape');

  // Open Drawer
  cy.get(menu)
    .click()
    .should('be.visible');
  cy.get(mask).should('be.visible');

  cy.wait(1000);

  // Close Drawer
  cy.get(mask).click({ force: true });
};

context('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Desktop', () => {
    // Open Drawer
    cy.get(menu).click();
    cy.get(menu).should('be.visible');
    cy.get(mask).should('be.visible');

    cy.wait(1000);

    // Close Drawer
    cy.get(mask).click();
  });

  it('iphone-6+', () => mobile('iphone-6+'));

  it('iphone-6', () => mobile('iphone-6'));

  it('iphone-5', () => mobile('iphone-5'));

  it('iphone-4', () => mobile('iphone-4'));

  it('iphone-3', () => mobile('iphone-3'));

  it('ipad-2', () => mobile('ipad-2'));
});

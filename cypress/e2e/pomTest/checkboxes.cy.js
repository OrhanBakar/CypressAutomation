// <reference types="cypress" />
import { checkboxes } from '../../support/pages/checkboxes';

describe('Checkbox test', () => {
  beforeEach('Navigate to upload page', () => {
    cy.clearCookies();
    cy.visit('/checkboxes');
  });

  it('Verify the checkboxes', () => {
    checkboxes.checkbox1.check().should('be.checked');
    checkboxes.checkbox2.check().should('be.checked');
  });
});
